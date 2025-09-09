import cn from '@/lib/cn';
import styles from './index.module.css';

export default function Mouse() {
    return (
        <img src="/mouse.svg" alt="Mouse" className={cn('mx-auto h-8 mt-32 text-gray-500 opacity-50', styles.mouse)} />
    );
}
