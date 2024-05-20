import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
//import pkg from './package.json' assert { type: 'json' };
import image from '@rollup/plugin-image';
import postcss from 'rollup-plugin-postcss';

const pkg = require('./package.json');

export default {
    input:'src/index.js',
    output: [
        { file: pkg.main, format: 'cjs' },
        { file: pkg.module, format: 'es', exports: 'named'}
    ],
    plugins: [
        postcss({
            // Plugin options, like extensions or modules
            extensions: ['.css'],
        }),
        babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules/**',
            presets: ['@babel/preset-env','@babel/preset-react']
          }),
          resolve({
            extensions: ['.js', '.jsx'],
            dedupe: ['prop-types']
          }),
          commonjs(),
          image(),
          terser()
    ],
    external: Object.keys(pkg.peerDependencies)
  };
