import type { Visualisation as VisualisationType } from './data';
import cn from '@/lib/cn';
import styles from './index.module.css';
import ExportedImage from 'next-image-export-optimizer';

export interface VisualisationProps {
    visualisation: VisualisationType;
}

export default function Visualisation({ visualisation }: VisualisationProps) {
    return (
        <div
            className={cn(
                'bg-white border-2 rounded-2xl p-6 hover:-translate-y-1 transition-transform flex flex-col gap-4 relative',
                styles['project-card'],
            )}
        >
            <div className="flex gap-4 justify-between items-center">
                <h2 className="text-2xl font-bold tracking-tight">
                    {visualisation.title}
                </h2>
                {visualisation.internetInfrastructuurInBeeld && (
                    <div className="p-2 border rounded-xl absolute -top-6 right-4 bg-white">
                        <img src="/internet-infrastructuur-in-beeld-logo.svg" alt="Internet Infrastructuur In Beeld" className="h-6" />
                    </div>
                )}
            </div>
            <div className="aspect-video bg-gray-100 rounded-lg relative border border-gray-200 overflow-hidden">
                {visualisation.image && (
                    typeof visualisation.image === 'string' ? (
                        <img src={visualisation.image} alt={visualisation.title} className="object-cover object-top" />
                    ) : (
                        <ExportedImage src={visualisation.image} alt={visualisation.title} className="object-cover object-top" fill />
                    )
                )}
            </div>
            <p>{visualisation.description}</p>
            <p className="text-sm text-gray-500 font-serif italic">Gemaakt door</p>
            <div className="flex gap-2 mb-4">
                {visualisation.createdBy?.map((c, i) => (
                    <a key={i} target="_blank">
                        {c.logo ? (
                            typeof c.logo === 'string' ? (
                                <img src={c.logo} alt={c.name} className="max-w-32 max-h-6 w-full" />
                            ) : (
                                <ExportedImage src={c.logo} alt={c.name} className="max-w-32 max-h-6 w-full" />
                            )
                        ) : (
                            <p className="text-sm">{c.name}</p>
                        )}
                    </a>
                ))}
            </div>
            <a
                href={visualisation.url}
                className="bg-gray-100 border-gray-200 border text-center text-sm rounded p-2 mt-auto"
                target="_blank"
            >
                Bezoek
                {' '}
                <span className="font-bold">{visualisation.title}</span>
            </a>
        </div>
    );
}
