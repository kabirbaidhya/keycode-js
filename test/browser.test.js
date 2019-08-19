const { assert } = chai;
const { beginTests } = KeyCodeJSTests;

const mod = KeyCode;

beginTests(mod, { test: it, assertEquals: assert.equal });
