import { StaticImageData } from 'next/image';

import packetPanic from './images/packet-panic.png';
import bgpTravelGuide from './images/bgp-travel-guide.webp';
import zijnWeAlAutonoom from './images/zijn-we-al-autonoom.webp';
import nlStats from './images/nl-stats.png';

export type VisualisationTag = 'bgp' | 'dns' | 'routing' | string;

export interface Visualisation {
    /** The title of the visualisation */
    title: string;
    /** A description of what the visualisation is about */
    description: string | string[] | React.ReactNode;
    /** Whether the visualisation is part of the "Internet Infrastructuur In Beeld" call */
    internetInfrastructuurInBeeld?: boolean;
    /** A set of tags that describe the visualisation */
    tags?: VisualisationTag[];
    /** A screenshot or cover image for the visualisation */
    image: string | StaticImageData;
    /** The creators of the visualisation */
    createdBy?: {
        name: string;
        logo?: string | StaticImageData;
        url?: string;
    }[];
    /** The URL of the visualisation */
    url: string;
}

export const visualisations: Visualisation[] = [
    {
        title: 'Packet Panic',
        description: 'Packet Panic is een spel over het routeren van internetpakketten.',
        image: packetPanic,
        url: 'https://packet-panic.nl',
        internetInfrastructuurInBeeld: true,
        tags: ['bgp'],
        createdBy: [
            {
                name: 'Studio Tast',
                logo: '/studio-tast-logo.svg',
                url: 'https://www.tast.studio',
            },
        ],
    },
    {
        title: 'BGP Travel Guide',
        description: 'De BGP Travel Guide is een reisgids voor alle lokaties waar BGP routing plaatsvindt.',
        image: bgpTravelGuide,
        url: '#',
        internetInfrastructuurInBeeld: true,
        tags: ['bgp'],
        createdBy: [
            {
                name: 'Henrik van Leeuwen',
            },
            {
                name: 'Pascal de Man',
            },
        ],
    },
    {
        title: 'Zijn we al autonoom?',
        description: 'Zijn we al autonoom? brengt in beeld hoe afhankelijk het internet in Nederland is van niet-Europese technologie.',
        image: zijnWeAlAutonoom,
        url: 'https://zijnwealautonoom.nl',
        internetInfrastructuurInBeeld: true,
        createdBy: [
            {
                name: 'Studio Falkland',
                logo: '/falkland-logo.svg',
                url: 'https://falkland.studio',
            },
        ],
    },
    {
        title: '.nl Stats',
        description: '.nl Stats verzamelt statistieken over het .nl domein.',
        image: nlStats,
        url: 'https://stats.sidnlabs.nl/nl/',
        createdBy: [
            {
                name: 'SIDN Labs',
                logo: '/sidn-labs-logo.svg',
                url: 'https://sidnlabs.nl',
            },
        ],
    },
];
