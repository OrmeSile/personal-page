const {PHASE_EXPORT} = require("next/constants");

module.exports = (phase, {defaultConfig}) => {
  const webpackConfig = (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    })
    return config
  }

  return {...defaultConfig,
    output: 'export',
    // webpack: webpackConfig
  }
}