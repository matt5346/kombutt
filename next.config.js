/** @type {import("next").NextConfig} */
const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")(
  {
    disable: process.env.NODE_ENV === "development",
    dest: "public",
    runtimeCaching,
    maximumFileSizeToCacheInBytes: 100000000
  }
);

module.exports = withPWA({
  reactStrictMode: false,
  trailingSlash: false,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
});

// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// })

// module.exports = withBundleAnalyzer()
