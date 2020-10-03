const mongoose = require('mongoose');

// save the Schema class to a variable so we can use its constructor
const Schema = mongoose.Schema;

// create schema for bucket list items
const listItemSchema = new Schema({
  listItem: { type: String, required: true },
  isChecked: { type: Boolean },
});

// create a model that conforms to the schema
const ListItem = mongoose.model('listItem', listItemSchema);

// create schema for bucket list posts
const postSchema = new Schema({
  listItem: { type: String, required: true },
  date: { type: String, required: true },
  postDescription: { type: String, required: true },
  location: { type: String, required: true },
  // is the above a Google Maps URL or a string that tells Maps to make a map?
  youtubeLink: String,
  // imageUpload: Come back to this. Use GridFS to store images
});

// create a model that conforms to the schema
const Post = mongoose.model('post', postSchema);

module.exports = {
  ListItem,
  Post,
};