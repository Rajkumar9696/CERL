const {Schema, model} = require('../connection');

const mySchema = new Schema({
    name: {type: String, request: true},
    email: {type: String, request: true, unique: true},
    avator: {type: String, default: 'avatar_placeholder.png'},
    password: String,
    role: {type: String, default:'user'},
    createdAt:Date,

})

module.exports = model ('user', mySchema);