import { test, runTests } from 'https://deno.land/std/testing/mod.ts';
import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';

import * as mod from '../mod.ts';
import { defineTests } from './tests.ts';

defineTests(mod, { test, assertEquals });

runTests();
