const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
        main: "./src/main.js"
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].js",
        sourceMapFilename: "[name].map"
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["es2015", "react", "stage-0"]
                    }
                }
            }
        ]
    },
    node: {
        __dirname: false
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: "src/index.html" }
        ])]
};
