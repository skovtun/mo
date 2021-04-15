# Webpack + Babel + React + ESLint initial setup #

The following steps were taken:

1. npm init -y
2. npm i -D webpack webpack-cli @babel/core @babel/preset-env @babel/preset-react babel-loader  

3. Create a file in root directory '.babelrc'
4. Add to the .babelrc:

```json
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
}
```

5. Create a folder 'src'
6. Create the 'index.js' file in the 'src' folder 

7. npm i -D react react-dom

8. Add to the index.js:

```javascript
import React from "react"
import ReactDOM from "react-dom"

const App = () => {
    return (
      <p>It works!</p
    )
}
```

9. Create 'index.html; in the crs
10. Add to index.html:

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>MO</title>
</head>
<body>
    <div id="root"></div>
</body>
</html>
```

11. Дописать в index.js:

```javascript
ReactDOM.render(<App />, document.getElementById("root"))
```

12. Создать в корне файл webpack.config.js
13. Поместить в webpack.config.js:

```javascript
const HtmlWebPackPlugin = require("html-webpack-plugin")
const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "index.js"
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|woff|woff2|eot|ttf|svg)$/i,
                use: [
                    {
                        loader: "file-loader"
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            }
        ]
    },

    plugins: [
        new HtmlWebPackPlugin({
            filename: "index.html",
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin()
    ],

    devServer: {
        historyApiFallback: true,
        port: 5000
    }
}
```
14. npm i -D webpack-dev-server

15. In the 'package.json' add to '"scripts":' follow:

```json
"start": "webpack serve --mode development --open",
"build": "webpack --mode production",
```

16. npm i -D html-webpack-plugin html-loader
17. npm i -D file-loader
18. npm i -D node-sass sass-loader css-loader mini-css-extract-plugin
19. npm i -D eslint
20. npm eslint --init
