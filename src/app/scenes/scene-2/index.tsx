'use client';
import ExportedImage from 'next-image-export-optimizer';
import cn from '@/lib/cn';
import { Layer } from '@/lib/layer';
import useTouchAreas, { activeStyle, hoveredStyle, touchAreaStyle } from '@/lib/useTouchAreas';
import TextBox from '../../components/TextBox';

import styles from './index.module.css';

import bush from './images/Final-scene-2-merged_0000_bush.png';
import grandpa from './images/Final-scene-2-merged_0001_grandpa.png';
import cabinet from './images/Final-scene-2-merged_0002_cabinet.png';
import arrows from './images/Final-scene-2-merged_0003_arrows.png';
import deliveryGuy from './images/Final-scene-2-merged_0004_delivery-guy.png';
import van from './images/Final-scene-2-merged_0005_van.png';
import road from './images/Final-scene-2-merged_0006_road.png';
import mailbox from './images/Final-scene-2-merged_0007_mailbox.png';
import tree from './images/Final-scene-2-merged_0008_tree.png';
import bg from './images/Final-scene-2-merged_0009_bg.png';

import ixpProfile from '../../components/Introduction/images/ixp.png';

type Scene2Layer = 'bg' | 'tree' | 'mailbox' | 'road' | 'van' | 'deliveryGuy' | 'arrows' | 'cabinet' | 'grandpa' | 'bush';

const LAYERS: Layer<Scene2Layer>[] = [
    {
        id: 'bg',
        image: bg,
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
        points: '1258,1672 1260,1505 1207,1507 1193,1450 1265,1435 1263,1368 1182,1343 1188,1275 1262,1293 1267,1263 1290,1263 1290,1297 1363,1327 1380,1365 1353,1395 1293,1378 1288,1437 1383,1430 1422,1455 1392,1495 1292,1503 1285,1675',
    },
    {
        id: 'cabinet',
        image: cabinet,
        points: '558,1150 560,770 988,555 1068,595 1068,980 650,1193',
        transformOrigin: '50% 20%',
    },
    {
        id: 'grandpa',
        image: grandpa,
        points: '897,1100 955,1132 1023,1058 1042,1052 983,993 897,1037',
        transformOrigin: '50% 30%',
    },
    {
        id: 'bush',
        image: bush,
    },
];

export default function Scene2() {
    const { hoveredTouchArea, activeTouchArea, touchElement } = useTouchAreas({ layers: LAYERS });

    return (
        <>
            <TextBox className="mt-60 mb-40" image={ixpProfile} imagePosition="right">
                <p>Met het pakketje gaat Opa Kees naar het dichtstbijzijnde postkantoor.</p>
            </TextBox>
            <div className={cn('w-screen mt-60 overflow-hidden flex justify-center', styles.root)}>
                <div className="aspect-[3/2] w-auto h-[600px] sm:h-[740px] md:h-[1000px] lg:h-[1200px] mx-auto relative">
                    {touchElement}
                    {LAYERS.map((layer) => (
                        <div
                            key={layer.id}
                            className={cn(
                                layer.points && layer.id !== hoveredTouchArea && layer.id !== activeTouchArea && touchAreaStyle,
                                'absolute inset-0',
                                hoveredTouchArea === layer.id && hoveredStyle,
                                activeTouchArea === layer.id && activeStyle,
                            )}
                            style={{ transformOrigin: layer.transformOrigin }}
                        >
                            <ExportedImage
                                className={cn(
                                    styles.layer,
                                    styles[layer.id],
                                )}
                                src={layer.image}
                                alt={layer.id}
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
