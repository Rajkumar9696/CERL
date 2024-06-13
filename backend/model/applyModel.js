const { Schema, model } = require('../connection');

const applyformSchema = new Schema({

    name: {
        type: String,
        
    },
    email: {
        type: String,
       
        
    },
  
    password: {
        type: String,
        
    },
    phonenumber: {
        type: Number,
        
        
    },
    fileUpload: {
        type: String,
        
    },
});

module.exports = model('apply', applyformSchema);