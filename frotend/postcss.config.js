// postcss.config.js
module.exports = {
    plugins: [
      require('postcss-import'),
      require('postcss-nesting'),
      require('autoprefixer'),
      require('@fullhuman/postcss-purgecss')({
        content: ['./src/**/*.html', './src/**/*.js'],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
      }),
      require('cssnano')({ preset: 'default' })
    ]
  };
  