import { test } from "node:test";
import assert from "node:assert/strict";
import {
  isHomepageSearchJunk,
  isLegacyGonePath,
} from "../src/lib/legacy-gone-paths";

test("isLegacyGonePath blocks WordPress and old sitemap paths", () => {
  assert.equal(isLegacyGonePath("/wp-admin"), true);
  assert.equal(isLegacyGonePath("/wp-content/uploads/x.jpg"), true);
  assert.equal(isLegacyGonePath("/wp-json/"), true);
  assert.equal(isLegacyGonePath("/xmlrpc.php"), true);
  assert.equal(isLegacyGonePath("/wp-sitemap.xml"), true);
  assert.equal(isLegacyGonePath("/portfolio-sitemap.xml"), true);
  assert.equal(isLegacyGonePath("/sitemap_index.xml"), true);
  assert.equal(isLegacyGonePath("/post-sitemap.xml"), true);
  assert.equal(isLegacyGonePath("/page-sitemap.xml"), true);
});

test("isLegacyGonePath blocks archives, feeds, amp, detail, and php", () => {
  assert.equal(isLegacyGonePath("/author/admin"), true);
  assert.equal(isLegacyGonePath("/tag/seo"), true);
  assert.equal(isLegacyGonePath("/feed"), true);
  assert.equal(isLegacyGonePath("/feed/"), true);
  assert.equal(isLegacyGonePath("/comments/feed"), true);
  assert.equal(isLegacyGonePath("/amp"), true);
  assert.equal(isLegacyGonePath("/detail/foo"), true);
  assert.equal(isLegacyGonePath("/index.php"), true);
});

test("isLegacyGonePath does not block live marketing routes or sitemap.xml", () => {
  assert.equal(isLegacyGonePath("/"), false);
  assert.equal(isLegacyGonePath("/sitemap.xml"), false);
  assert.equal(isLegacyGonePath("/blog"), false);
  assert.equal(
    isLegacyGonePath("/blog/category/enterprise-development"),
    false,
  );
  assert.equal(isLegacyGonePath("/services/enterprise-development"), false);
  assert.equal(isLegacyGonePath("/tools/rfid-roi-calculator"), false);
  assert.equal(isLegacyGonePath("/contact"), false);
});

test("isHomepageSearchJunk flags only homepage ?s=", () => {
  assert.equal(isHomepageSearchJunk("/", new URLSearchParams("s=test")), true);
  assert.equal(
    isHomepageSearchJunk("/blog", new URLSearchParams("s=test")),
    false,
  );
  assert.equal(
    isHomepageSearchJunk("/", new URLSearchParams("utm_source=x")),
    false,
  );
});

test("isLegacyGonePath blocks old WordPress portfolio and pricing archives", () => {
  assert.equal(isLegacyGonePath("/portfolio/doctor-appliance-website-implementation-process"), true);
  assert.equal(isLegacyGonePath("/project/prime-code-custom-web-software-development"), true);
  assert.equal(isLegacyGonePath("/pricing-services/php-laravel"), true);
  assert.equal(isLegacyGonePath("/pricing"), false);
  assert.equal(isLegacyGonePath("/case-studies/enterprise-portal-modernization"), false);
});
