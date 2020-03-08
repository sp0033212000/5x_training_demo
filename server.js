const express = require("express");
const path = require("path");
const https = require("https");
const fs = require("fs");

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

https
  .createServer(
    {
      key: fs.readFileSync("./private/pillaAuth-key.pem"),
      cert: fs.readFileSync("./private/pillaAuth-cert.pem")
    },
    app
  )
  .listen(process.env.PORT || 3030, () => {
    console.log("Listening");
  });
