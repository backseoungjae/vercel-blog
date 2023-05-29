/** @type {import('next-sitemap').IConfig} */
// eslint-disable-next-line no-undef
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://example.com',
  generateRobotsTxt: true, // (optional)
  // ...other options
}
