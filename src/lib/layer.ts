import { StaticImageData } from 'next/image';

export type Layer<T extends string = string> = {
    id: T;
    points?: string;
    image: StaticImageData;
};
