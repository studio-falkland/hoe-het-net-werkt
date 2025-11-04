import Link from 'next/link';
import styles from './index.module.css';

export default function Menu() {
    return (
        <div className="fixed top-0 left-0 right-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center z-10 relative">
                <div>
                    <img src="/hoe-het-net-werkt-logo.svg" alt="Hoe het Net Werkt" className="h-24" />
                </div>
                <div className="ml-auto flex items-center gap-8 font-medium text-lg tracking-tight">
                    <Link href="#story">Verhaal</Link>
                    <Link href="#visualisations">Visualisaties</Link>
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
