 const path = require('path');
 module.exports = {
     entry: path.join(__dirname, 'src', 'script.js'),
     output: {
         path: __dirname + '/public',
         filename:  'todo.js'
     },
     module: {
        rules: [
          { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
        ],
      },
 };
