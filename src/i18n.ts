import { setupI18n } from '@lingui/core';
import { messages as nlMessages } from '@/locales/nl/messages';
import { messages as enMessages } from '@/locales/en/messages';

const localeMessages = {
    nl: nlMessages,
    en: enMessages,
};

export type Locale = keyof typeof localeMessages;

export const defaultLocale: Locale = 'nl';

export function getLocale(): Locale {
    const locale = process.env.NEXT_PUBLIC_LOCALE;
    if (locale && locale in localeMessages) {
        return locale as Locale;
    }
    return defaultLocale;
}

const locale = getLocale();

export const i18n = setupI18n({
    locale,
    messages: { [locale]: localeMessages[locale] },
});
