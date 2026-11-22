import { test } from "node:test";
import assert from "node:assert/strict";
import { buildRootJsonLdGraph } from "../src/lib/schema";

test("root graph has a Houston LocalBusiness node linked to the Organization", () => {
  const graph = buildRootJsonLdGraph()["@graph"] as Array<Record<string, any>>;
  const org = graph.find((n) => n["@type"] === "Organization");
  const local = graph.find((n) => n["@type"] === "ProfessionalService");
  assert.ok(org && local);
  assert.equal(local["@id"].endsWith("/#localbusiness"), true);
  assert.equal(local.address.addressLocality, "Houston");
  assert.equal(local.address.addressRegion, "TX");
  assert.deepEqual(local.parentOrganization, { "@id": org["@id"] });
  // No unconfirmed facts.
  for (const key of ["aggregateRating", "review", "priceRange", "openingHoursSpecification"]) {
    assert.equal(key in local, false, key);
  }
});
