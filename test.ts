import { test, runTests } from 'https://deno.land/std/testing/mod.ts';
import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';

import * as KeyCode from './mod.ts';
import { defineTests } from './test-definitions.ts';

/** Test Definitions */
defineTests(KeyCode, { test, assertEquals });

runTests();
