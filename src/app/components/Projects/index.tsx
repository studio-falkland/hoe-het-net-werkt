import cn from '@/lib/cn';
import styles from './index.module.css';

export default function Projects() {
    return (
        <div className="max-w-7xl mx-auto py-24 px-4">
            <h1 className="text-4xl font-bold text-center tracking-tighter">Projecten</h1>
            <p className="text-center text-gray-500 text-2xl mt-8 max-w-2xl mx-auto">Met deze projecten kun je beter snappen hoe het internet werkt.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                <a
                    href="#"
                    className={cn(
                        'bg-white border-2 rounded-2xl p-6 hover:-translate-y-1 transition-transform',
                        styles['project-card'],
                    )}
                >
                    <h2 className="text-2xl font-bold tracking-tight">Packet Panic</h2>
                    <div className="aspect-video bg-gray-100 rounded-2xl mt-4"></div>
                    <p className="mt-4"></p>
                </a>
                <a
                    href="#"
                    className={cn(
                        'bg-white border-2 rounded-2xl p-6 hover:-translate-y-1 transition-transform',
                        styles['project-card'],
                    )}
                >
                    <h2 className="text-2xl font-bold tracking-tight">BGP Travel Guide</h2>
                    <div className="aspect-video bg-gray-100 rounded-2xl mt-4"></div>
                    <p className="mt-4"></p>
                </a>
                <a
                    href="#"
                    className={cn(
                        'bg-white border-2 rounded-2xl p-6 hover:-translate-y-1 transition-transform',
                        styles['project-card'],
                    )}
                >
                    <h2 className="text-2xl font-bold tracking-tight">Zijn we al autonoom?</h2>
                    <div className="aspect-video bg-gray-100 rounded-2xl mt-4"></div>
                    <p className="mt-4"></p>
                </a>
            </div>
        </div>
    );
}
