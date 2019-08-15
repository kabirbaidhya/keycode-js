const { assert } = require('chai');

const { defineTests } = require('./dist/test-definitions.cjs');
const KeyCode = require('./dist/keycode.cjs.js');

// Tests for Node (Common JS) Build.
describe('Node (Common JS) Build', () => {
  defineTests(KeyCode, {
    test: it,
    assertEquals: assert.equal
  });
});
