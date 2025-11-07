import TextBox from '@/app/components/TextBox';
import packageProfile from '@/assets/profiles/package.png';
import ExportedImage from 'next-image-export-optimizer';

import zoe from './images/zoe.png';

export default function Scene4() {
    return (
        <>
            <TextBox className="mt-60 mb-40" image={packageProfile} imagePosition="right">
                <p>Via het netwerk van postbedrijven komt het pakketje uiteindelijk bij Zoey aan.</p>
            </TextBox>
            <ExportedImage src={zoe} alt="Zoey" className="w-auto h-[600px] mx-auto" />
        </>
    );
}
