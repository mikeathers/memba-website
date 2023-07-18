/** @type {import('next').NextConfig} */
require('dotenv').config({path: `${process.env.ENVIRONMENT}`})
const webpack = require('webpack')

const nextConfig = {
  output: 'standalone',
  compiler: {
    styledComponents: true,
  },
  webpack: (config, {isServer, nextRuntime}) => {
    // Avoid AWS SDK Node.js require issue
    if (isServer && nextRuntime === 'nodejs')
      config.plugins.push(new webpack.IgnorePlugin({resourceRegExp: /^aws-crt$/}))
    return config
  },
}

module.exports = nextConfig
