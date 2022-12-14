module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['leonardo.osnova.io'],
  },
  env: {
    URL: process.env.NEXT_PUBLIC_URL,
    LOCAL_URL: process.env.NEXT_PUBLIC_LOCAL_URL,
  },
};
