import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/{js,ts}/recommended.ts'],
  outDir: 'dist',
  format: ['cjs', 'esm'],
  target: 'es2022',
});
