const {PHASE_EXPORT} = require("next/constants");

module.exports = (phase) => {
  const outputConfig = phase === PHASE_EXPORT ? {
    output: 'export'
  } : {}
  return {
    ...outputConfig,
    webpack: (config) => {
      config.module.rules.push({
          test: /\.svg$/i,
          use: ['@svgr/webpack'],
        },
      )
      return config
    }
  }
}