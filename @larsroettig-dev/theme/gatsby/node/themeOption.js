module.exports = (themeOptions) => {
  const basePath = themeOptions.basePath || '/';

  const authorsPath = themeOptions.authors || 'content/authors';
  const pagesPath = themeOptions.pagesPath || 'content/pages';
  const postsPath = themeOptions.postsPath || 'content/posts';
  const supporterPath = themeOptions.authors || 'content/supporter';
  const imagePath = themeOptions.imagePath || 'images';
  const navigation = themeOptions.navigation || [];
  const contentRepo = themeOptions.contentRepo || '';
  const formatString = themeOptions.formatString || 'DD.MM.YYYY';

  return {
    basePath,
    contentRepo,
    authorsPath,
    pagesPath,
    postsPath,
    imagePath,
    supporterPath,
    navigation,
    formatString,
  };
};
