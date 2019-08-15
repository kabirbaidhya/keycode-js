const { assert } = require('chai');

const KeyCode = require('./dist/keycode.cjs');
const { defineTests } = require('./dist/test-definitions.cjs');

// Tests for Node (Common JS) Module.
defineTests(KeyCode, {
  test: it,
  assertEquals: assert.equal
});
