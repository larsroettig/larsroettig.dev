
const siteMetadata = {
  title: 'Home page',
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
    resolve: '@larsroettig-dev/theme',
    options: {
      navigation: [
        {
          title: 'Blog',
          slug: '/blog',
        },
        {
          title: 'About',
          slug: '/about',
        },
      ],
    },
  },
];

module.exports = {
  siteMetadata,
  plugins,
};
