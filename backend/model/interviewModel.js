const { Schema, model } = require('../connection');

const userSchema = new Schema({

    companyName: {
        type: String,
        
    },
    fname:{
        type: String,
    },
    lname:{
        type: String,
    },
   
    link:{
        type: String,
    },

    timing:{
        type: String,
    },
    date:{
        type: String,
    },
    
    createdAt: {
        type: Date,
        default: Date.now
    },
});

module.exports = model('interview', userSchema);
