/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/data',
        destination: '/api/data',
      },
    ];
  },
};

export default nextConfig;