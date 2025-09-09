import Link from 'next/link';

export default function Menu() {
    return (
        <div className="fixed top-0 left-0 right-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center">
                <div>
                    <img src="/hoe-het-net-werkt-logo.svg" alt="Hoe het Net Werkt" className="h-24" />
                </div>
                <div className="ml-auto flex items-center gap-8 font-bold text-lg">
                    <Link href="/">Visualisaties</Link>
                    <Link href="/">Projecten</Link>
                </div>
            </div>
        </div>
    );
}
