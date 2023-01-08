const {Schema, model, ObjectId} = require('mongoose');

const User = new Schema({
    email: {type: String,require:true, unique:true},
    password: {type: String,require:true},
    avatar: {type:String},
    nickname: {type:String},
    tel: {type:Number},
    orders: [{type:ObjectId,ref:"Order"}],

});

module.exports = model('User',User);