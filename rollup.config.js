import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

export default [
  {
    input: 'mod.ts',
    output: {
      name: 'KeyCode',
      format: 'cjs',
      file: 'dist/keycode.cjs.js'
    },
    plugins: [
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            declaration: true
          }
        }
      })
    ]
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
      file: 'dist/keycode.esm.js'
    },
    plugins: [typescript()]
  },
  {
    input: 'test/tests.ts',
    output: {
      name: 'KeyCodeJSTests',
      format: 'umd',
      file: 'test/dist/tests.umd.js'
    },
    plugins: [typescript()]
  }
];
