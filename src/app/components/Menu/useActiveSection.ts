import { useEffect, useState } from 'react';

export function useActiveSection() {
    const [activeSection, setActiveSection] = useState<string>('');

    useEffect(() => {
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

        const storySection = document.getElementById('story');
        const visualisationsSection = document.getElementById('visualisations');

        if (storySection) observer.observe(storySection);
        if (visualisationsSection) observer.observe(visualisationsSection);

        return () => {
            if (storySection) observer.unobserve(storySection);
            if (visualisationsSection) observer.unobserve(visualisationsSection);
        };
    }, []);

    return activeSection;
}

