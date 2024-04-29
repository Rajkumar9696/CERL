const {Schema, model} = require('../connection');

const mySchema = new Schema({
   
  name: {type: String, request: true},
  industry:{type: String},
  location:{type: String},
  description:{type: String},
  experience:{type: String},
  
    createdAt:{
        type:Date,
        default: Date.now()
    }
})

module.exports = model ('companyVacancy', mySchema);