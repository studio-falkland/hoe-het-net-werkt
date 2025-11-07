'use client';
import ExportedImage from 'next-image-export-optimizer';
import cn from '@/lib/cn';
import { Layer } from '@/lib/layer';
import useTouchAreas, { activeStyle, hoveredStyle, touchAreaStyle } from '@/lib/useTouchAreas';

import styles from './index.module.css';

import grandpaProfile from '../../components/Introduction/images/grandpa.png';

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
import bookshelf from './images/Final-scene-1-merged_0011_booksshelf.png';
import carpet from './images/Final-scene-1-merged_0012_carpet.png';
import bg from './images/Final-scene-1-merged_0013_background.png';
import TextBox from '../../components/TextBox';

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
        points: '1458,1093 1694,984 1696,849 1563,784 1323,893 1325,1029',
    },
    {
        id: 'hands',
        image: hands,
    },
    {
        id: 'props',
        image: props,
        points: '1261,1301 1387,1093 1255,1074 1184,1108 1137,1170 1088,1253',
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
        <>
            <TextBox className="mt-40" image={grandpaProfile}>
                <p>
                    <b>Opa Harry</b>
                    {' '}
                    leest in de krant over het favoriete team van zijn kleindochter Zoey. Hij wil haar daar graag over vertellen en vragen hoe het met haar gaat.
                </p>
            </TextBox>
            <div className={cn('w-screen pt-[200px] overflow-hidden flex justify-center', styles.root)}>
                <div className="aspect-[4/3] w-auto h-[600px] sm:h-[740px] md:h-[1000px] lg:h-[1200px] mx-auto relative">
                    {touchElement}
                    {LAYERS.map((layer) => (
                        <div
                            key={layer.id}
                            className={cn(
                                layer.points && layer.id !== hoveredTouchArea && layer.id !== activeTouchArea && touchAreaStyle,
                                'absolute inset-0',
                                hoveredTouchArea === layer.id && hoveredStyle,
                                activeTouchArea === layer.id && activeStyle,
                                styles.container,
                            )}
                            style={{ transformOrigin: layer.transformOrigin }}
                        >
                            <div className={cn(styles.appear, 'absolute inset-0')}>
                                <ExportedImage
                                    key={layer.id}
                                    className={cn(
                                        styles.layer,
                                        styles[layer.id],
                                    )}
                                    src={layer.image}
                                    alt={layer.id}
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    loading="eager"
                                    fetchPriority="high"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
