const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	// entry point
	entry: {
		app: path.resolve(__dirname, 'src', 'app.js')
	},
	// output
	output: {
		path: path.resolve(__dirname, 'build')
	},
	// loaders
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.?js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env']
						}
					},
					{ loader: 'eslint-loader' }
				]
			}
		]
	},
	// plugins
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'index.html')
		})
	],
	// code splitting
	optimization: {
		splitChunks: { chunks: 'all' }
	},
	// mode
	mode: 'development'
};
