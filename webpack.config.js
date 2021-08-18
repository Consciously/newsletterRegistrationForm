const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (_, { mode }) => ({
	// entry point
	entry: {
		app: path.resolve(__dirname, 'src', 'app.js')
	},
	// devtools
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
		hot: true
	},
	// output
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'build'),
		clean: true
	},
	// loaders
	module: {
		rules: [
			{
				test: /\.s?css$/i,
				use: [
					mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
					'css-loader'
				]
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
			template: path.resolve(__dirname, 'src', 'index.html'),
			filename: path.resolve(__dirname, 'build', 'index.html')
		}),
		new MiniCssExtractPlugin()
	],
	// code splitting
	optimization: {
		splitChunks: { chunks: 'all' }
	},
	// mode
	mode: 'development'
});
