const path = require('path');

var constants = {
    devBaseUrl: 'http://localhost',
    paths: {
        html: './src/*.html',
        js: './src/**/*.js*',
        images: './src/images/*',
        css: [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
            './src/dependencies/*.css',
            'node_modules/toastr/build/toastr.css'
        ]
    }
}

var config = {
    entry: './src/main.jsx',

    output: {
        filename: 'bundle.js',
        publicPath: '/dist/scripts/'
    },

    devServer: {
        inline: true,
        port: 8080
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/, loader: "style-loader!css-loader"
            }
        ]
    }
}

module.exports = config;
