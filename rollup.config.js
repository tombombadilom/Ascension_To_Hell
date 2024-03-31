// rollup.config.js
import typescript from '@rollup/plugin-typescript';
import dts from "rollup-plugin-dts";

export default [
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/bundle.cjs.js',
      format: 'cjs'
    },
    plugins: [
      typescript(),
    ]
  },
  {
    input: "node_modules/@hookform/resolvers/zod/dist/index.d.ts",
    output: [{ file: "dist/zod-resolvers.d.ts", format: "es" }],
    plugins: [dts()],
  }
];