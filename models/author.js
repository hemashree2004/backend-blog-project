const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  publishedDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Author', authorSchema);
