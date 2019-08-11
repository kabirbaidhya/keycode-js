import { test, runTests } from 'https://deno.land/std/testing/mod.ts';
import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';

import { KEY_ENTER, KEY_PERIOD } from './mod.ts';

/**
 * Deno tests for only a few key codes because all other keys are
 * tested in test/KeyCode.spec.js
 */

test(function keyEnter() {
  assertEquals(KEY_ENTER, 14);
});

test(function keyPeriod() {
  assertEquals(KEY_PERIOD, 190);
});

runTests();
