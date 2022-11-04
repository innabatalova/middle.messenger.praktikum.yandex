module.exports = function() {
    return {
        devServer: {
            open: true,
            host: 'localhost',
            historyApiFallback: true,
            compress: true,
            port: 3000,
        },
    };
};