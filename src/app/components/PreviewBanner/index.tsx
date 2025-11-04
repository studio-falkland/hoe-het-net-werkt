'use client';
import { useEffect, useState } from 'react';

const LOCAL_STORAGE_KEY = 'hoe-het-net-werkt-preview-banner-dismissed';

export default function PreviewBanner() {
    const [isDismissed, setIsDismissed] = useState<boolean>(true);

    useEffect(() => {
        window.localStorage.setItem(LOCAL_STORAGE_KEY, isDismissed.toString());
    }, [isDismissed]);

    useEffect(() => {
        const value = window?.localStorage.getItem(LOCAL_STORAGE_KEY) ?? 'true';
        if (value === 'true') {
            setIsDismissed(true);
        }
    }, []);

    if (isDismissed) {
        return null;
    }

    return (
        <div className="fixed top-0 left-0 right-0 p-4 bg-blue-200/50 z-[100] backdrop-blur-sm">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
                <p className="m-0 text-sm font-medium">
                    This is a preview
                </p>
                <button onClick={() => setIsDismissed(true)}>
                    ⨉
                </button>
            </div>
        </div>
    );
}
