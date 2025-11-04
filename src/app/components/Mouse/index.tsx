import cn from '@/lib/cn';
import styles from './index.module.css';

export default function Mouse() {
    return (
        <div className="mt-32">
            <p className="text-center text-sm font-medium text-gray-300">Scroll om te beginnen...</p>
            <img src="/mouse.svg" alt="Mouse" className={cn('mx-auto h-8 mt-4 text-gray-500 opacity-50', styles.mouse)} />
        </div>
    );
}
