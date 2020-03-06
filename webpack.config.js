const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.join(__dirname, "bundle"),
		filename: "js/bundle.[chunkhash].js"
	},
	module: {
		rules: [
			{
				use: "babel-loader",
				test: /\.js$/,
				exclude: /node_modules/
			},
			{
				use: [MiniCssExtractPlugin.loader, "css-loader"],
				test: /\.css$/
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/,
				use: [
					{
						loader: "url-loader",
						options: {
							limit: 40000,
							output: "/assest/imgs/"
						}
					},
					"image-webpack-loader"
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "css/[name].css",
			chunkFilename: "css/[id].css"
		}),
		new HtmlWebpackPlugin({
			template: "public/index.html"
		}),
		new webpack.DefinePlugin({
			"process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
		})
	],
	optimization: {
		splitChunks: {
			chunks: "all",
			minSize: 30000,
			minChunks: 1,
			maxAsyncRequests: 5,
			maxInitialRequests: 3,
			automaticNameDelimiter: "~",
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: -10,
					filename: "js/vendor.[chunkhash].js"
				},
				default: {
					minChunks: 2,
					priority: -20,
					reuseExistingChunk: true
				}
			}
		}
	}
};
