const path = require('path');

module.exports = {
    paths: function (paths, env) {
        paths.appIndexJs = path.resolve(__dirname, 'src/app/index.js');
        paths.appSrc = path.resolve(__dirname, 'src/app');
        paths.appPublic = path.resolve(__dirname, 'src/electron');
        paths.appHtml = path.resolve(__dirname, 'src/electron/index.html');
        return paths;
    }
}