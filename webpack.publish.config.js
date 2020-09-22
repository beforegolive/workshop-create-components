const path = require('path')

module.exports={
  entry:'./entry.js',
  output:{
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module:{
    rules:[
      {test:/\.jsx?$/, use:'babel-loader'},
      {test:/\.css$/, use: ['style-loader', 'css-loader']}
    ]
  }
}