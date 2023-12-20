const {PHASE_EXPORT} = require("next/constants");
const webpackConfig = (config) => {
  config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    },
  )
  return config
}

/** @type {import('next').NextConfig} */
const nextConfig = (phase, {defaultConfig}) => {
  return {
    ...defaultConfig,
    output: phase === PHASE_EXPORT ? 'export' : 'standalone',
  }
}


module.exports = {...nextConfig, webpack: webpackConfig}