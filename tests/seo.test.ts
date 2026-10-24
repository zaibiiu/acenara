import { test } from "node:test";
import assert from "node:assert/strict";
import { resolveSiteUrl } from "../src/lib/seo.ts";
test("public origins require HTTPS and reject local hosts", () => {
  for (const value of [
    "",
    "invalid",
    "http://acenara.pages.dev",
    "https://localhost:3000",
    "https://127.0.0.1:3000",
    "https://[::1]:3000",
    "https://test.localhost",
  ])
    assert.equal(resolveSiteUrl(value), undefined);
});
test("public origin normalizes deployment URLs without inventing a hostname", () => {
  assert.equal(
    resolveSiteUrl("https://assigned-site.pages.dev/a/path?query=yes"),
    "https://assigned-site.pages.dev",
  );
});
