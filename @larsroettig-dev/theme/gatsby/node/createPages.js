require('dotenv').config();

const log = (message, section) => console.log(
  `\n\u001B[36m${message} \u001B[4m${section}\u001B[0m\u001B[0m\n`,
);
const path = require('path');
const withDefaults = require('./themeOption');

const templatesDirectory = path.resolve(__dirname, '../../src/templates');
const templates = {
  home: path.resolve(templatesDirectory, 'home.template.tsx'),
  page: path.resolve(templatesDirectory, 'page.template.tsx'),
  article: path.resolve(templatesDirectory, 'article.template.tsx'),
};

const query = require('../data/data.query');
const normalize = require('../data/data.normalize');

module.exports = async ({actions: {createPage}, graphql}, themeOptions) => {
  const {basePath} = withDefaults(themeOptions);

  const {data} = await graphql(`
    query siteQuery {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `);

  let authors = [];
  let articles = [];
  let pages = [];

  try {
    log('Querying Authors & Articles & Pages source:', 'Local');
    const localAuthors = await graphql(query.local.authors);
    const localArticles = await graphql(query.local.articles);
    const localPages = await graphql(query.local.pages);

    authors = localAuthors.data.authors.edges.map(
      normalize.local.authors,
    );

    articles = localArticles.data.articles.edges.map(
      normalize.local.articles,
    );

    pages = localPages.data.allPage.nodes;
  } catch (error) {
    console.error(error);
  }
  const publicArticles = articles.filter((article) => !article.secret);
  // we need to remove all author with out an avatar
  authors = authors.filter((author) => author.name !== null);

  log('Creating', 'home page');
  createPage({
    path: basePath,
    component: templates.home,
    context: {
      articles: publicArticles,
    },
  });

  /**
   * Once the list of articles have bene created, we need to make individual article posts.
   * To do this, we need to find the corresponding authors since we allow for co-authors.
   */
  log('Creating', 'article posts');
  articles.forEach((article, index) => {
    // Match the Author to the one specified in the article
    let authorsThatWroteTheArticle;
    try {
      authorsThatWroteTheArticle = authors.filter((author) => {
        const allAuthors = article.author.split(',').
          map((a) => a.trim().toLowerCase());

        return allAuthors.some((a) => a === author.name.toLowerCase());
      });
    } catch (error) {
      throw new Error(`
        We could not find the Author for: "${article.title}".
        Double check the author field is specified in your post and the name
        matches a specified author.
        Provided author: ${article.author}
        ${error}
      `);
    }

    let next = publicArticles.slice(index + 1, index + 3);
    // If it's the last item in the list, there will be no articles. So grab the first 2
    if (next.length === 0) next = publicArticles.slice(0, 2);
    // If there's 1 item in the list, grab the first article
    if (next.length === 1 && publicArticles.length !== 2) {
      next = [
        ...next,
        publicArticles[0]];
    }
    if (publicArticles.length === 1) next = [];

    createPage({
      path: article.slug,
      component: templates.article,
      context: {
        article,
        authors: authorsThatWroteTheArticle,
        basePath,
        permalink: `${data.site.siteMetadata.siteUrl}${article.slug}`,
        slug: article.slug,
        id: article.id,
        title: article.title,
        next,
      },
    });
  });

  log('Creating', 'pages');

  if (pages.length > 0) {
    pages.forEach((page) => {
      createPage({
        path: `/${basePath}/${page.slug}`.replace(/\/\/+/g, '/'),
        component: templates.page,
        context: {
          slug: page.slug,
          body: page.body,
          title: page.title,
        },
      });
    });
  }
};
