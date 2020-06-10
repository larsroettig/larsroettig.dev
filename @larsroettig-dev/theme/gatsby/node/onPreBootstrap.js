const path = require('path');

const fs = require('fs');
const withDefaults = require('./themeOption');

module.exports = ({ reporter, store }, themeOptions) => {
  const { program } = store.getState();
  const { authorsPath, postsPath, pagesPath } = withDefaults(themeOptions);
  const directories = [
    path.join(program.directory, postsPath),
    path.join(program.directory, pagesPath),
    path.join(program.directory, authorsPath),
  ];

  directories.forEach((directory) => {
    if (!fs.existsSync(directory)) {
      reporter.info(`Initializing "${directory}" directory`);
      mkdirp.sync(directory);
    }
  });
};
