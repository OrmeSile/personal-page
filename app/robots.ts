import {MetadataRoute} from "next";

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/'
    },
    sitemap: 'https://orme.dev/sitemap.xml'
  }
}

export default robots