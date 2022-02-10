/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    i18n: {
        locales: ['default', 'en', 'fr', 'de'],
        defaultLocale: 'default',
    },
};

module.exports = nextConfig;
