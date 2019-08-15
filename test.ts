import { test, runTests } from 'https://deno.land/std/testing/mod.ts';
import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';

import * as KeyCode from './mod.ts';
import { defineTests } from './test-definitions.ts';

// Tests for Deno Module.
console.log('Deno Module');
defineTests(KeyCode, { test, assertEquals });

runTests();
