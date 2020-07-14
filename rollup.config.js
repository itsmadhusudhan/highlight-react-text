import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";

import packageJson from "./package.json";

const globals = {
  react: "React",
  "@types/react": "@types/react",
};

export default {
  input: "./src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
      globals,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
      globals,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      useTsconfigDeclarationDir: true,
      rollupCommonJSResolveHack: true,
      clean: true,
      // typescript: require("typescript"),
    }),
    terser(),
  ],
  external: Object.keys(packageJson.dependencies).concat(
    Object.keys(packageJson.peerDependencies)
  ),
};
