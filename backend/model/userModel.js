const { Schema, model } = require('../connection');

const userSchema = new Schema({

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
    role: {
        type: String,
        default: "user"
        
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

module.exports = model('user', userSchema);
