// @ts-ignore gatsby file should not checked by typescript
const getBlogFeed = require(`./gatsby/node/createBlogFeed`);
const withDefaults = require('./gatsby/node/themeOption');

// can overwrite default options
const themeOptions = {
  navigation: [],
  contentRepo: 'https://github.com/larsroettig/larsroettig.dev/edit/master/apps/larsroettig.dev',
};
const options = withDefaults(themeOptions);

const siteMetadata = {
  title: 'Homepage von larsroettig.dev blog ',
  name: 'Lars Roettig',
  siteUrl: 'https://larsroettig.dev',
  description: `A blog about
              Software
              Architecture and
              Magento Development`,
  siteLanguage: 'en',
  siteImage: '/banner.jpg',
  author: '@larsroettig',
  hero: {
    heading: `A blog about
              Software
              Architecture and
              Magento Development`,
    maxWidth: 652,
  },
  social: [
    {
      name: 'twitter',
      url: 'https://twitter.com/LarsRoettig',
    },
    {
      name: 'facebook',
      url: 'https://www.facebook.com/larsroettig.dev/',
    },
    {
      name: 'github',
      url: 'https://github.com/larsroettig',
    },
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/larsroettig/',
    },
  ],
};
const plugins = [
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: 'larsroettig.dev',
      short_name: 'larsroettig.dev',
      description: 'The blog of the developer, Lars Roettig',
      start_url: '/',
      background_color: '#fff',
      theme_color: '#fff',
      display: 'standalone',
      icon: 'images/favicons/larsroettig-dev.png',
    },
  },
  {
    resolve: 'gatsby-plugin-feed',
    options: getBlogFeed('Lars Roettig DEV Feed'),
  },
  {
    resolve: 'gatsby-plugin-sitemap',
  },
  {
    resolve: 'gatsby-plugin-robots-txt',
    options: {
      host: 'https://larsroettig.dev',
      sitemap: 'https://larsroettig.dev/sitemap.xml',
      policy: [{ userAgent: '*', allow: '/' }],
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: options.authorsPath,
      path: options.authorsPath,
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: options.pagesPath,
      path: options.pagesPath,
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: options.postsPath,
      path: options.postsPath,
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: options.supporterPath,
      path: options.supporterPath,
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: options.imagePath,
    },
  },
  {
    resolve: 'gatsby-plugin-mdx',
    options: {
      gatsbyRemarkPlugins: [
        {
          resolve: 'gatsby-remark-images',
          options: {
            maxWidth: 1000,
            quality: 90,
            linkImagesToOriginal: false,
            withWebp: true,
          },
        },
        { resolve: 'gatsby-remark-numbered-footnotes' },
        { resolve: 'gatsby-remark-autolink-headers' },
        {
          resolve: 'gatsby-remark-external-links',
          options: {
            rel: 'noreferrer',
          },
        },
      ],
      extensions: ['.mdx', '.md'],
      plugins: [
        {
          resolve: 'gatsby-remark-images',
          options: {
            maxWidth: 1000,
            quality: 90,
            linkImagesToOriginal: false,
            withWebp: true,
          },
        },
        'gatsby-remark-numbered-footnotes',
        'gatsby-remark-autolink-headers',
        {
          resolve: 'gatsby-remark-external-links',
          options: {
            rel: 'noreferrer',
          },
        },
      ],
    },
  },
  'gatsby-plugin-offline',
  'gatsby-transformer-sharp',
  'gatsby-plugin-sharp',
  'gatsby-plugin-typescript',
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-catch-links',
  'gatsby-plugin-theme-ui',
  'gatsby-transformer-sharp',
  'gatsby-transformer-remark',
  'gatsby-transformer-json',
  'gatsby-plugin-sharp',
  'gatsby-plugin-preact'
];

module.exports = {
  siteMetadata,
  plugins,
};
