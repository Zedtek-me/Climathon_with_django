const path= require('path')

// cnofigurations below

module.exports= {
    mode: "production",
    entry: path.resolve(__dirname, 'climathonApp/static/js/index.js'),
    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'climathonApp/static/js/dist'),
    },
    module:{
        rules:[{
            test: /\.js$/,
            use: "babel-loader"
        }]
    }
}