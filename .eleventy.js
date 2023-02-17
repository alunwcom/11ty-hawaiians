const discoImage = require('./src/_shortcodes/DiscoImage');

module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy({'src/_static':'.'});
  
  eleventyConfig.addShortcode('DiscoImage', discoImage);

  return {
    dir: {
      input: 'src',
      includes: '_includes',
      layouts: '_layouts',
      output: '_site'
    }
  }
};
  