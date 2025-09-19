const hello = require("./app");
const assert = require("assert");

try {
  assert.strictEqual(hello("DevOps"), "Hello, DevOps!");
  console.log("✅ Test passed");
  process.exit(0);
} catch (err) {
  console.error("❌ Test failed", err);
  process.exit(1);
}
