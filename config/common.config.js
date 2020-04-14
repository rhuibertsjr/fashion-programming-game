
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const appConfig = require('./app/app');
const theme = require('./app/theme');

const dev = (process.env.NODE_ENV === 'development');
const filename = dev ? '[name]' : '[hash]';
const chunkname = dev? '[name]' : 'chunkhash';

const less = modules => ({
	test: /\.less$/,
	use: [
		{
			loader: MiniCssExtractPlugin.loader,
			options: {
				hmr: dev,
				reloadAll: true
			}
		},
		{
			loader: 'css-loader',
			options: {
				importLoaders: 1,
				localsConvention: 'dashes',
				modules: modules && {
					localIdentName: dev ? '[local]' : "[hash:base64:5]",
				}
			}
		},
		{
			loader: 'less-loader',
			options: {
				modifyVars: theme,
				javascriptEnabled: true
			}
		}
	],
	[modules ? 'include' : 'exclude']: /\.module.less$/
});

module.exports = {
	entry: {
		index: path.resolve(__dirname, '../src', 'index.tsx')
	},
	output: {
		path: path.join(__dirname, '../dist'),
		filename: 'bundles/' + filename + '.js',
		chunkFilename: 'chunks/' + chunkname + '.js',
		publicPath: '/'
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json'],
		alias: {
			'@components': path.resolve(__dirname, '../src/components')
		}
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'bundles/' + filename + '.css',
			chunkFilename: 'chunks/' + chunkname + '.css'
		}),
		new HtmlWebpackPlugin({
			minify: {
				collapseBooleanAttributes: true,
				collapseInlineTagWhitespace: true,
				collapseWhitespace: true,
				removeComments: true,
				useShortDoctype: true
			},
			hash: true,
			inject: false,
			title: appConfig['name_here.app.name'],
			noscript: appConfig['name_here.app.noscript'],
			template: path.join(__dirname, '../public', 'index.ejs'),
			meta: {
				viewport: 'width=device-width, initial-scale=1',
				description: appConfig['name_here.app.description']
			}
		})
	],
	module: {
		rules: [
			less(true),
			less(false),
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: [
					'babel-loader',
					'ts-loader'
				]
			},
			{
				test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'assets/' + filename + '.[ext]'
						}
					}
				]
			}
		]
	}
};