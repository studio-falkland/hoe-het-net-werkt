import { defineConfig } from '@lingui/cli';

export default defineConfig({
    sourceLocale: 'nl',
    locales: ['nl', 'en'],
    catalogs: [
        {
            path: '<rootDir>/src/locales/{locale}/messages',
            include: ['src'],
        },
    ],
});
