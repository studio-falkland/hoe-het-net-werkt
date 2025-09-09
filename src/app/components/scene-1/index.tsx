import ExportedImage from 'next-image-export-optimizer';
import cn from '@/lib/cn';

import styles from './index.module.css';

import dog from './images/Final-scene-1-merged_0000_dog.png';
import cat from './images/Final-scene-1-merged_0001_cat.png';
import props from './images/Final-scene-1-merged_0002_props.png';
import hands from './images/Final-scene-1-merged_0003_hands.png';
import box from './images/Final-scene-1-merged_0004_box.png';
import chairs from './images/Final-scene-1-merged_0005_chairs.png';
import table from './images/Final-scene-1-merged_0006_table.png';
import grandpa from './images/Final-scene-1-merged_0007_grandpa.png';
import plant from './images/Final-scene-1-merged_0008_plant.png';
import light from './images/Final-scene-1-merged_0009_light.png';
import bookshelfAndProps from './images/Final-scene-1-merged_0010_bookshelf-and-props.png';
import background from './images/Final-scene-1-merged_0011_BG.png';

export default function Scene1() {
    return (
        <div className={cn('w-screen h-[2400px] pt-[600px] overflow-hidden flex justify-center', styles.root)}>
            <div className="aspect-[3/2] w-auto h-[600px] sm:h-[740px] md:h-[1000px] lg:h-[1200px] mx-auto relative">
                <div className={cn(styles.appear, 'w-full h-full')}>
                    <ExportedImage
                        className={styles.background}
                        src={background}
                        alt="Scene 1"
                        fill
                        style={{ objectFit: 'contain' }}
                    />
                </div>
                <div className={cn(styles.appear, 'w-full h-full')}>
                    <ExportedImage
                        className={styles.bohelfAndProps}
                        src={bookshelfAndProps}
                        alt="Scene 1"
                        fill
                        style={{ objectFit: 'contain' }}
                    />
                </div>
                <div className={cn(styles.appear, 'w-full h-full')}>
                    <ExportedImage
                        className={styles.light}
                        src={light}
                        alt="Scene 1"
                        fill
                        style={{ objectFit: 'contain' }}
                    />
                </div>
                <div className={cn(styles.appear, 'w-full h-full')}>
                    <ExportedImage
                        className={styles.plant}
                        src={plant}
                        alt="Scene 1"
                        fill
                        style={{ objectFit: 'contain' }}
                    />
                </div>
                <div className={cn(styles.appear, 'w-full h-full')}>
                    <ExportedImage
                        className={styles.grandpa}
                        src={grandpa}
                        alt="Scene 1"
                        fill
                        style={{ objectFit: 'contain' }}
                    />
                </div>
                <div className={cn(styles.appear, 'w-full h-full')}>
                    <ExportedImage
                        className={styles.table}
                        src={table}
                        alt="Scene 1"
                        fill
                        style={{ objectFit: 'contain' }}
                    />
                </div>
                <div className={cn(styles.appear, 'w-full h-full')}>
                    <ExportedImage
                        className={styles.chairs}
                        src={chairs}
                        alt="Scene 1"
                        fill
                        style={{ objectFit: 'contain' }}
                    />
                </div>
                <div className={cn(styles.appear, 'w-full h-full')}>
                    <ExportedImage
                        className={styles.box}
                        src={box}
                        alt="Scene 1"
                        fill
                        style={{ objectFit: 'contain' }}
                    />
                </div>
                <div className={cn(styles.appear, 'w-full h-full')}>
                    <ExportedImage
                        className={styles.hands}
                        src={hands}
                        alt="Scene 1"
                        fill
                        style={{ objectFit: 'contain' }}
                    />
                </div>
                <div className={cn(styles.appear, 'w-full h-full')}>
                    <ExportedImage
                        className={styles.props}
                        src={props}
                        alt="Scene 1"
                        fill
                        style={{ objectFit: 'contain' }}
                    />
                </div>
                <div className={cn(styles.appear, 'w-full h-full')}>
                    <ExportedImage
                        className={styles.cat}
                        src={cat}
                        alt="Scene 1"
                        fill
                        style={{ objectFit: 'contain' }}
                    />
                </div>
                <div className={cn(styles.appear, 'w-full h-full')}>
                    <ExportedImage
                        src={dog}
                        className={styles.dog}
                        alt="Scene 1"
                        fill
                        style={{ objectFit: 'contain' }}
                    />
                </div>
            </div>
        </div>
    );
}
