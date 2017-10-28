import uglify from 'rollup-plugin-uglify';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

export default {
    name: 'KeyCode',
    input: 'index.js',
    output: {
        format: 'umd',
        file: 'dist/keycode.min.js'
    },
    sourcemap: true,
    plugins: [
        resolve({
            jsnext: true,
            main: true,
            browser: true,
        }),
        commonjs(),
        uglify()
    ]
};
