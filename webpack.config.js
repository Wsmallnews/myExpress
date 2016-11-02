var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
module.exports = {
    devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
    //插件项
    plugins: [
        commonsPlugin,
        new webpack.BannerPlugin('author:@smallnews')
    ],
    //页面入口文件配置
    entry: {
        index : './views/src/index.js'
    },
    //入口文件输出配置
    output: {
        path: './public/js',
        filename: '[name].js'
    },
    module: {
        //加载器配置
        loaders: [
            { test: /\.vue$/,loader: 'vue-loader' },
            { test: /\.css$/, loader: 'style-loader!css-loader?sourceMap' },
            { test: /\.js$/, loader: 'jsx-loader?harmony' },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader?sourceMap' },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
            { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader?sourceMap'},
            { test: /\.woff$/,   loader: "url-loader?limit=10000&minetype=application/font-woff" },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff2" },
            { test: /\.ttf$/,    loader: "file-loader" },
            { test: /\.eot$/,    loader: "file-loader" },
            { test: /\.svg$/,    loader: "file-loader" }
        ]
    },
    //其它解决方案配置
    // resolve: {
    //     // root: 'E:/github/flux-example/src', //绝对路径
    //     extensions: ['', '.js', '.json', '.scss','.vue'],
    //     // alias: {
    //     //     AppStore : 'js/stores/AppStores.js',
    //     //     ActionType : 'js/actions/ActionType.js',
    //     //     AppAction : 'js/actions/AppAction.js'
    //     // }
    // }
    // ,
    // devServer: {
    //     // contentBase: "./public",//本地服务器所加载的页面所在的目录
    //     colors: true,//终端中输出结果为彩色
    //     progress:true,
    //     historyApiFallback: true,//不跳转
    //     inline: true//实时刷新
    // }
};


// nodejs 中的path模块
// var path = require('path');
// module.exports = {          //将该方法导出，当被required 时，直接可以通过 变量名.resolve 使用
//     resolve:{
//         extensions: ['', '.js', '.vue'],
//         alias:{
//             components:path.join(__dirname,"./components")  //C:\\Users\\Administrator\\Desktop\\vuejs\\components
//         }
//     },
//     module: {
//         loaders: [
//             {test: /\.vue$/,loader: 'vue',exclude: /node_modules/},
//             {test:/\.js?$/,loaders:['babel','eslint'],exclude: /node_modules/},
//         ]
//     }
// };
