const {PHASE_EXPORT} = require("next/constants");
/** @type {import('next').NextConfig} */
const nextConfig = (phase, {defaultConfig}) => {
    if(phase === PHASE_EXPORT) return {output: 'export',}
    return {}
}

module.exports = nextConfig
