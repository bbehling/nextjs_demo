const path = require("path");

module.exports = {
  output: "standalone",
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
