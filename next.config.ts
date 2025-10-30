import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    output: 'export',
    images: {
        loader: 'custom',
        imageSizes: [10, 32, 48, 64, 96, 128, 256, 384],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    },
    transpilePackages: ['next-image-export-optimizer', 'scroll-timeline-polyfill'],
};

export default nextConfig;
