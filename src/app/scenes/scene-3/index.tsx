'use client';
import ExportedImage from 'next-image-export-optimizer';
import cn from '@/lib/cn';
import useTouchAreas, { activeStyle, hoveredStyle, touchAreaStyle } from '@/lib/useTouchAreas';
import { Layer } from '@/lib/layer';
import TextBox from '../../components/TextBox';

import styles from './index.module.css';

import trucks from './images/Final-scene-3-merged_0000_trucks.png';
import boat from './images/Final-scene-3-merged_0001_boats.png';
import island1Email1 from './images/Final-scene-3-merged_0002_island-1-(email-1).png';
import island2 from './images/Final-scene-3-merged_0003_Island-2.png';
import island3 from './images/Final-scene-3-merged_0004_Island-3.png';
import island4 from './images/Final-scene-3-merged_0005_Island-3.png';
import island5 from './images/Final-scene-3-merged_0006_Island-4.png';
import island6 from './images/Final-scene-3-merged_0007_Island-5.png';
import warehouses from './images/Final-scene-3-merged_0008_warehouses.png';
import sidn from './images/Final-scene-3-merged_0009_SIDN.png';
import trainstationNtp from './images/Final-scene-3-merged_0010_Trainstation-(NTP).png';
import touringBus from './images/Final-scene-3-merged_0011_Touring-bus.png';
import mainIsland from './images/Final-scene-3-merged_0012_Main-island.png';
import ixp from './images/Final-scene-3-merged_0013_IXP.png';
import island6Email2 from './images/Final-scene-3-merged_0014_Island-6-(email-2).png';
import island7 from './images/Final-scene-3-merged_0015_Island-7.png';
import island8 from './images/Final-scene-3-merged_0016_Island-8.png';
import island9 from './images/Final-scene-3-merged_0017_Island-9.png';
import lighthouse from './images/Final-scene-3-merged_0018_lighthouse.png';
import island10 from './images/Final-scene-3-merged_0019_Island-10.png';
import uni from './images/Final-scene-3-merged_0020_uni.png';
import roads from './images/Final-scene-3-merged_0021_roads.png';
import bgElements from './images/Final-scene-3-merged_0022_bg.png';

import ixpProfile from '@/assets/profiles/ixp.png';

export type Scene3Layer = 'bgElements' | 'roads' | 'uni' | 'lighthouse' | 'island10' | 'island9' | 'island8' | 'island7' | 'island6Email2' | 'island6' | 'ixp' | 'mainIsland' | 'boat' | 'touringBus' | 'trainstationNtp' | 'sidn' | 'warehouses' | 'island5' | 'island4' | 'island3' | 'island2' | 'island1Email1' | 'trucks';

const LAYERS: Layer<Scene3Layer>[] = [
    {
        id: 'bgElements',
        image: bgElements,
    },
    {
        id: 'roads',
        image: roads,
    },
    {
        id: 'uni',
        points: '1521,327 1914,526 2154,407 1990,323 1989,274 1777,169 1586,271 1584,297',
        image: uni,
        transformOrigin: '60% 20%',
    },
    {
        id: 'lighthouse',
        image: lighthouse,
        points: '1299,2061 1347,2018 1354,1920 1353,1889 1378,1859 1403,1889 1405,1914 1398,1923 1405,2009 1435,2027 1396,2054',
        transformOrigin: '40% 90%',
    },
    {
        id: 'island10',
        image: island10,
    },
    {
        id: 'island9',
        image: island9,
    },
    {
        id: 'island8',
        image: island8,
    },
    {
        id: 'island7',
        image: island7,
    },
    {
        id: 'island6Email2',
        image: island6Email2,
    },
    {
        id: 'ixp',
        image: ixp,
        points: '1340,1441 1644,1287 2063,1501 1760,1654',
        transformOrigin: '50% 70%',
    },
    {
        id: 'mainIsland',
        image: mainIsland,
    },
    {
        id: 'boat',
        image: boat,
    },
    {
        id: 'touringBus',
        image: touringBus,
        points: '1713,994 1733,1006 1816,964 1811,930 1793,916 1719,960',
    },
    {
        id: 'trainstationNtp',
        image: trainstationNtp,
        points: '923,909 966,887 989,903 1074,856 1047,841 1047,803 1010,773 960,791 926,763 893,783 891,804 851,826 846,869',
    },
    {
        id: 'sidn',
        image: sidn,
        points: '1540,860 1646,916 1727,874 1724,816 1656,773 1631,714 1590,699 1540,719',
    },
    {
        id: 'warehouses',
        image: warehouses,
    },
    {
        id: 'island6',
        image: island6,
    },
    {
        id: 'island5',
        image: island5,
    },
    {
        id: 'island4',
        image: island4,
    },
    {
        id: 'island3',
        image: island3,
    },
    {
        id: 'island2',
        image: island2,
    },
    {
        id: 'island1Email1',
        image: island1Email1,
    },
    {
        id: 'trucks',
        image: trucks,
    },
];

export default function Scene3() {
    const {
        hoveredTouchArea, activeTouchArea, touchElement, tooltipElement,
    } = useTouchAreas({ layers: LAYERS });

    return (
        <>
            <TextBox className="mt-60 mb-40" image={ixpProfile}>
                <p>Het pakketje gaat van hand tot hand om aan te komen bij Zoey. Daar zijn veel verschillende partijen bij betrokken.</p>
            </TextBox>
            <div className={cn('w-screen mt-60 overflow-hidden flex justify-center', styles.root)}>
                <div className="aspect-[6/5] w-auto h-[560px] sm:h-[900px] md:h-[1300px] lg:h-[1400px] mx-auto relative">
                    {touchElement}
                    {tooltipElement}
                    {LAYERS.map((layer) => (
                        <div
                            key={layer.id}
                            className={cn(
                                'points' in layer && layer.id !== hoveredTouchArea && layer.id !== activeTouchArea && touchAreaStyle,
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
                                loading="eager"
                                fetchPriority="high"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
