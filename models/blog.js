const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  blogContent: {
    type: String,
    required: true
  },
  authorName: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Blog', blogSchema);