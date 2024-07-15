const path = require('path');

const buildEslintCommand = (filenames) => {
  const relativeFilenames = filenames.map((f) => path.relative(process.cwd(), f));
  return `next lint --fix --file ${relativeFilenames.join(' --file ')}`;
};

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
};
