const { assert } = chai;
const { defineTests } = KeyCodeJSTestDefinitions;

const mod = KeyCode;

defineTests(mod, { test: it, assertEquals: assert.equal });
