const { Schema, model } = require('../connection');

const applyformSchema = new Schema({

    name: {
        type: String,
        
    },
    email: {
        type: String,
        require: true,
        default: true
        
    },
  
    password: {
        type: String,
        
    },
    phonenumber: {
        type: String,
        default: "user"
        
    },
    fileUpload: {
        type: String,
        default: ture
    },
});

module.exports = model('apply', applyformSchema);