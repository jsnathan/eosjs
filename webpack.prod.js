const path = require('path');

module.exports = {
    entry: {
        eosjs: './src/eosjs-api.ts',
        eosjs_jsonrpc: './src/eosjs-jsonrpc.ts',
        eosjs_jssig: './src/eosjs-jssig.ts',
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        configFile: 'tsconfig.json'
                    }
                },
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
  output: {
    library: '[name]',
    pathinfo: true,
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    publicPath: "/dist"
  },
}
