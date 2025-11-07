import type { Metadata, Viewport } from 'next';
import { IBM_Plex_Serif, Inter } from 'next/font/google';
import './globals.css';
import Menu from './components/Menu';
import PreviewBanner from './components/PreviewBanner';

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

export const metadata: Metadata = {
    title: 'Hoe het Net Werkt',
    description: 'Een visualisatie over het internet',
};

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
    return (
        <html lang="en" className={`${inter.variable} ${ibmPlexSerif.variable}`}>
            <body className="antialiased">
                <PreviewBanner />
                <Menu />
                {children}
            </body>
        </html>
    );
}
