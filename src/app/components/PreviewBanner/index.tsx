'use client';
import { useEffect, useState } from 'react';

const LOCAL_STORAGE_KEY = 'hoe-het-net-werkt-preview-banner-dismissed';
const LOCAL_STORAGE_VALUE = typeof window !== 'undefined' ? window?.localStorage.getItem(LOCAL_STORAGE_KEY) ?? 'true' : 'true';

export default function PreviewBanner() {
    const [isDismissed, setIsDismissed] = useState<boolean>(LOCAL_STORAGE_VALUE === 'true');

    useEffect(() => {
        window.localStorage.setItem(LOCAL_STORAGE_KEY, isDismissed.toString());
    }, [isDismissed]);

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
