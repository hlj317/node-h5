const STATIC_PORT = 8000;

const env = process.env.NODE_ENV;

module.exports = {
    assetsPrefix: 'assets',
    devStaticHost: `//127.0.0.1:${STATIC_PORT}`,
    port: STATIC_PORT,
    productionAsset: env === 'production',
};

