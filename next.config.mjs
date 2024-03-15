/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // Agregamos los dominios permitidos 
        domains: ['raw.githubusercontent.com'],

        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },

        ]
    }
};

export default nextConfig;
