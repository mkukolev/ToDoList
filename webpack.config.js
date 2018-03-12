 const path = require('path');
 module.exports = {
     entry: path.join(__dirname, 'src', 'script.js'),
     output: {
         path: __dirname + '/public',
         filename:  'todolist.js'
     },
     module: {
        rules: [
          { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
        ],
      },
      devServer: {
        contentBase: path.join(__dirname + '/public'),
        compress: true,
        port: 9000
      },
 };
