/* eslint-disable react-hooks/refs */
'use client';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Layer } from './layer';
import styles from './useTouchAreas.module.css';
import { arrow, autoPlacement, autoUpdate, offset, shift, useFloating } from '@floating-ui/react';
import { InnerTextBox, textBoxStyle } from '@/app/components/TextBox';
import { FloatingArrow } from '@floating-ui/react';
import cn from './cn';

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
    // Track which layers are hovered and active
    const [hoveredTouchArea, setHoveredTouchArea] = useState<T | null>(null);
    const [activeTouchArea, setActiveTouchArea] = useState<T | null>(null);

    // Track a reference to the arrow element
    const arrowRef = useRef<SVGSVGElement>(null);

    // Track the tooltips
    const {
        refs, floatingStyles, placement, context,
    } = useFloating({
        open: !!activeTouchArea,
        whileElementsMounted: autoUpdate,
        middleware: [
            offset(12),
            autoPlacement(),
            shift(),
            arrow({
                element: arrowRef,
                padding: 16,
            }),
        ],
    });

    console.log({ placement });

    // Filter out layers that don't have points
    const touchLayers = useMemo(() => {
        return layers.filter((layer) => 'points' in layer);
    }, [layers]);

    // Track the active layer
    const activeLayer = useMemo(() => {
        return touchLayers.find((layer) => layer.id === activeTouchArea);
    }, [touchLayers, activeTouchArea]);

    // Handle click events
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

    // Listen for escape key to close the active touch area
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

    // Create the touch element
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
                        ref={activeTouchArea === layer.id ? refs.setReference : undefined}
                    />
                ))}
            </svg>
        );
    }, [touchLayers, layers, handleClick, activeTouchArea, refs]);

    const tooltipElement = useMemo(() => {
        return activeLayer && (
            <div
                ref={refs.setFloating}
                style={floatingStyles}
                className="z-50 relative"
            >
                <FloatingArrow
                    className={cn(styles.arrow, styles[placement])}
                    ref={arrowRef}
                    context={context}
                    width={16}
                    height={14}
                    fill="white"
                    stroke="black"
                    strokeWidth={2}
                    tipRadius={2}
                    style={{ transform: 'translateY(-2px)' }}
                />
                <InnerTextBox>
                    {activeLayer.tooltip}
                </InnerTextBox>
            </div>
        );
    }, [activeLayer, floatingStyles, refs, context]);

    return {
        hoveredTouchArea,
        activeTouchArea,
        touchElement,
        tooltipElement,
    };
}
