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
			test: /\.vue$/,
			loader: 'vue-loader',
			options: {
				loaders: {
				}
          // other vue-loader options go here
      }
  },
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
resolve: {
	alias: {
		'vue$': 'vue/dist/vue.esm.js'
	}
},
devtool: "#inline-source-map",
plugins: [
new ExtractTextPlugin("css/styles.css"),

new OptimizeCssPlugin(),
]
};


//creates variable to add to webpack
var htmlpack = new HtmlWebpackPlugin({ 
	filename: 'index.html',
	template: 'src/index.html',
	inject: false
});


if(process.env.NODE_ENV === 'production') {
	htmlpack.options.minify = {
		removeComments: true,
		collapseWhitespace: true
	};

	module.exports.plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true,
			compress: {
				warnings: false
			}
		})
		);
}

module.exports.plugins.push(htmlpack);

