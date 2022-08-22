const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { VueLoaderPlugin } = require("vue-loader");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/main.js",

  output: {
    path: path.join(__dirname, "lib"),
    filename: "index.js",
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },

      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },

      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.(gif|jpg|png|svg|ico)$/,

        type: "asset",
        generator: {
          filename: "images/[name]-[hash:6][ext]",
        },
        parser: {
          dataUrlCondition: {
            maxSize: 20 * 1024,
          },
        },
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        type: "asset/resource",
        // assetModule 打包文件(图片/字体图标/.txt/.mps/mp4/.avi)// assetModule: asset/ asset/inline /asset/resource
        generator: {
          filename: "fonts/[name]-[hash:10][ext]",
        },
      },
      {
        test:/\.js$/,
        use:['babel-loader']
      }
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
  devServer: {
    //当你server以后 自动打开浏览器运行项目
    open: true,
    port: 30000,
  },
};
