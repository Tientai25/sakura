/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://sakura-website-beta.vercel.app', // <-- your final domain
    generateRobotsTxt: true,           // also creates /robots.txt
    sitemapSize: 7000,                 // optional: split if many URLs
  };