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
		contentBase: './build',
		hot: true
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'build'),
		clean: true
	},
	// loaders
	module: {
		rules: [
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
			},
			{
				test: /\.css$/i,
				use: [
					mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
					'css-loader'
				]
			}
		]
	},
	// plugins
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'index.html'),
			filename: 'index.html',
			inject: 'body',
			scriptLoading: 'blocking'
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
