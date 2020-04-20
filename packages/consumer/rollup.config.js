import path from 'path'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'

export default {
  input: './src/index.ts',
  output: {
    dir: path.resolve('lib'),
    // file: 'dist/office-ui-fabric-vue.esm.js',
    format: 'esm',
    sourcemap: false,
  },
  preserveModules: true,
  preserveSymlinks: true,
  plugins: [
    resolve({
      extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
      preferBuiltins: true,
    }),
    commonjs({ include: /node_modules/ }),
    typescript({
      abortOnError: false,
      typescript: require('typescript'),
      useTsconfigDeclarationDir: true,
      check: false,
      tsconfigOverride: {
        compilerOptions: {
          module: 'esnext',
        },
      },
    })
  ]
}