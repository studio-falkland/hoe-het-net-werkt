export default function Footer() {
    return (
        <div className="bg-[#f6f6f6]">
            <svg width="100%" height="12">
                <defs>
                    <pattern id="footer-pattern" width="24" height="12" x="0" y="0" patternUnits="userSpaceOnUse">
                        <path d="M12 0L0 12H24L12 0Z" fill="#f6f6f6" />
                    </pattern>
                </defs>
                <rect width="100%" height="12" fill="#d9d9d9" />
                <rect width="100%" height="12" fill="url(#footer-pattern)" />
            </svg>
            <div className="max-w-7xl mx-auto py-24 px-4">
                <p className="font-normal">
                    <span className="font-bold">Hoe het Net Werkt</span>
                    {' '}
                    is een visualisatie van hoe protocollen, organisaties en infrastructuur samenkomen om ons dagelijkse internet mogelijk te maken.
                    Het presenteert de resultaten van de call &quot;Internet Infrastructuur in Beeld&quot; van het SIDN Fonds.
                </p>
                <div className="flex gap-16 mt-12 lg:flex-row flex-col">
                    <div className="flex flex-col gap-2 flex-wrap">
                        <span className="text-sm text-gray-500 font-serif italic">
                            Visualisatie door
                        </span>
                        <div className="flex gap-6 items-center h-16">
                            <a href="https://falkland.studio" target="_blank" className="hover:opacity-80 transition-opacity">
                                <img src="/falkland-logo.svg" alt="Falkland" className="w-24" />
                            </a>
                            <p>Yaël van Engelen</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 flex-wrap">
                        <span className="text-sm text-gray-500 font-serif italic">
                            Gefinancierd door
                        </span>
                        <div className="flex gap-6 items-center h-16">
                            <a href="https://sidnfonds.nl" target="_blank" className="hover:opacity-80 transition-opacity">
                                <img src="/sidn-fonds-logo.svg" alt="SIDN Fonds" className="w-24" />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 flex-wrap">
                        <span className="text-sm text-gray-500 font-serif italic">
                            Met medewerking van
                        </span>
                        <div className="flex gap-6 items-center h-16">
                            <a href="https://sidnlabs.nl" target="_blank" className="hover:opacity-80 transition-opacity">
                                <img src="/sidn-labs-logo.svg" alt="SIDN Labs" className="w-20" />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 flex-wrap">
                        <span className="text-sm text-gray-500 font-serif italic">
                            Deelnemers Internet Infrastructuur in Beeld
                        </span>
                        <div className="flex gap-6 items-center h-16">
                            <a href="https://studio-tast.nl" target="_blank" className="hover:opacity-80 transition-opacity">
                                <img src="/studio-tast-logo.svg" alt="SIDN Labs" className="w-30" />
                            </a>
                            <p>Henrik van Leeuwen</p>
                            <a href="https://falkland.studio" target="_blank" className="hover:opacity-80 transition-opacity">
                                <img src="/falkland-logo.svg" alt="Falkland" className="w-24" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
