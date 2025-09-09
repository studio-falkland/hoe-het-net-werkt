import styles from './index.module.css';
import cn from '@/lib/cn';

export default function TextBox() {
    return (
        <div className={cn('rounded-4xl text-xl text-left border-2 text-bo bg-white max-w-2xl mx-auto p-8 font-medium', styles['text-box-shadow'])}>
            <h1>We gebruiken het elke dag. Maar hoe werkt <span className="font-bold">dat internet</span> eigenlijk?</h1>
        </div>
    );
}
