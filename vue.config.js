module.exports = {
    // 选项...
    outputDir: 'dist', //打包后的目录名称
    assetsDir: 'static', //静态资源目录名称
    publicPath: "./",
    indexPath: 'index.html', // 相对于打包路径index.html的路径
    lintOnSave: false, // 是否在开发环境下通过 eslint-loader 在每次保存时lint代码
    productionSourceMap: false, // 不需要生产环境的 source map（减小dist文件大小，加速构建）
    devServer: {
        open: true,  // npm run serve后自动打开页面
        host: 'localhost',  // 匹配本机IP地址(默认是0.0.0.0)
        port: 8080, // 开发服务器运行端口号
        proxy: {
            '/api': {
                target: 'http://192.168.3.45:8080', // 代理接口地址
                secure: false,  // 如果是https接口，需要配置这个参数
                changeOrigin: true, // 是否跨域
                pathRewrite: {
                    '^/api': ''   //需要rewrite的, 这里理解成以'/api'开头的接口地址，把/api代替target中的地址
                }
            }
        },
    },
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置... 
        } else {
            // 为开发环境修改配置...
        }
    }
}