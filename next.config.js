/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['phone-catalogue.vercel.app', 'via.placeholder.com', 'localhost'],
  },
  reactStrictMode: true,
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
  },
};

module.exports = nextConfig;
