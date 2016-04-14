var webpack = require('webpack');

module.exports = {
    output: {
        library: 'KeyCode',
        libraryTarget: 'window',
        path: './dist'
    },
    entry: {
        library: './index'
    }
};
