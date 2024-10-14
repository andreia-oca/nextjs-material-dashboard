const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const webpack = require("webpack");
const path = require("path");

module.exports = withPlugins([[withSass], [withImages], [withCSS]], {
  webpack(config, options) {
    config.resolve.modules.push(path.resolve("./"));

    // Add a rule to ignore image files
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|svg)$/i,
      use: {
        loader: 'ignore-loader',
      },
    });

    return config;
  },
});
