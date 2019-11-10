const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); // 用于访问内置插件

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'doc'),
		filename: '[name].bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.sass$/,
				use: [
					"style-loader", // 将 JS 字符串生成为 style 节点
					"css-loader", // 将 CSS 转化成 CommonJS 模块
					"sass-loader" // 将 Sass 编译成 CSS，默认使用 Node Sass
				]
			},
			{
				test: /\.pug$/,
				loader: 'pug-loader'
			}
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.pug',
			title: 'CHINF demo'
		})
	]
};
