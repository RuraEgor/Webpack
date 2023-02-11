const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const ESLintPlugin = require('eslint-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

const isDev = process.env.NODE_ENV !== 'production';
const isProd = !isDev;

const filename = ext => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

// const jsLoaders = () => {
// 	constloaders
// }

const cssLoader = extra => {
	const loaders = [
		{
			loader: MiniCssExtractPlugin.loader,
			options: {}
		},
		'css-loader'
	];

	if (extra) loaders.push(extra);

	return loaders;
}

module.exports = {
	mode: 'development',
	// target: isDev ? "web" : "browserslist",
	entry: {
		main: './src/index.js',
		analytic: './src/js/analytic.js'
	},
	output: {
		filename: filename('js'),
		path: path.resolve(__dirname, 'dist'),
		clean: true
	},
	target: 'web',
	resolve: {
		extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.jpg', '.jpeg', '.png'],
		alias: {
			'@models': path.resolve(__dirname, 'src/model'),
			'@': path.resolve(__dirname, 'src')
		}
	},
	optimization: {
		splitChunks: {
			chunks: 'all'
		},
		minimizer: [
			new CssMinimizerPlugin(),
			new TerserPlugin()
		],
		minimize: isProd,
	},
	devServer: {
		port: 4200,
		hot: false,
		static: "./dist",
	},
	devtool: isDev ? 'source-map' : false,
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			minify: {
				collapseWhitespace: isProd
			}
		}),
		// new CleanWebpackPlugin(),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, 'src/assets/img/1.jpeg'),
					to: path.resolve(__dirname, 'dist')
				}
			]
		}),
		new MiniCssExtractPlugin({
			filename: filename('css')
		}),
		new ESLintPlugin({fix: true}),
		new webpack.HotModuleReplacementPlugin(),
		// new webpack.NoEmitOnErrorsPlugin()
		// BundleAnalyzerPlugin
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				// use: ['style-loader', 'css-loader']
				// use: [MiniCssExtractPlugin.loader, 'css-loader']
				use: cssLoader()
			},
			{
				test: /\.s[ac]ss$/,
				use: cssLoader('sass-loader')
			},
			{
				test: /\.(jpeg|png|jpg|svg|gif)$/i,
				type: 'asset/resource',
				// loader: 'file-loader',
				// options: {
				// 	name: '[name].[contenthash].[ext]',
				// 	outputPath: 'images',
				// 	publicPath: 'images',
				// 	emitFile: true,
				// 	esModule: false,
				// }
			},
			{
				test: /\.html$/i,
				loader: 'html-loader'
			},
			{
				test: /\.(ttf|woff|woff2|eot)$/i,
				use: ['file-loader']
			},
			{
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			// {
			// 	enforce: 'pre',
			// 	test: /\.js$/,
			// 	exclude: /node_modules/,
			// 	use: ['eslint-loader'],
			// },
			// {
			// 	test: /.(png|jpe?g|svg|gif)$/,
			// 	use: {
			// 		loader: 'file-loader',
			// 	}
			// }
		]
	}
}
