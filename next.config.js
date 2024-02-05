<<<<<<< HEAD
const withNextIntl = require("next-intl/plugin")()

/** @type {import('next').NextConfig} */
=======
// @type {import('next').NextConfig}
const config = {}
const withNextIntl = require("next-intl/plugin")("./i18n.js")
>>>>>>> parent of 3a3f531 (fixing)

const nextConfig = {
  reactStrictMode: true,
}

module.exports = withNextIntl(nextConfig)
