async function registerScrollTimelinePolyfill() {
    if (!CSS.supports('animation-timeline: auto')) {
        // Load the scroll-timeline-polyfill
        await import('scroll-timeline-polyfill/src/index.js');

        // Play all animations that are not playing
        window.requestAnimationFrame(() => {
            // Collect all animations from all layers
            Array.from(document.querySelectorAll('.layer'))
                // Get all animations from the layer
                .flatMap(element => element.getAnimations())
                // Play the animation
                .forEach(animation => {
                    // GUARD: If the animation is not playing, play it
                    if (animation.playState === 'finished' || animation.playState === 'idle') {
                        animation.cancel();
                    }
                    
                    animation.play();
                });
        });
    }
}

registerScrollTimelinePolyfill();
