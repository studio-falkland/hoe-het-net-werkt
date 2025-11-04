'use client';
import { useState, useRef, useCallback, useMemo, useLayoutEffect } from 'react';
import { StaticImageData } from 'next/image';

interface Coordinate {
    x: number;
    y: number;
    id: number;
}

/**
 * A helper component that makes it easier to pick a set of coordinates on any
 * given image, so we can use to generate a map.
 */
function CoordinatePicker({ image }: { image: StaticImageData }) {
    const [isActive, setIsActive] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [coordinates, setCoordinates] = useState<Coordinate[]>([]);
    const [showCoordinates, setShowCoordinates] = useState(true);
    const [containerRect, setContainerRect] = useState<{ width: number; height: number } | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const idCounter = useRef(0);

    const imageDimensions = useMemo(() => {
        return { width: image.width, height: image.height };
    }, [image]);

    // Update container dimensions
    useLayoutEffect(() => {
        if (!isActive || !containerRef.current) return;

        const updateRect = () => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                setContainerRect({ width: rect.width, height: rect.height });
            }
        };

        updateRect();
        window.addEventListener('resize', updateRect);
        return () => window.removeEventListener('resize', updateRect);
    }, [isActive]);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!isActive || !containerRef.current || !imageDimensions.width) return;

        const rect = containerRef.current.getBoundingClientRect();
        const displayX = e.clientX - rect.left;
        const displayY = e.clientY - rect.top;

        // Calculate scale factors to convert from display to actual image coordinates
        const scaleX = imageDimensions.width / rect.width;
        const scaleY = imageDimensions.height / rect.height;

        // Convert to actual image coordinates
        const actualX = Math.round(displayX * scaleX);
        const actualY = Math.round(displayY * scaleY);

        setMousePos({ x: actualX, y: actualY });
    }, [isActive, imageDimensions]);

    const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!isActive || !containerRef.current || !imageDimensions.width) return;

        const rect = containerRef.current.getBoundingClientRect();
        const displayX = e.clientX - rect.left;
        const displayY = e.clientY - rect.top;

        // Calculate scale factors to convert from display to actual image coordinates
        const scaleX = imageDimensions.width / rect.width;
        const scaleY = imageDimensions.height / rect.height;

        // Convert to actual image coordinates
        const actualX = Math.round(displayX * scaleX);
        const actualY = Math.round(displayY * scaleY);

        const newCoord = { x: actualX, y: actualY, id: ++idCounter.current };
        setCoordinates((prev) => [...prev, newCoord]);

        // Log to console for easy copying
        console.log(`Coordinate ${newCoord.id}: ${actualX}px ${actualY}px`);
        console.log(`SVG format: cx="${actualX}" cy="${actualY}"`);
    }, [isActive, imageDimensions]);

    const clearCoordinates = () => {
        setCoordinates([]);
        idCounter.current = 0;
    };

    const removeCoordinate = (id: number) => {
        setCoordinates((prev) => prev.filter((coord) => coord.id !== id));
    };

    const generatePolylineString = () => {
        const pointsString = coordinates.map((coord) => `${coord.x},${coord.y}`).join(' ');

        console.log('Generated polyline points:');
        console.log(pointsString);

        // Copy to clipboard if available
        if (navigator.clipboard) {
            navigator.clipboard.writeText(pointsString);
            alert('Polyline points copied to clipboard!');
        }
        else {
            alert('Polyline points logged to console');
        }
    };

    if (!isActive) {
        return (
            <button
                onClick={() => setIsActive(true)}
                className="fixed top-4 right-4 z-[9999] bg-blue-500 text-white px-4 py-2 rounded shadow-lg hover:bg-blue-600"
            >
                🎯 Enable Coordinate Picker
            </button>
        );
    }

    return (
        <>
            {/* Control Panel */}
            <div className="fixed top-4 right-4 z-[9999] bg-white border border-gray-300 rounded shadow-lg p-4 min-w-[300px]">
                <div className="flex justify-between items-center mb-3">
                    <h3 className="font-bold">Coordinate Picker</h3>
                    <button
                        onClick={() => setIsActive(false)}
                        className="text-red-500 hover:text-red-700 text-xl"
                    >
                        ✕
                    </button>
                </div>

                <div className="space-y-2 text-sm">
                    <div>
                        Mouse:
                        {' '}
                        {mousePos.x}
                        px,
                        {' '}
                        {mousePos.y}
                        px
                    </div>
                    <div className="text-xs text-gray-600">
                        Image:
                        {' '}
                        {imageDimensions.width}
                        ×
                        {imageDimensions.height}
                        {!imageDimensions.width && ' (loading...)'}
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={clearCoordinates}
                            className="bg-red-500 text-white px-2 py-1 rounded text-xs hover:bg-red-600"
                        >
                            Clear All
                        </button>
                        <button
                            onClick={() => setShowCoordinates(!showCoordinates)}
                            className="bg-gray-500 text-white px-2 py-1 rounded text-xs hover:bg-gray-600"
                        >
                            {showCoordinates ? 'Hide' : 'Show'}
                            {' '}
                            Points
                        </button>
                        {coordinates.length > 0 && (
                            <button
                                onClick={generatePolylineString}
                                className="bg-green-500 text-white px-2 py-1 rounded text-xs hover:bg-green-600"
                            >
                                Get Polyline
                            </button>
                        )}
                    </div>
                </div>

                {coordinates.length > 0 && (
                    <div className="mt-3 max-h-32 overflow-y-auto">
                        <div className="text-xs font-semibold mb-1">
                            Coordinates (
                            {coordinates.length}
                            ):
                        </div>
                        {coordinates.map((coord) => (
                            <div key={coord.id} className="flex justify-between items-center text-xs py-1">
                                <span>
                                    {coord.x}
                                    px,
                                    {' '}
                                    {coord.y}
                                    px
                                </span>
                                <button
                                    onClick={() => removeCoordinate(coord.id)}
                                    className="text-red-500 hover:text-red-700 ml-2"
                                >
                                    ✕
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Overlay */}
            <div
                ref={containerRef}
                className="absolute inset-0 z-[100] cursor-crosshair"
                onMouseMove={handleMouseMove}
                onClick={handleClick}
                style={{
                    background: 'rgba(0, 0, 255, 0.05)',
                }}
            >
                {/* Polyline preview */}
                {coordinates.length > 1 && containerRect && imageDimensions.width && (
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        <polyline
                            points={coordinates.map((coord) => {
                                const displayX = (coord.x / imageDimensions.width) * containerRect.width;
                                const displayY = (coord.y / imageDimensions.height) * containerRect.height;
                                return `${displayX},${displayY}`;
                            }).join(' ')}
                            fill="none"
                            stroke="blue"
                            strokeWidth="2"
                            strokeDasharray="5,5"
                            opacity="0.8"
                        />
                    </svg>
                )}

                {/* Crosshairs */}
                {containerRect && imageDimensions.width && (
                    <div
                        className="absolute pointer-events-none"
                        style={{
                            left: `${(mousePos.x / imageDimensions.width) * containerRect.width}px`,
                            top: `${(mousePos.y / imageDimensions.height) * containerRect.height}px`,
                            transform: 'translate(-50%, -50%)',
                        }}
                    >
                        <div className="absolute w-8 h-0.5 bg-red-500 -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute w-0.5 h-8 bg-red-500 -translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                )}

                {/* Coordinate dots */}
                {showCoordinates && containerRect && imageDimensions.width && coordinates.map((coord) => {
                    const displayX = (coord.x / imageDimensions.width) * containerRect.width;
                    const displayY = (coord.y / imageDimensions.height) * containerRect.height;
                    return (
                        <div
                            key={coord.id}
                            className="absolute w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg pointer-events-none"
                            style={{
                                left: `${displayX}px`,
                                top: `${displayY}px`,
                                transform: 'translate(-50%, -50%)',
                            }}
                        >
                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-black/50 text-white text-xs px-1 py-0.5 rounded whitespace-nowrap">
                                {coord.id}
                                :
                                {' '}
                                {coord.x}
                                px,
                                {' '}
                                {coord.y}
                                px
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

const DevOnlyCoordinatePicker = process.env.NODE_ENV === 'development' ? CoordinatePicker : () => null;

export default DevOnlyCoordinatePicker;
