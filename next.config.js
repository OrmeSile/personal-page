const {PHASE_EXPORT} = require("next/constants");

module.exports = (phase, {defaultConfig}) => {
  return {
    output: phase === PHASE_EXPORT ? 'export' : undefined,
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