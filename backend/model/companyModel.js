const {Schema, model} = require('../connection');

const mySchema = new Schema({
   
  name: {type: String, request: true},
    industry:{type:String},
    email: {type: String, request: true, unique: true},
    website:{type:String},
    // avatar: {type: String, default: 'avatar_placeholder.png'},
    password: {type:String},
    specialties: {type:String},
  
    createdAt:{
        type:Date,
        default: Date.now()
    }
})

module.exports = model ('company', mySchema);