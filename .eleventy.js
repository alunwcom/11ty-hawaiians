module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy({'src/_static':'.'});

    return {
        dir: {
            input: 'src',
            includes: '_includes',
            layouts: '_layouts',
            output: 'build'
        }
    }
};
  