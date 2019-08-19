import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

export default [
  {
    input: 'mod.ts',
    output: {
      name: 'KeyCode',
      format: 'cjs',
      file: 'dist/keycode.cjs.js'
    }
  },
  {
    input: 'mod.ts',
    output: {
      name: 'KeyCode',
      format: 'iife',
      file: 'dist/keycode.min.js',
      sourcemap: true
    },
    plugins: [typescript(), terser()]
  },
  {
    input: 'mod.ts',
    output: {
      name: 'KeyCode',
      format: 'esm',
      file: 'dist/keycode.es6.js'
    }
  },
  {
    input: 'test/tests.ts',
    output: {
      name: 'KeyCodeJSTests',
      format: 'umd',
      file: 'test/tests.dist.umd.js'
    },
    plugins: [typescript()]
  }
];
