var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userScheMa = new Schema({
    userid: String,
    password:String
}); //定义一个模型

exports.user = mongoose.model('users', userScheMa);
