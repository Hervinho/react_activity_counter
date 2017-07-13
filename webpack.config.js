var webpack = require('webpack');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: "/dist/assets",
        filename: "bundle.js",
        publicPath: "assets"
    },
    devServer: {
        inline: true,
        contentBase: './dist',
        port: 5000
    },
    module: {
        loaders: [//installed via npm
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: "babel-loader?presets[]=latest,presets[]=react,presets[]=stage-0"
            },
            {//loader to process JSON data.
                test: /\.json$/,
                exclude: /(node_modules)/,
                loader: "json-loader"
            },
            {//loader to handle css data
                test: /\.css$/,
                exclude: /(node_modules)/,
                loader: "style-loader!css-loader!autoprefixer-loader"
            },
            {//loader to handle css data
                test: /\.scss$/,
                exclude: /(node_modules)/,
                loader: "style-loader!css-loader!autoprefixer-loader!sass-loader"
            }
        ]
    }
}