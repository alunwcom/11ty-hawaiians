module.exports = function(eleventyConfig) {

    // Output directory: _site
  
    // Copy `img/` to `_site/img`
    eleventyConfig.addPassthroughCopy("src/img");
    
    // Copy `css/fonts/` to `_site/css/fonts`
    // If you use a subdirectory, it’ll copy using the same directory structure.
    eleventyConfig.addPassthroughCopy({"src/css": "resources/css"});

    // eleventyConfig.addLayoutAlias('post', 'layout.liquid');

    return {
        dir: {
            input: "src",
            output: "webroot"
        }    
    }
};
  