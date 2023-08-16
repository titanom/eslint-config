import js from './js/recommended';
import ts from './ts/recommended';

// type IncludesType<TArrayLike extends any[], TType> = [Extract<TArrayLike[number], TType>] extends [
//   never,
// ]
//   ? false
//   : true;

type Feature = 'javascript' | 'typescript' | 'react' | 'next';

type Config = {
  features: Feature[];
};

export function configure({ features }: Config) {
  const configs = features
    .map(
      (feature) =>
        ({
          javascript: js,
          typescript: ts,
          react: undefined,
          next: undefined,
        })[feature],
    )
    .filter(Boolean);

  return configs;
}
