'use client';

import { I18nProvider } from '@lingui/react';
import { i18n } from '@/i18n';

export default function LinguiProvider({ children }: { children: React.ReactNode }) {
    return (
        <I18nProvider i18n={i18n}>
            {children}
        </I18nProvider>
    );
}
