import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import { uglify } from 'rollup-plugin-uglify'

export default {
  input: 'lib/index.js',
  output: {
    file: 'bundle.js',
    format: 'amd',
  },
  plugins: [resolve(), commonjs(), uglify()],
}
