export default function Colofon() {
    return (
        <div className="max-w-2xl mx-auto mt-12 flex gap-12 justify-center items-center">
            <div className="flex flex-col gap-2 text-sm font-serif italic text-gray-500">
                <span>De call</span>
                <div className="h-12 flex items-center">
                    <img src="/internet-infrastructuur-in-beeld-logo.svg" alt="Internet Infrastructuur In Beeld" className="w-24" />
                </div>
            </div>
            <div className="flex flex-col gap-2 text-sm font-serif italic text-gray-500">
                <span>Het fonds</span>
                <div className="h-12 flex items-center">
                    <img src="/sidn-fonds-logo.svg" alt="SIDN Fonds" className="w-24" />
                </div>
            </div>
            <div className="flex flex-col gap-2 text-sm font-serif italic text-gray-500">
                <span>De experts</span>
                <div className="h-12 flex items-center">
                    <img src="/sidn-labs-logo.svg" alt="SIDN Labs" className="w-20" />
                </div>
            </div>
        </div>
    );
}
