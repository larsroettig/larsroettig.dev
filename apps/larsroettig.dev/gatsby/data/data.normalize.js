// @ts-ignore gatsby file should not checked by typescript
const normalizeHero = (article) => {
  let hero = {
    full: {},
    regular: {},
    narrow: {},
    seo: {},
  };

  if (article.hero) {
    hero = {
      full: article.hero.full.fluid,
      regular: article.hero.regular.fluid,
      narrow: article.hero.narrow.fluid,
      seo: article.hero.seo.fixed,
    };
  } else {
    // eslint-disable-next-line no-console
    console.log('\u001B[33m', `Missing hero for "${article.title}"`);
  }

  return hero;
};

const normalizeAvatar = (author) => {
  let avatar = {
    small: {},
    medium: {},
    large: {},
  };

  if (author.avatar) {
    avatar = {
      small: author.avatar.small.fluid,
      medium: author.avatar.medium.fluid,
      large: author.avatar.large.fluid,
    };
  } else {
    // eslint-disable-next-line no-console
    console.log('\u001B[33m', `Missing avatar for "${author.name}"`);
  }

  return avatar;
};

module.exports.local = {
  articles: ({ node: article }) => ({
    ...article,
    hero: normalizeHero(article),
  }),
  authors: ({ node: author }) => ({
    ...author,
    avatar: normalizeAvatar(author),
  }),
};
