const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports={
  entry:'./index.js',
  output: {
    path: path.resolve(__dirname,'./dist'),
    filename:'my-bundle.js'
  },
  module:{
    rules:[
      {test:/\.jsx?$/, use:'babel-loader'}
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({ template:'./template.html'})
  ]
}