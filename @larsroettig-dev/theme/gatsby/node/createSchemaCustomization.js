
const kebabCase = require('lodash.kebabcase');
const withDefaults = require('./themeOption');

const mdxResolverPassthrough = (fieldName) => async (source, arguments_, context, info) => {
  const type = info.schema.getType('Mdx');
  const mdxNode = context.nodeModel.getNodeById({
    id: source.parent,
  });
  const resolver = type.getFields()[fieldName].resolve;
  const result = await resolver(mdxNode, arguments_, context, {
    fieldName,
  });
  return result;
};

// Create general interfaces that you could can use to leverage other data sources
// The core theme sets up MDX as a type for the general interface
// eslint-disable-next-line no-unused-vars
module.exports = ({ actions, schema }, themeOptions) => {
  const { createTypes, createFieldExtension } = actions;
  const { basePath } = withDefaults(themeOptions);

  const slugify = (source) => {
    const slug = source.slug ? source.slug : kebabCase(source.title);
    return `/${basePath}/${slug}`.replace(/\/\/+/g, '/');
  };

  createFieldExtension({
    name: 'slugify',
    extend() {
      return {
        resolve: slugify,
      };
    },
  });

  createFieldExtension({
    name: 'mdxpassthrough',
    args: {
      fieldName: 'String!',
    },
    extend({ fieldName }) {
      return {
        resolve: mdxResolverPassthrough(fieldName),
      };
    },
  });

  createTypes(`

    type BlogConfig implements Node {
      basePath: String
      postsPath: String
      pagesPath: String
      navigation: [NavigationEntry]
    }

    type NavigationEntry {
      title: String!
      slug: String!
    }
  `);
};
