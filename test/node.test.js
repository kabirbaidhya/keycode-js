const { assert } = require('chai');
const { defineTests } = require('./tests.dist.umd');

const mod = require('../dist/keycode.cjs');

defineTests(mod, { test: it, assertEquals: assert.equal });
