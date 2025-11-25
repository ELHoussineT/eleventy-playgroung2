import pluginWebc from "@11ty/eleventy-plugin-webc";

export default function(eleventyConfig) {
  // 1. Add the WebC plugin
  eleventyConfig.addPlugin(pluginWebc, {
    // Tell Eleventy to look for components in this folder.
    components: "src/_components/**/*.webc"
  });

  // 2. Passthrough Copy
  // This tells Eleventy to simply copy these files to the output folder
  // unmodified (for global assets like images, simple CSS, or global JS).
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};