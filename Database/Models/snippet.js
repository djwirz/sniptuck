const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const snippetSchema = new Schema({
  title: {
    type: String,
    //required: true
  },
  description: {
    type: String,
    //required: true
  },
  tags: {
    type: String,
    //required: true
  },
  snippet: {
    type: String,
    //required: true
  },
  user_id: {
    type: String,
    //required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Snippet = mongoose.model("Snippet", snippetSchema);
module.exports = Snippet;
