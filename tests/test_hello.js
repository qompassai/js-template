// Smoke test: run with `node --test tests/test_hello.js`.
const { test } = require("node:test");
const assert = require("node:assert");
const { execFileSync } = require("node:child_process");

test("hello runs", () => {
  const out = execFileSync("node", ["src/00_hello.js"],
    { encoding: "utf8" });
  assert.match(out, /Hello/);
});
