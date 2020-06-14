// eslint-disable-next-line no-undef
const withDefaults = require('./gatsby/node/themeOption');



// eslint-disable-next-line no-undef
module.exports = (themeOptions) => {
  const options = withDefaults(themeOptions);

  return {
    plugins: [
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
    ],
  };
};
