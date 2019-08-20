const { assert } = require('chai');
const { beginTests } = require('./dist/tests.umd');

const mod = require('../dist/keycode.cjs');

beginTests(mod, { test: it, assertEquals: assert.equal });
