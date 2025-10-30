'use client';
import ExportedImage from 'next-image-export-optimizer';
import cn from '@/lib/cn';
import { Layer } from '@/lib/layer';
import useTouchAreas, { activeStyle, hoveredStyle } from '@/lib/useTouchAreas';

import styles from './index.module.css';

import dog from './images/Final-scene-1-merged_0000_dog.png';
import cat from './images/Final-scene-1-merged_0001_cat.png';
import props from './images/Final-scene-1-merged_0002_table-props.png';
import hands from './images/Final-scene-1-merged_0003_hands.png';
import box from './images/Final-scene-1-merged_0004_box.png';
import chairLeft from './images/Final-scene-1-merged_0005_chair-left.png';
import chairRight from './images/Final-scene-1-merged_0006_chair-right.png';
import table from './images/Final-scene-1-merged_0007_table.png';
import grandpa from './images/Final-scene-1-merged_0008_grandpa.png';
import plant from './images/Final-scene-1-merged_0009_plant.png';
import light from './images/Final-scene-1-merged_0010_light.png';
import carpet from './images/Final-scene-1-merged_0011_carpet.png';
import bookshelf from './images/Final-scene-1-merged_0012_booksshelf.png';
import bg from './images/Final-scene-1-merged_0013_BG.png';

type Scene1Layer = 'bg' | 'carpet' | 'bookshelf' | 'light' | 'plant' | 'grandpa' | 'table' | 'chairLeft' | 'chairRight' | 'box' | 'hands' | 'props' | 'cat' | 'dog';

const LAYERS: Layer<Scene1Layer>[] = [
    {
        id: 'bg',
        image: bg,
    },
    {
        id: 'carpet',
        image: carpet,
    },
    {
        id: 'bookshelf',
        image: bookshelf,
    },
    {
        id: 'light',
        image: light,
    },
    {
        id: 'plant',
        image: plant,
    },
    {
        id: 'grandpa',
        image: grandpa,
    },
    {
        id: 'table',
        image: table,
    },
    {
        id: 'chairLeft',
        image: chairLeft,
    },
    {
        id: 'chairRight',
        image: chairRight,
    },
    {
        id: 'box',
        image: box,
    },
    {
        id: 'hands',
        image: hands,
    },
    {
        id: 'props',
        image: props,
    },
    {
        id: 'cat',
        image: cat,
    },
    {
        id: 'dog',
        image: dog,
    },
];

export default function Scene1() {
    const { hoveredTouchArea, activeTouchArea, touchElement } = useTouchAreas({ layers: LAYERS });

    return (
        <div className={cn('w-screen h-[2400px] pt-[200px] overflow-hidden flex justify-center', styles.root)}>
            <div className="aspect-[3/2] w-auto h-[600px] sm:h-[740px] md:h-[1000px] lg:h-[1200px] mx-auto relative">
                {touchElement}
                {LAYERS.map((layer) => (
                    <ExportedImage
                        key={layer.id}
                        className={cn(
                            layer.id,
                            styles.layer,
                            hoveredTouchArea === layer.id && hoveredStyle,
                            activeTouchArea === layer.id && activeStyle,
                        )}
                        src={layer.image}
                        alt={layer.id}
                        fill
                        style={{ objectFit: 'contain' }}
                    />
                ))}
            </div>
        </div>
    );
}
