import type { Metadata, Viewport } from 'next';
import { IBM_Plex_Serif, Inter } from 'next/font/google';
import './globals.css';
import Menu from './components/Menu';
import PreviewBanner from './components/PreviewBanner';
import { i18n, getLocale } from '@/i18n';
import { t } from '@lingui/core/macro';
import { setI18n } from '@lingui/react/server';
import LinguiProvider from './components/LinguiProvider';

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
});

const ibmPlexSerif = IBM_Plex_Serif({
    variable: '--font-ibm-plex-serif',
    subsets: ['latin'],
    weight: ['300', '400', '700'],
    style: ['italic'],
});

export function generateMetadata(): Metadata {
    return {
        title: t(i18n)`Hoe het Net Werkt`,
        description: t(i18n)`Een visualisatie over het internet`,
    };
}

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    viewportFit: 'cover',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const locale = getLocale();
    setI18n(i18n);

    return (
        <html lang={locale} className={`${inter.variable} ${ibmPlexSerif.variable}`}>
            <body className="antialiased">
                <LinguiProvider>
                    <PreviewBanner />
                    <Menu />
                    {children}
                </LinguiProvider>
            </body>
        </html>
    );
}
