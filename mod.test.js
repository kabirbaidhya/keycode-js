(({ mod, chai, defs }) => {
  const { assert } = chai;
  const { defineTests } = defs;

  // Tests for usage with Node or Browser.
  defineTests(mod, { test: it, assertEquals: assert.equal });
})({
  chai: this.chai || require('chai'),
  mod: this.KeyCode || require('./dist/keycode.cjs.js'),
  defs: this.KeyCodeJSTestDefinitions || require('./dist/test-definitions.umd.js')
});
