var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var OptimizeCssPlugin = require("optimize-css-assets-webpack-plugin");

var webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
	entry: [ 
	"./src/js/main.js",
	"./src/css/main.css"
	],
	output: {
		path: path.resolve("./public"),
		filename: "js/bundle.js"
	},
	module: {
		rules: [
		{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
			}
		},
		{
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				fallback: "style-loader",
				use: "css-loader"
			})
		}
		]
	}, 
	devtool: "#inline-source-map",
	plugins: [
	new ExtractTextPlugin("css/styles.css"),
	new HtmlWebpackPlugin({ 
      filename: 'index.html',
      template: 'src/index.html',
      minify: {
      	removeComments: true,
      	collapseWhitespace: true
      }
    }),
    new OptimizeCssPlugin(),
	]
};

if(process.env.NODE_ENV === 'production') {
	module.exports.plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true,
			compress: {
				warnings: false
			}
		})
	);
}

