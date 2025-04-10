import { defineConfig } from "tsup";

export default defineConfig([
  // CommonJS build
  {
    entry: ["src/index.ts"],
    format: ["cjs"],
    dts: true,
    clean: true,
    target: "es2019",
    splitting: false,
    sourcemap: true,
  },
  // ESM build
  {
    entry: ["src/index.ts"],
    format: ["esm"],
    dts: false,
    outDir: "dist/esm",
    target: "es2019",
    splitting: false,
    sourcemap: true,
  },
]);
