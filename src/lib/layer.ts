import { VisualisationTag } from '@/app/components/Visualisations/data';
import { StaticImageData } from 'next/image';
import { ReactElement } from 'react';

export type Layer<T extends string = string> = {
    id: T;
    image: StaticImageData;
    transformOrigin?: string;
} | {
    id: T;
    image: StaticImageData;
    text: string;
    points: string;
    tooltip: ReactElement;
    visualisationTags: VisualisationTag[];
    transformOrigin?: string;
};
