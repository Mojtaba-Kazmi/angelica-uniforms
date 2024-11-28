module.exports = {
  siteUrl: "https://www.angelicauniforms.com.au", // Your domain
  generateRobotsTxt: true, // Automatically generates robots.txt
  exclude: ["/api/*"], // Exclude API routes from the sitemap
  additionalPaths: async (config) => {
    return [
      await config.transform(config, "/"), // Add homepage here
      await config.transform(config, "/about"),
      await config.transform(config, "/services"),
      await config.transform(config, "/blog"),
      await config.transform(config, "/contact-us"),
      await config.transform(config, "/get-quote"),
      await config.transform(config, "/legal"),
    ];
  },
};