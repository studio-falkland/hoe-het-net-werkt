import { useEffect, useState } from 'react';

/**
 * Returns the active section based on the scroll position.
 */
export function useActiveSection() {
    const [activeSection, setActiveSection] = useState<string>('');

    useEffect(() => {
        // Create an observer to track the scroll position
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.3 },
        );

        // Get the story and visualisations sections
        const storySection = document.getElementById('story');
        const visualisationsSection = document.getElementById('visualisations');

        // Observe the story and visualisations sections
        if (storySection) observer.observe(storySection);
        if (visualisationsSection) observer.observe(visualisationsSection);

        // Unobserve the story and visualisations sections when the component unmounts
        return () => {
            if (storySection) observer.unobserve(storySection);
            if (visualisationsSection) observer.unobserve(visualisationsSection);
        };
    }, []);

    return activeSection;
}
