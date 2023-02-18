const discoImage = require('./src/_shortcodes/DiscoImage');
const facebookVideo = require('./src/_shortcodes/FacebookVideo');
const bandcamp = require('./src/_shortcodes/Bandcamp');

module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy({'src/_static':'.'});
  
  eleventyConfig.addShortcode('DiscoImage', discoImage);
  eleventyConfig.addShortcode('FacebookVideo', facebookVideo);
  eleventyConfig.addShortcode('Bandcamp', bandcamp);

  return {
    dir: {
      input: 'src',
      includes: '_includes',
      layouts: '_layouts',
      output: '_site'
    }
  }
};
  