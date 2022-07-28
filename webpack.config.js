const path= require('path')

// cnofigurations below

module.exports= {
    mode: "production",
    entry: path(__dirname, 'climathonApp/static/js/index.js'),
    output: {
        filename: 'bundled.js',
        path: path(__dirname, 'climathonApp/static/js/dist'),
    },
    module:{
        rules:{
            test: /\.js$/,
            use: "babel-loader"
        }
    }
}