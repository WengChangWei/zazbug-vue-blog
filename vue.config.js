module.exports = {
    baseUrl: './',
    assetsDir: 'static',
    productionSourceMap: false,
    devServer: {
        proxy: {
            "/api" : {
                target: "http://120.24.29.192:18088/",
                // target: "http://127.0.0.1:18088/",
                changeOrigin: true,
                pathRewrite: {
                    "^/api" : ""
                }
            }
        }
    }
}