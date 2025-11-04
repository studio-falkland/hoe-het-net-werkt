import TextBox from '@/app/components/TextBox';
import ixpProfile from '@/app/components/Introduction/images/ixp.png';

export default function Scene4() {
    return (
        <>
            <TextBox className="mt-60 mb-40" image={ixpProfile} imagePosition="right">
                <p>Via het netwerk van postbedrijven komt het pakketje uiteindelijk bij Noa aan.</p>
            </TextBox>
        </>
    );
}
