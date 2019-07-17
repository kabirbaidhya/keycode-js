import { uglify } from 'rollup-plugin-uglify';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'index.js',
  output: {
    name: 'KeyCode',
    format: 'umd',
    file: 'dist/keycode.min.js',
    sourcemap: true
  },
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs(),
    uglify()
  ]
};
