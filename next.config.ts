/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... otras configuraciones
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'googleusercontent.com', // ¡Añade este hostname!
        port: '',
        pathname: '/image_collection/image_retrieval/**' // Permite todas las rutas después
      },
      // ... otros patrones
    ],
  },
};

module.exports = nextConfig;