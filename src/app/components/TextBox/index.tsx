import cn from '@/lib/cn';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './index.module.css';
import { StaticImageData } from 'next/image';
import ExportedImage from 'next-image-export-optimizer';

export type TextBoxProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    image?: StaticImageData;
    imagePosition?: 'left' | 'right';
};

export const textBoxStyle = styles['text-box-shadow'];

export function InnerTextBox({
    className, image, children, imagePosition = 'left', ...props
}: TextBoxProps) {
    return (
        <div
            className={cn(
                'rounded-2xl text-lg md:text-xl border-2 bg-white container lg:max-w-2xl flex font-medium',
                styles['text-box-shadow'],
                image
                    ? (imagePosition === 'left'
                            ? 'text-left'
                            : 'text-right'
                        )
                    : 'text-center',
                imagePosition === 'right' ? 'flex-row-reverse' : 'flex-row',
                className,
            )}
            {...props}
        >
            {image && (
                <div className="relative w-64">
                    <ExportedImage src={image} alt="TextBox" className="w-[220px] h-[220px] absolute bottom-0 left-0 right-0 object-contain object-bottom rounded-bl-xl" />
                </div>
            )}
            <div className="p-8 w-full">
                {children}
            </div>
        </div>
    );
}

export default function TextBox({
    className, ...props
}: TextBoxProps) {
    return (
        <div className="flex justify-center w-full px-4">
            <InnerTextBox className={cn(className, 'm-2')} {...props} />
        </div>
    );
}
