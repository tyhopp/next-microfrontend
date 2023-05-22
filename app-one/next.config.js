/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/app-one/a',
        permanent: false,
      },
    ];
  },
}

module.exports = nextConfig
