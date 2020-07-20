/* eslint-disable no-prototype-builtins */

const crypto = require('crypto');
const slugify = require('slugify');

const withDefaults = require('./themeOption');

// Create fields for post slugs and source
// This will change with schema customization with work
module.exports = ({ node, actions, getNode, createNodeId }, themeOptions) => {
  const { createNode, createParentChildLink, createNodeField } = actions;

  const {
    basePath,
    postsPath,
    pagesPath,
    authorsPath,
    supporterPath,
    contentRepo,
  } = withDefaults(themeOptions);

  const articlePermalinkFormat = themeOptions.articlePermalinkFormat || ':slug';

  // Create source field (according to contentPath)
  const fileNode = getNode(node.parent);
  const source = fileNode && fileNode.sourceInstanceName;

  if (source === undefined) {
    return;
  }

  // ///////////////// Utility functions ///////////////////

  function generateArticlePermalink(slug, date) {

    let year, month, day;

    if (date instanceof Date) {
      year = date.getFullYear();
      month = date.getMonth();
      day = date.getDate()
    } else {
      [year, month, day] = date.match(/\d{4}-\d{2}-\d{2}/)[0].split('-');
    }

    const permalinkData = {
      year,
      month,
      day,
      slug,
    };

    const permalink = articlePermalinkFormat.replace(/(:[a-z_]+)/g, (match) => {
      const key = match.substr(1);
      if (permalinkData.hasOwnProperty(key)) {
        return permalinkData[key];
      }
      throw new Error(`
          We could not find the value for: "${key}".
          Please verify the articlePermalinkFormat format in theme options.
          https://github.com/narative/gatsby-theme-novela#theme-options
        `);
    });

    return permalink;
  }

  function generateSlug(...arguments_) {
    return `/${arguments_.join('/')}`.replace(/\/\/+/g, '/');
  }

  // ///////////////////////////////////////////////////////

  if (source === authorsPath && node.internal.type === 'AuthorJson') {
    const slug = node.name.replace(' ', '');
    const fieldData = {
      ...node,
      slug: slug.toLowerCase(),
    };

    createNode({
      ...fieldData,
      // Required fields
      id: createNodeId(`${node.id} >>> Author`),
      parent: node.id,
      children: [],
      internal: {
        type: 'Author',
        contentDigest: crypto
          .createHash('md5')
          .update(JSON.stringify(node))
          .digest('hex'),
        content: JSON.stringify(node),
      },
    });

    createParentChildLink({ parent: fileNode, child: node });
  }

  if (node.internal.type !== 'Mdx') {
    return;
  }

  // Check for "pages" and create the "Page" type
  if (source === pagesPath) {
    const fieldData = {
      title: node.frontmatter.title,
      description: node.frontmatter.description,
      slug: node.frontmatter.slug,
    };

    createNode({
      ...fieldData,
      // Required fields
      id: createNodeId(`${node.id} >>> Page`),
      parent: node.id,
      children: [],
      internal: {
        type: 'Page',
        contentDigest: crypto
          .createHash('md5')
          .update(JSON.stringify(fieldData))
          .digest('hex'),
        content: JSON.stringify(fieldData),
        description: 'Mdx implementation of the Page interface',
      },
    });

    createParentChildLink({ parent: fileNode, child: node });
  }

  if (source === postsPath) {

    const articleSlug = generateSlug(
      basePath,
      generateArticlePermalink(
        slugify(node.frontmatter.slug || node.frontmatter.title, {
          lower: true,
        }),
        node.frontmatter.date
      )
    );

    createNodeField({
      name: `slug`,
      node,
      value: articleSlug,
    });

    const editLink = contentRepo.concat(
      node.fileAbsolutePath.replace(process.cwd(), '')
    );

    createNodeField({
      name: 'editLink',
      node,
      value: editLink,
    });

    const fieldData = {
      author: node.frontmatter.author,
      date: node.frontmatter.date,
      hero: node.frontmatter.hero,
      secret: node.frontmatter.secret || false,
      slug: articleSlug,
      title: node.frontmatter.title,
      description: node.frontmatter.description,
      canonical_url: node.frontmatter.canonical_url,
      editLink,
    };

    createNode({
      ...fieldData,
      // Required fields.
      id: createNodeId(`${node.id} >>> Article`),
      parent: node.id,
      children: [],
      internal: {
        type: 'Article',
        contentDigest: crypto
          .createHash('md5')
          .update(JSON.stringify(fieldData))
          .digest('hex'),
        content: JSON.stringify(fieldData),
        description: 'Article Posts',
      },
    });

    createParentChildLink({ parent: fileNode, child: node });
  }

  if (source === supporterPath && node.internal.type === 'SupporterJson') {
    createNode({
      ...node,
      // Required fields
      id: createNodeId(`${node.id} >>> Author`),
      parent: node.id,
      children: [],
      internal: {
        type: 'Supporter',
        contentDigest: crypto
          .createHash('md5')
          .update(JSON.stringify(node))
          .digest('hex'),
        content: JSON.stringify(node),
      },
    });

    createParentChildLink({ parent: fileNode, child: node });
  }
};
