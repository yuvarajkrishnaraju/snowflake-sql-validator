module.exports = {
  '*.{js,jsx,json,ts,tsx}': [
    'prettier --ignore-path ./.prettierignore --write ./**/*.{js,jsx,json,ts,tsx} --config ./.prettierrc',
    'eslint --fix'
  ],
  '*.{md,yml,yaml}': ['prettier --write']
};
