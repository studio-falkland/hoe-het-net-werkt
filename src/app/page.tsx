import Colofon from './components/Colofon';
import Footer from './components/Footer';
import Scene1 from './components/scene-1';
import Scene2 from './components/scene-2';
import TextBox from './components/TextBox';

export default function Home() {
    return (
        <div className="pt-48">
            <div>
                <TextBox />
                <Colofon />
            </div>
            <Scene1 />
            <Scene2 />
            <Footer />
        </div>
    );
}
