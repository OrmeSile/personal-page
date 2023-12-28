require('dotenv').config()

const {PHASE_DEVELOPMENT_SERVER} = require("next/constants");

module.exports = (phase, {defaultConfig}) => {
  const webpackConfig = (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    })
    config.module.rules.push({
      test: /\.pdf/,
      type: 'asset/resource',
      generator: {
        filename: 'static/[hash][ext]'
      },
    })
    config.resolve.alias.canvas = false
    return config
  }

  //testing env presence
  // See https://github.com/gregrickaby/nextjs-github-pages.
  // Added after failing a deployment to pages
  return {...defaultConfig,
    output: (process.env.DOCKER_BUILD || phase === PHASE_DEVELOPMENT_SERVER) ? 'standalone' : 'export',
    assetPrefix: (process.env.DOCKER_BUILD || phase === PHASE_DEVELOPMENT_SERVER) ? undefined : process.env.PROD_BASE_URL,
    basePath: (process.env.DOCKER_BUILD || phase === PHASE_DEVELOPMENT_SERVER) ? undefined : '/personal-page',
    images: (process.env.DOCKER_BUILD || phase === PHASE_DEVELOPMENT_SERVER) ? undefined:  {unoptimized: true},
    webpack: webpackConfig
  }
}