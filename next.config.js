// @type {import('next').NextConfig}
const config = {}
const withNextIntl = require("next-intl/plugin")("./i18n.js")

module.exports = withNextIntl(config)
