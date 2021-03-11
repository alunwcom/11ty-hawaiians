module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("src/img");
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/js");

    // eleventyConfig.addLayoutAlias('post', 'layout.liquid');

    return {
        dir: {
            input: "src",
            output: "webroot"
        }    
    }
};
  