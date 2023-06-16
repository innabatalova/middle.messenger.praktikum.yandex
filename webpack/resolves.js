const path = require('path');
const resolvePath = p => path.resolve(__dirname, p)

module.exports = function() {
    return {
        resolve: {
            extensions: ['.ts', '.js','.json', '...'],
            alias: {
                'handlebars' : 'handlebars/dist/handlebars.js',
            },
        },
    };
};
