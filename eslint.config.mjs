import stylistic from '@stylistic/eslint-plugin';
import nextVitals from 'eslint-config-next/core-web-vitals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
    ...nextVitals,
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
]);
