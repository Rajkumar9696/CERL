const { Schema, model } = require('../connection');

const mySchema = new Schema({
  designation: { type: String, require: true },
  location: { type: String },
  description: { type: String },
  openings: { type: Number, default: 1 },
  experience: { type: Number },
  salary: { type: String },
  noticePeriod: { type: String },
  modeOfHire: { type: String },
  skillSet: { type: String },
  
   
    
  
})

module.exports = model('vacancy', mySchema);