import { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './index.module.css';
import cn from '@/lib/cn';

export type TextBoxProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export default function TextBox({ className, ...props }: TextBoxProps) {
    return (
        <div className={cn('rounded-4xl text-xl text-center border-2 bg-white max-w-2xl mx-auto p-8 font-medium', styles['text-box-shadow'], className)} {...props}>
            <h1>We gebruiken het elke dag.</h1>
            <h1>
                Maar hoe werkt
                {' '}
                <span className="font-bold">dat internet</span>
                {' '}
                eigenlijk?
            </h1>
        </div>
    );
}
