// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');

const config = {
    mode: 'development',
    devtool: false,
    entry: {
        calendar_date_select: './src/calendar_date_select.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'app/assets/javascripts/calendar_date_select'),
    },
    plugins: [
        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    target: ['web', 'es5']
};

module.exports = () => {
    return config;
};
