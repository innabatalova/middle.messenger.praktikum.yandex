module.exports = function() {
    return {
        resolve: {
            extensions: ['.ts', '.js', '...'],
            alias: {
                'handlebars' : 'handlebars/dist/handlebars.js'
            },
        },
    };
};