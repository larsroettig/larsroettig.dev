const withDefaults = require('./themeOption');

module.exports = ({ actions, createContentDigest }, themeOptions) => {
  const { createNode } = actions;
  const { basePath, externalLinks, navigation } = withDefaults(themeOptions);

  const minimalBlogConfig = { basePath, externalLinks, navigation };

  createNode({
    ...minimalBlogConfig,
    id: '@larsroettig/blog-core-config',
    parent: null,
    children: [],
    internal: {
      type: 'BlogConfig',
      contentDigest: createContentDigest(minimalBlogConfig),
      content: JSON.stringify(minimalBlogConfig),
      description: 'Theme options',
    },
  });

  actions.createTypes(`
      type Article implements Node {
        id: ID!
        slug: String!
        title: String!
        date: Date! @dateformat
        author: String!
        excerpt(pruneLength: Int = 140): String!
        body: String!
        hero: File @fileByRelativePath
        timeToRead: Int
      }
    `);

  actions.createTypes(`
     type Page implements Node {
        id: ID!
        slug: String!
        title: String!
        body: String!
     }
    `);
};
