import { assertEquals } from 'https://deno.land/std@v0.36.0/testing/asserts.ts';

import * as mod from '../mod.ts';
import { beginTests } from './tests.ts';

const test = (name: string, fn: () => void) => Deno.test({ name, fn });

beginTests(mod, { test, assertEquals });

await Deno.runTests();
