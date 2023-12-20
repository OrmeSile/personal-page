const {PHASE_EXPORT} = require("next/constants");

module.exports = (phase, {defaultConfig}) => {
  const webpackConfig = (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    })
    return config
  }

  // See https://github.com/gregrickaby/nextjs-github-pages.
  // Added after failed deploy to pages
  return {...defaultConfig,
    output: phase === PHASE_EXPORT ? 'export' : undefined,
    basePath: phase === PHASE_EXPORT ? '/personal-page' : undefined,
    images: phase === PHASE_EXPORT ? {unoptimized: true}: undefined,
    webpack: webpackConfig
  }
}