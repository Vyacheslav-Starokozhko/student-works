const {Schema, model, ObjectId} = require('mongoose');

const Order = new Schema({
    item: {type: String,require:true},
    type:{type: String,require:true},
    price:{type: String,require:true},
    comment: {type: String},
    user: [{type:ObjectId,ref:"User"}],

});

module.exports = model('Order',Order);