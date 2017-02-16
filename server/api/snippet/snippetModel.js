const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SnippetSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  snippet: {
    type: String,
    required: true
  },
  developer: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  tags: [{
    type: Schema.Types.ObjectId,
    ref: tag
  }],
  public: {
    type: Boolean,
    required: true
  }
})
