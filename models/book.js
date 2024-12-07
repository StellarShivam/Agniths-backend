const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  authors: { type: String },
  description: { type: String },
  previewLink: { type: String },
  categories: { type: String },
  publishedDate: { type: String },
  publisher: { type: String },
  smallThumbnail: { type: String },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
