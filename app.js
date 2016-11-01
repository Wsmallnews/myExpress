var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');     // favicon 图标
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');    // 初步分析：application/x-www-form-urlencoded和application/json请求，并把变量存入req.body，这种我们才能够获取到！
var connect = require('connect');
var session = require('express-session');       // session 中间件

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());                     // 和post 参数的 res.body 有关系
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser('smallnews'));
app.use(session({secret: 'smallnews'}));

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
// app.use('/login', routes);
// app.use('/logout', routes);
// app.use('/homepage', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
