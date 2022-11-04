const path = require('path');
const resolvePath = p => path.resolve(__dirname, p)

module.exports = function() {
    return {
        resolve: {
            extensions: ['.ts', '.js', '...'],
            alias: {
                '@api': resolvePath('/src/api'),
                '@components': resolvePath('/src/components'),
                '@controllers': resolvePath('/src/controllers'),
                '@core': resolvePath('/src/core'),
                '@pages': resolvePath('/src/pages'),
                '@sass': resolvePath('/src/sass'),
                '@utils': resolvePath('/src/utils'),
                'handlebars' : 'handlebars/dist/handlebars.js',
            },
        },
    };
};
