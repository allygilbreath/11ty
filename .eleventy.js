module.exports = function(eleventyConfig) {
  // Pass through static files
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles"); 

  // Add a shortcode for "Last Updated" timestamp
  eleventyConfig.addShortcode("lastUpdated", () => {
    return `<p>Last Updated: ${new Date().toLocaleDateString()}</p>`;
  });

  return {
    dir: {
      input: ".",   // Root directory for content
      output: "_site",
      includes: "_includes",
      layouts: "_includes"
    }
  };
};