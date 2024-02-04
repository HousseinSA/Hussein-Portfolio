// import createNextIntlPlugin from "next-intl/plugin"

// const withNextIntl = createNextIntlPlugin()

// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// export default withNextIntl(nextConfig)

// @ts-check

const withNextIntl = require("next-intl/plugin")()

/** @type {import('next').NextConfig} */
const config = {}

module.exports = withNextIntl(config)
