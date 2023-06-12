/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "cdn.sanity.io", "i.ytimg.com"],
  },
  env: {
    SUPABASE_ACCESS_KEY: process.env.SUPABASE_ACCESS_KEY,
  },
};

module.exports = nextConfig;
