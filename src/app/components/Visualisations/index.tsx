import partition from '@/lib/partition';
import { visualisations } from './data';
import Visualisation from './Visualisation';

/**
 * Retrieve all visualisations, and sort them into two arrays based on whether
 * they are projects that are a part of the "Internet Infrastructuur In Beeld" call
 */
const [
    iibVisualisations,
    otherVisualisations,
] = partition(visualisations, (v) => v.internetInfrastructuurInBeeld ?? false);

export default function Visualisations() {
    return (
        <div className="max-w-7xl mx-auto py-24 px-4">
            <h1 className="text-4xl font-bold text-center tracking-tighter">Visualisaties van het internet</h1>
            <p className="text-center text-gray-500 text-2xl mt-8 max-w-2xl mx-auto">Deze visualisaties helpen je beter te begrijpen hoe bepaalde aspecten van het internet in elkaar steken.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                {iibVisualisations.map((v, i) => (
                    <Visualisation key={`iib-${i}`} visualisation={v} />
                ))}
            </div>
            <hr className="my-16 bg-gray-600" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {otherVisualisations.map((v, i) => (
                    <Visualisation key={`other-${i}`} visualisation={v} />
                ))}
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-center mt-40">Mis je een visualisatie?</h2>
            <p className="text-gray-500 text-xl text-center mt-4 mx-auto max-w-2xl mb-40">
                Wil je een visualisatie toevoegen aan deze lijst? We accepteren pull requests! Draag bij aan Hoe het Net Werkt in onze GitHub repository.
                {' '}
                <a href="https://github.com/studio-falkland/hoe-het-net-werkt" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                    Stuur een PR!
                </a>
            </p>
        </div>
    );
}
