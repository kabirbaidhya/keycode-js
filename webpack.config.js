var webpack = require('webpack');

module.exports = {
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader"
            }
        ]
    },
    output: {
        library: 'KeyCode',
        libraryTarget: 'window',
        path: './dist'
    },
    entry: {
        library: './index'
    }
};
