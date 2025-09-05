import ExportedImage from 'next-image-export-optimizer';
import cn from '@/lib/cn';

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
import background from './images/Final-scene-2-merged_0010_Background.png';

export default function Scene2() {
    console.log(styles);
    return (
        <div className={cn('w-screen h-[2400px] pt-[600px] overflow-hidden flex justify-center', styles.root)}>
            <div className="aspect-[3/2] w-auto h-[600px] sm:h-[740px] md:h-[1000px] lg:h-[1200px] mx-auto relative">
                <ExportedImage
                    className={styles.background}
                    src={background}
                    alt="Scene 2"
                    fill
                    style={{ objectFit: 'contain' }}
                />
                <ExportedImage
                    className={styles.bg}
                    src={bg}
                    alt="Scene 2"
                    fill
                    style={{ objectFit: 'contain' }}
                />
                <ExportedImage
                    className={styles.platform}
                    src={platform}
                    alt="Scene 2"
                    fill
                    style={{ objectFit: 'contain' }}
                />
                <ExportedImage
                    className={styles.tree}
                    src={tree}
                    alt="Scene 2"
                    fill
                    style={{ objectFit: 'contain' }}
                />
                <ExportedImage
                    className={styles.mailbox}
                    src={mailbox}
                    alt="Scene 2"
                    fill
                    style={{ objectFit: 'contain' }}
                />
                <ExportedImage
                    className={styles.road}
                    src={road}
                    alt="Scene 2"
                    fill
                    style={{ objectFit: 'contain' }}
                />
                <ExportedImage
                    className={styles.van}
                    src={van}
                    alt="Scene 2"
                    fill
                    style={{ objectFit: 'contain' }}
                />
                <ExportedImage
                    className={styles.deliveryGuy}
                    src={deliveryGuy}
                    alt="Scene 2"
                    fill
                    style={{ objectFit: 'contain' }}
                />
                <ExportedImage
                    className={styles.arrows}
                    src={arrows}
                    alt="Scene 2"
                    fill
                    style={{ objectFit: 'contain' }}
                />
                <ExportedImage
                    className={styles.cabinet}
                    src={cabinet}
                    alt="Scene 2"
                    fill
                    style={{ objectFit: 'contain' }}
                />
                <ExportedImage
                    className={styles.grandpa}
                    src={grandpa}
                    alt="Scene 2"
                    fill
                    style={{ objectFit: 'contain' }}
                />
            </div>
        </div>
    );
}
