import Colofon from './components/Colofon';
import Footer from './components/Footer';
import Scene1 from './components/scene-1';
import Scene2 from './components/scene-2';
import TextBox from './components/TextBox';
import Mouse from './components/Mouse';
import Projects from './components/Projects';

export default function Home() {
    return (
        <div className="pt-48">
            <div>
                <TextBox />
                <Colofon />
                <Mouse />
            </div>
            <Scene1 />
            <Scene2 />
            <Projects />
            <Footer />
        </div>
    );
}
