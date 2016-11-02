var express = require('express');
var crypto = require('crypto');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    // res.send('respond with a resource');

    //生成口令的散列值
    var md5 = crypto.createHash('md5');   //crypto模块功能是加密并生成各种散列
    var en_upwd = md5.update(123).digest('hex');

    console.log('加密后的密码:'+en_upwd);
});

module.exports = router;
