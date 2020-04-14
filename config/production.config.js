
const merge = require('webpack-merge');
const common = require('./common.config');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = merge(common, {
	mode: 'production',
	devtool: '(none)',

	optimization: {
		nodeEnv: 'production',
		removeAvailableModules: true,
		concatenateModules: true,
		removeEmptyChunks: true,
		mergeDuplicateChunks: true,

		splitChunks: {
			chunks: 'all'
		},

		minimizer: [
			new TerserPlugin({
				cache: true,
				parallel: true,
				terserOptions: {
					mangle: true
				}
			}),
			new OptimizeCssAssetsPlugin({})
		]
	},

	plugins: [
		new CleanWebpackPlugin(),
		new CopyPlugin([
			path.join(__dirname, '.htacces'),
			path.join(__dirname, 'robots.txt')
		]),
		new BundleAnalyzerPlugin({
			defaultSizes: 'gzip',
			logLevel: 'debug'
		})
	]

});