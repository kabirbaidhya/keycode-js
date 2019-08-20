import { test, runTests } from 'https://deno.land/std/testing/mod.ts';
import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';

import * as mod from '../mod.ts';
import { beginTests } from './tests.ts';

beginTests(mod, { test, assertEquals });
runTests();
