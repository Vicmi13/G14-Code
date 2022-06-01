

// loaders son una de reglas que le dicen WP como generar paquetes

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    module: {
        rules: [
            // Aqui se cargan los loaders
            {
                //Significa donde tengo que buscar 
                //REGEX
                test: /\.html$/,

                // de los archivos que se encuentran, que loader voy a aplicar
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            // POR default ya lo entrego minimize
                            minimize: true,
                        }
                    }
                    // "html-loader"
                ]
            },
            {
                // 2do loader
                test: /.(scss|css)$/,
                use: [
                    // El orden de los loader si importa
                    "style-loader",
                    "css-loader",
                    "sass-loader" // (SCSS)
                ]
            }
        ] 
    },

    plugins: [
        // Aqui se cargan los plugins de webpack
        new HtmlWebpackPlugin( {
            // Indicamos cual va a ser la base de mi proyecto (HTML)
            template: "./index.html",

            //OPTIONAL WP piensa que se trabaja desde la carpeta
            // dist y no es necesario el nombre

            // filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            // WP se va a encargar de generar un nombre para c/ archivo CSS
            filename: "[name].css", 
            // Fragmenta el CSS para que dependiendo de la vista solo cargue ese CSS
            chunkFilename: "[id].css"
        }),


    ]


}