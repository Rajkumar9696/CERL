const { Schema, model } = require('../connection');

const mySchema = new Schema({

    name: { type: String, request: true },
    email: { type: String, request: true, unique: true },

    avatar: { type: String, default: 'avatar.png' },
    password: { type: String },

    role: { type: String, default: 'user' },
    createdAt: Date,
})

module.exports = model('user', mySchema);