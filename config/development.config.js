
const merge = require('webpack-merge');
const common = require('./common.config');
const webpack = require('webpack');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',

	devServer: {
		port: 8080,
		disableHostCheck: true,
		historyApiFallback: true,
		publicPath: '/',
		overlay: true,
		open: true,
		stats: 'errors-only',
		hot: true
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]

});