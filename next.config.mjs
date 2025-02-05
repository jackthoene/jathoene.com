/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // This is causing the conflict with Image optimization
    distDir: 'out',
    images: {
        unoptimized: true // This will fix the image optimization error
    }
};

export default nextConfig;
  
