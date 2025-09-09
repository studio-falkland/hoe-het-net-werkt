import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import stylistic from '@stylistic/eslint-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    // NextJS rules
    ...compat.extends('next/core-web-vitals', 'next/typescript'),
    {
        ignores: [
            'node_modules/**',
            '.next/**',
            'out/**',
            'build/**',
            'next-env.d.ts',
        ],
    },
    // Stylistic rules
    stylistic.configs.customize({
        indent: 4,
        quotes: 'single',
        semi: true,
        jsx: true,
        arrowParens: 'always',
    }),
    // Custom rules and overrides
    {
        rules: {
            '@next/next/no-img-element': 'off',
            '@stylistic/multiline-ternary': 'off',
        },
    },
];

export default eslintConfig;
