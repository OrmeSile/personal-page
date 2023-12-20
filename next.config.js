require('dotenv').config()

const {PHASE_EXPORT, PHASE_DEVELOPMENT_SERVER} = require("next/constants");

module.exports = (phase, {defaultConfig}) => {
  const webpackConfig = (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    })
    return config
  }

  // See https://github.com/gregrickaby/nextjs-github-pages.
  // Added after failing a deployment to pages
  return {...defaultConfig,
    output: phase !== PHASE_DEVELOPMENT_SERVER ? 'export' : undefined,
    assetPrefix: phase !== PHASE_DEVELOPMENT_SERVER ? process.env.PROD_BASE_URL : undefined,
    basePath: phase !== PHASE_DEVELOPMENT_SERVER ? '/personal-page' : undefined,
    images: phase === PHASE_EXPORT ? {unoptimized: true}: undefined,
    webpack: webpackConfig
  }
}