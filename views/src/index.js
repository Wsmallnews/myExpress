window._ = require('lodash');

window.$ = window.jQuery = require('jquery');   // 引入jquery

window.Tether = require('tether');              // 引入 tether ，bootstrap 4.0 必须

require('bootstrap');           // 引入 bootstrap
//
// require("bootstrap/less/bootstrap.less");          // bootstrap  全局css 样式 less 版本

require("./sass/index.scss");               // 引入全局scss 样式，包括bootstrap
