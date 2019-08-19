const { assert } = chai;
const { defineTests } = KeyCodeJSTests;

const mod = KeyCode;

defineTests(mod, { test: it, assertEquals: assert.equal });
