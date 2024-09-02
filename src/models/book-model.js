import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: false,
  },
  publication_year: {
    type: Number,
    min: -3000,
    max: new Date().getFullYear(),
    required: true,
  },
});

const Book = mongoose.model("Book", bookSchema);

export default Book;
