import { VisualisationTag } from '@/app/components/Visualisations/data';
import { StaticImageData } from 'next/image';
import { ReactElement } from 'react';

export type Layer<T extends string = string> = {
    id: T;
    image: StaticImageData;
    transformOrigin?: string;
    points?: never;
    tooltip?: never;
    visualisationTags?: VisualisationTag[];
} | {
    id: T;
    image: StaticImageData;
    transformOrigin?: string;
    points: string;
    tooltip: ReactElement;
    visualisationTags: VisualisationTag[];
};
