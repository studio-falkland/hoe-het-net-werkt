import Colofon from './components/Colofon';
import Footer from './components/Footer';
import Scene1 from './scenes/scene-1';
import Scene2 from './scenes/scene-2';
import Scene3 from './scenes/scene-3';
import Scene4 from './scenes/scene-4';
import Mouse from './components/Mouse';
import Visualisations from './components/Visualisations';
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
                <Scene4 />
            </div>
            <div id="visualisations" className="pt-60">
                <Visualisations />
            </div>
            <Footer />
        </div>
    );
}
