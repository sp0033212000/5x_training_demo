const express = require("express");
const path = require("path");

const app = express();

if (process.env.NODE_ENV !== "production") {
  const webpackMiddleware = require("webpack-dev-middleware");
  const webpack = require("webpack");
  const webpackConfig = require("./webpack.config");
  app.use(webpackMiddleware(webpack(webpackConfig)));
} else {
  app.use(express.static("bundle"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "bundle/index.html"));
  });
}

app.listen(process.env.PORT || 3030, () => {
  console.log("Listening");
  console.log(process.env.NODE_ENV);
});