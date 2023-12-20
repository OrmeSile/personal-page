const {PHASE_EXPORT} = require("next/constants");
/** @type {import('next').NextConfig} */
const nextConfig = (phase, {defaultConfig}) => {
  const config =  {
    output: phase === PHASE_EXPORT ? 'export' : 'standalone',
  }
  return {...defaultConfig,...config}
}

const webpackConfig = (config) => {
  config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    },
  )
  return config
}

module.exports = {...nextConfig, webpack: webpackConfig}
