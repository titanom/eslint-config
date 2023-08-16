import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/{base,typescript,react}.ts'],
  outDir: 'dist',
  format: ['cjs', 'esm'],
  target: 'es2022',
});
