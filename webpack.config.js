const path = require('path');

module.exports = {
	entry: './src/js/index.js',
	output: {
		filename: 'main.bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{ test: /\.css$/, use: ['style-loader', 'css-loader'] },
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sasss-loader'],
			},
		],
	},
};
