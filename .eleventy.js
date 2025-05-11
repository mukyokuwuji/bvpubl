// Publ_Blueprint/.eleventy.js

const Image = require("@11ty/eleventy-img");
const path = require("path"); // Node.js built-in module for working with file paths

// Image Shortcode Function (adapted from your old site)
function imageShortcode(src, alt, sizes = "100vw") {
  // Construct the full path to the source image, assuming 'src' is a filename
  // in the 'source_images/' directory.
  let fullSrcPath = path.join(__dirname, "source_images", src);

  // If src is an external URL, just return a basic <img> tag (no processing)
  if (src.startsWith("http") || src.startsWith("//")) {
     return `<img src="${src}" alt="${alt || ''}">`;
  }

  let options = {
    widths: [200, 300, 450, 600], // Desired output widths for book covers
    formats: ["webp", "jpeg"],   // Output WebP and JPEG formats
                                 // If your source is PNG and you want PNG fallback: ["webp", "png"]
    outputDir: "./_site/img/optimized/", // Save optimized images here
    urlPath: "/img/optimized/",          // Public URL path for these images

    // Quality settings for Sharp (the image processing library eleventy-img uses)
    sharpJpegOptions: { quality: 80, progressive: true },
    sharpWebpOptions: { quality: 80 },

    // Custom filename format (e.g., book-cover-1-600w.webp)
    filenameFormat: function (id, currentSrc, width, format, opts) {
        const extension = format;
        const filename = path.basename(currentSrc); 
        const name = filename.substring(0, filename.lastIndexOf('.'));
        const safeName = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        return `${safeName}-${width}w.${extension}`;
    }
  };

  // Trigger asynchronous image processing
  // For a synchronous shortcode, this call primarily ensures images are processed
  // if they haven't been already. The actual metadata for HTML generation
  // is then attempted to be fetched by statsSync.
  Image(fullSrcPath, options);

  let metadata;
  try {
      // Attempt to get stats synchronously
      // This might require running the build twice on first use of new images
      metadata = Image.statsSync(fullSrcPath, options);
       if (!metadata) {
           console.warn(`[11ty-img-shortcode] statsSync returned undefined for ${fullSrcPath}. This can happen on the first build if images aren't processed yet. If you see this, try re-running the Eleventy build/serve command.`);
           // Fallback: return a very basic img tag or a placeholder message
           return `<img src="/source_images/${src}" alt="${alt || ''}" title="Image processing for ${src}, may require page reload or rebuild.">`;
       }
  } catch (e) {
      console.error(`[11ty-img-shortcode] Error in statsSync for ${fullSrcPath}: ${e.message}`);
      // Fallback to a basic image tag using a guessed original path
      return `<img src="/source_images/${src}" alt="${alt || ''}">`;
  }

  let imageAttributes = { 
    alt, 
    sizes, 
    loading: "lazy", 
    decoding: "async" 
  };

  try {
      // Generate the <picture> HTML element
      return Image.generateHTML(metadata, imageAttributes);
  } catch(e) {
       console.error(`[11ty-img-shortcode] Error generating HTML for image ${fullSrcPath}: ${e.message}. Using basic img tag.`);
       return `<img src="/source_images/${src}" alt="${alt || ''}">`;
  }
}
// END Image Shortcode Function

module.exports = function(eleventyConfig) {
    // Register the image shortcode for Nunjucks templates
    eleventyConfig.addNunjucksShortcode("image", imageShortcode);

    // Passthrough copy for existing static assets
    // (eleventy-img handles its own output, so 'img/optimized/' doesn't need passthrough)
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("img"); // For any other images not processed by eleventy-img (like your logo)

    // Your existing Eleventy directory configuration
    return {
      dir: {
        input: ".",
        includes: "_includes",
        output: "_site"
      },
      markdownTemplateEngine: "njk",
      htmlTemplateEngine: "njk",
      templateFormats: ["md", "njk", "html"]
    };
};