module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? 'https://www.my-app.com/' : '/',
    outputDir: 'dist',
    assetsDir: 'assets',
    devServer: {
        overlay: {
            warnings: true,
            errors: true
        }
    }

}