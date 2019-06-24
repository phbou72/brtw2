const path = require("path");

const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const htmlPlugin = new HtmlWebPackPlugin({
    template: "src/index.html",
    hash: true,
});

const miniCSSPlugin = new MiniCssExtractPlugin({
    filename: "[name].css",
    chunkFilename: "[id].css",
});

module.exports = {
    entry: path.resolve(__dirname, "./src/index.js"),
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "bundle.js",
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    process.env.NODE_ENV !== "production" ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ["file-loader"],
            },
        ],
    },
    devtool: "cheap-module-eval-source-map", // inline-source-map default
    plugins: [
        htmlPlugin,
        miniCSSPlugin,
        // new BundleAnalyzerPlugin()
    ],
};
