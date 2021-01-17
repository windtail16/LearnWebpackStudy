var path = require('path');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'none',// production(배포), development, none
  entry: './index.js', 
  output: {
    filename: 'bundle.js', //[chunkhash]bundle.js 
    path: path.resolve(__dirname, 'dist')
  }, 
  module: {
    rules: [
      {
        //css 확장자는 아래의 로더를 적용한다 rule
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          "css-loader"
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin()
  ],
}