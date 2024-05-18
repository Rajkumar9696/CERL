const { Schema, model } = require('../connection');

const companySchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    
  },
  industry: {
    type: String,
    
  },
  email: {
    type: String,
    
  },
  website: {
    type: String,
   
  },
  password: {
    type: String,
   
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model('Company', companySchema);
