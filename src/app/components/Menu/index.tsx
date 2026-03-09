'use client';

import Link from 'next/link';
import styles from './index.module.css';
import { useActiveSection } from './useActiveSection';
import { Trans, useLingui } from '@lingui/react/macro';

export default function Menu() {
    const activeSection = useActiveSection();
    const { i18n } = useLingui();
    const isEn = i18n.locale === 'en';
    const logo = isEn
        ? { src: '/how-the-net-works-logo.svg', alt: 'How the Net Works' }
        : { src: '/hoe-het-net-werkt-logo.svg', alt: 'Hoe het Net Werkt' };
    const otherLocale = isEn
        ? { href: 'https://hoehetnetwerkt.nl', label: 'NL' }
        : { href: 'https://howthenet.works', label: 'EN' };

    return (
        <div className="fixed top-0 left-0 right-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center z-10 relative">
                <div>
                    <img src={logo.src} alt={logo.alt} className="h-24" />
                </div>
                <div className="ml-auto flex items-center gap-8 font-medium text-lg tracking-tight">
                    <a
                        href={otherLocale.href}
                        className="text-sm text-gray-700 hover:opacity-70"
                    >
                        {otherLocale.label}
                    </a>
                    <Link
                        href="#story"
                        className={activeSection === 'story' ? 'font-bold' : 'hover:opacity-70'}
                    >
                        <Trans>Verhaal</Trans>
                    </Link>
                    <Link
                        href="#visualisations"
                        className={activeSection === 'visualisations' ? 'font-bold' : 'hover:opacity-70'}
                    >
                        <Trans>Visualisaties</Trans>
                    </Link>
                </div>
            </div>
            <div className={styles['progressive-blur']}>
                <div className={styles.blur} />
                <div className={styles.blur} />
                <div className={styles.blur} />
            </div>
        </div>
    );
}
