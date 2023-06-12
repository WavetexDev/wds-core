const path = require('path');

module.exports = {
	entry: './src/main.ts',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.json'],
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'ts-loader',
				},
			},
			{
				test: /\.(css)$/,
				exclude: /node_modules/,
				use: {
					loader: 'css-loader',
				},
			},
		],
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 3000,
	},
};
