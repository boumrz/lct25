const withRspack = require('next-rspack');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // appDir уже включен по умолчанию в Next.js 14
};

module.exports = withRspack(nextConfig);
