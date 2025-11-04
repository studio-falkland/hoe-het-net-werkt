'use client';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Layer } from './layer';
import styles from './useTouchAreas.module.css';

export interface UseTouchAreasOptions<T extends string = string> {
    layers: Layer<T>[];
}

export const activeStyle = styles.active;
export const hoveredStyle = styles.hovered;
export const touchAreaStyle = styles.touchArea;

/**
 * This hook creates a touch area that can be mapped to individual specified
 * elements. It keeps track of the currently hovered and active touch areas.
 */
export default function useTouchAreas<T extends string = string>({
    layers,
}: UseTouchAreasOptions<T>) {
    const [hoveredTouchArea, setHoveredTouchArea] = useState<T | null>(null);
    const [activeTouchArea, setActiveTouchArea] = useState<T | null>(null);

    const touchLayers = useMemo(() => {
        return layers.filter((layer) => layer.points);
    }, [layers]);

    const handleClick = useCallback((layerId: T) => {
        return () => {
            if (activeTouchArea === layerId) {
                setActiveTouchArea(null);
            }
            else {
                setActiveTouchArea(layerId);
            }
        };
    }, [activeTouchArea]);

    useEffect(() => {
        // Listen for escape key to close the active touch area
        function listener(event: KeyboardEvent) {
            if (event.key === 'Escape') {
                setActiveTouchArea(null);
            }
        }

        // Add the listener to the document body
        document.body.addEventListener('keydown', listener);

        // Remove the listener when the component unmounts
        return () => {
            document.body.removeEventListener('keydown', listener);
        };
    }, [activeTouchArea]);

    const touchElement = useMemo(() => {
        return (
            <svg
                width={layers[0].image.width}
                height={layers[0].image.height}
                className="w-full h-auto object-contain object-center z-50 relative"
                viewBox={`0 0 ${layers[0].image.width} ${layers[0].image.height}`}
            >
                <rect
                    width={layers[0].image.width}
                    height={layers[0].image.height}
                    fill="transparent"
                    onClick={() => setActiveTouchArea(null)}
                />
                {touchLayers.map((layer) => (
                    <polygon
                        key={layer.id as string}
                        points={layer.points}
                        fill="#ff000000"
                        className="cursor-pointer"
                        onMouseEnter={() => setHoveredTouchArea(layer.id)}
                        onMouseLeave={() => setHoveredTouchArea(null)}
                        onClick={handleClick(layer.id)}
                    />
                ))}
            </svg>
        );
    }, [touchLayers, layers, handleClick]);

    return {
        hoveredTouchArea,
        activeTouchArea,
        touchElement,
    };
}
