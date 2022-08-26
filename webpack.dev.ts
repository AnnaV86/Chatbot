import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import commonConfig from './webpack.common';

const devServer: DevServerConfiguration = {
	historyApiFallback: true,
	open: true,
	compress: true,
	hot: true,
	port: 8080
};

const config: Configuration = {
	mode: 'development',
	devtool: 'cheap-module-source-map',
	devServer
};

export default merge(commonConfig, config);
