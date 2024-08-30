import mongoose, { model } from "mongoose";

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  Image: {
    type: String,
    required: false,
  },
});

const Author = mongoose.model("Author", authorSchema);
export default Author;
