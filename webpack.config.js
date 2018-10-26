const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
	entry: {
		index: './src/js/index.js',
		cart: './src/js/cart.js'
	},
	output: {
		filename: 'js/[name].js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: ''
	},
	module: {},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.html',
			chunks: ['index']
		}),
		new HtmlWebpackPlugin({
			filename: 'cart.html',
			template: './src/cart.html',
			chunks: ['cart']
		}),
		new CleanWebpackPlugin(['./dist'], {
			root: path.resolve(__dirname, ''),
			verbose: true,
			dry: false
		})
	]
	// devtool: '#source-map'
}
