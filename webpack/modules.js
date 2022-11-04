module.exports = function() {
    return {
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/i,
                    loader: "babel-loader",
                    exclude: ['/node_modules/'],
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: ['style-loader', 'css-loader', 'sass-loader'],
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    loader: "file-loader",
                    options: {
                    name: 'img/[name].[ext]',
                    },
                },
    
        
            ],
        },
    };
};
