const { assert } = require('chai');
const { defineTests } = require('./dist/tests.umd');

const mod = require('../dist/keycode.cjs');

defineTests(mod, { test: it, assertEquals: assert.equal });
