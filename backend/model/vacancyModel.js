const { Schema, model } = require('../connection');

const mySchema = new Schema({

  title: { type: String, request: true },
  industry: { type: String },
  location: { type: String },
  description: { type: String },
  experience: { type: String },
  requirements: String,
  qualification: String,
  employmentType: String,
  responsibilities: String,

  createdAt: {
    type: Date,
    default: Date.now()
  }
})

module.exports = model('vacancy', mySchema);