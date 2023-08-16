import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/js/recommended.js', 'src/ts/recommended.js'],
  outDir: 'dist',
  format: ['cjs', 'esm'],
  target: 'es2022',
});
