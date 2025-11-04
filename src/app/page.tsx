import Colofon from './components/Colofon';
import Footer from './components/Footer';
import Scene1 from './components/scene-1';
import Scene2 from './components/scene-2';
import Mouse from './components/Mouse';
import Visualisations from './components/Visualisations';
import Scene3 from './components/scene-3';
import Introduction from './components/Introduction';

export default function Home() {
    return (
        <div className="pt-48">
            <div>
                <Introduction />
                <Colofon />
                <Mouse />
            </div>
            <div id="story">
                <Scene1 />
                <Scene2 />
                <Scene3 />
            </div>
            <div id="visualisations">
                <Visualisations />
            </div>
            <Footer />
        </div>
    );
}
