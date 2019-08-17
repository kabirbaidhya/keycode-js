const { assert } = require('chai');
const { defineTests } = require('../dist/test-definitions.umd.js');

const mod = require('../dist/keycode.cjs.js');

defineTests(mod, { test: it, assertEquals: assert.equal });
