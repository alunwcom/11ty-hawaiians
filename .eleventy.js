const discoImage = require('./src/_shortcodes/DiscoImage');
const facebookVideo = require('./src/_shortcodes/FacebookVideo');
const bandcamp = require('./src/_shortcodes/Bandcamp');

module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy({'src/_static':'.'});
  eleventyConfig.addPassthroughCopy({
    "node_modules/photoswipe/dist/photoswipe-lightbox.esm.min.js": "js/photoswipe-lightbox.esm.min.js",
    "node_modules/photoswipe/dist/photoswipe.esm.min.js": "js/photoswipe.esm.min.js",
    "node_modules/photoswipe/dist/photoswipe.css": "css/photoswipe.css",
    "node_modules/photoswipe-dynamic-caption-plugin/dist/photoswipe-dynamic-caption-plugin.esm.min.js": "js/photoswipe-dynamic-caption-plugin.esm.min.js",
    "node_modules/photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css": "css/photoswipe-dynamic-caption-plugin.css"
  });
  
  eleventyConfig.addShortcode('DiscoImage', discoImage);
  eleventyConfig.addShortcode('FacebookVideo', facebookVideo);
  eleventyConfig.addShortcode('Bandcamp', bandcamp);

  return {
    dir: {
      input: 'src',
      includes: '_includes',
      layouts: '_layouts',
      data: '_data',
      output: '_site'
    }
  }
};
  