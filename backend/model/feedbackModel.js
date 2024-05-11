const {Schema, model} = require('../connection');

const mySchema = new Schema({
 name: String,
 email: String,
 feedback: String,
 rating: String   

})

module.exports = model ('feedback', mySchema);