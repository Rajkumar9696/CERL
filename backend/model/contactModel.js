const { Schema, model } = require('../connection');

const mySchema = new Schema({

    name: String,
    email: String,
    message: String,
    createdAt: Date,
})

module.exports = model('contact', mySchema);