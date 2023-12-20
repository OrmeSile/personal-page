const {PHASE_EXPORT} = require("next/constants");

module.exports = (phase, {defaultConfig})=> {
  return {
    output:  'export',
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