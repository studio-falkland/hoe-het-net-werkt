'use client';
import ExportedImage from 'next-image-export-optimizer';
import cn from '@/lib/cn';
import { Layer } from '@/lib/layer';

import styles from './index.module.css';

import grandpa from './images/Final-scene-2-merged_0000_grandpa.png';
import cabinet from './images/Final-scene-2-merged_0001_cabinet.png';
import arrows from './images/Final-scene-2-merged_0002_arrows.png';
import deliveryGuy from './images/Final-scene-2-merged_0003_delivery-guy.png';
import van from './images/Final-scene-2-merged_0004_van.png';
import road from './images/Final-scene-2-merged_0005_road.png';
import mailbox from './images/Final-scene-2-merged_0006_mailbox.png';
import tree from './images/Final-scene-2-merged_0007_tree.png';
import platform from './images/Final-scene-2-merged_0008_platform.png';
import bg from './images/Final-scene-2-merged_0009_bg.png';
import useTouchAreas, { activeStyle, hoveredStyle } from '@/lib/useTouchAreas';

type Scene2Layer = 'bg' | 'platform' | 'tree' | 'mailbox' | 'road' | 'van' | 'deliveryGuy' | 'arrows' | 'cabinet' | 'grandpa';

const LAYERS: Layer<Scene2Layer>[] = [
    {
        id: 'bg',
        image: bg,
    },
    {
        id: 'platform',
        image: platform,
    },
    {
        id: 'tree',
        image: tree,
    },
    {
        id: 'mailbox',
        image: mailbox,
    },
    {
        id: 'road',
        image: road,
    },
    {
        id: 'van',
        image: van,
    },
    {
        id: 'deliveryGuy',
        image: deliveryGuy,
    },
    {
        id: 'arrows',
        image: arrows,
    },
    {
        id: 'cabinet',
        image: cabinet,
    },
    {
        id: 'grandpa',
        image: grandpa,
    },
];

export default function Scene2() {
    const { hoveredTouchArea, activeTouchArea, touchElement } = useTouchAreas({ layers: LAYERS });

    return (
        <div className={cn('w-screen h-[1600px] overflow-hidden flex justify-center', styles.root)}>
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
