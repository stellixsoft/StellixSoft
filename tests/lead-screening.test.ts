import { test } from "node:test";
import assert from "node:assert/strict";
import { screenEnquiry } from "../src/lib/lead-screening";

const base = { name: "Jane Doe", renderedAt: "0", now: 100_000 };

test("real buyer enquiries pass as leads", () => {
  for (const text of [
    "We are a logistics company looking to modernize our VB.NET dispatch portal to .NET 8.",
    "Looking for an outsourcing partner to build an RFID asset tracking dashboard. Budget around $50k.",
    "Need a quote for a private LLM deployment on our own servers for invoice extraction.",
  ]) {
    assert.equal(screenEnquiry({ ...base, enquiryType: "project", text }).verdict, "lead", text);
  }
});

test("vendor pitches are flagged as solicitations", () => {
  for (const text of [
    "I came across your website and noticed it is not on the first page of Google.",
    "We offer SEO services and high quality backlinks at affordable prices.",
    "Our agency specializes in white label development. Partnership opportunity!",
    "We are a digital marketing agency. Our rates start at $10/hr.",
  ]) {
    assert.equal(screenEnquiry({ ...base, enquiryType: "project", text }).verdict, "solicitation", text);
  }
});

test("self-identified vendors and job seekers are solicitations", () => {
  assert.equal(screenEnquiry({ ...base, enquiryType: "vendor", text: "Hello there" }).verdict, "solicitation");
  assert.equal(screenEnquiry({ ...base, enquiryType: "job", text: "Hello there" }).verdict, "solicitation");
  assert.equal(screenEnquiry({ ...base, text: "Please find my attached CV for any open role" }).verdict, "solicitation");
});

test("bots are spam", () => {
  assert.equal(screenEnquiry({ ...base, honeypot: "x", text: "hi" }).verdict, "spam");
  assert.equal(screenEnquiry({ ...base, renderedAt: "99000", text: "hi there" }).verdict, "spam");
  assert.equal(
    screenEnquiry({ ...base, text: "http://a.com http://b.com http://c.com http://d.com" }).verdict,
    "spam",
  );
});
