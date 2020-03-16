const path = require("path");
// vue.config.js
module.exports = {
    chainWebpack: config => {
        config.when(true, baseConfig);
        config.when(process.env.NODE_ENV === "development", developmentConfig);
        config.when(process.env.NODE_ENV === "production", productionConfig);
    },
    productionSourceMap: false
};

/**
 * base of config
 * 'cvtsp': 'cvtsp-components/lib',
    '@': resolve('src'),
    '@view':resolve('src/view'),
    'components':resolve('src/components'),
    'managePlatform': resolve('src/view/managePlatform'),
    'monitorPlatform': resolve('src/view/monitorPlatform')
 */
function baseConfig(config) {
    // short path
    config.resolve.alias
        .set("@", resolve("src"))
}

/**
 * config of development
 * @param {*} config
 */
function developmentConfig() {

}

/**
 * config of production
 * @param {*} config
 */
function productionConfig(config) {
    config.externals({
        '@/utils/src/config': 'CONFIG'
    });
}

function resolve(_path) {
    return path.resolve(__dirname, _path);
}
