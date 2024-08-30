import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    name: String,
    author: String,
    publication_year: {
        type: Number,
        min: -3000, // Минимальный допустимый год (например, 3000 до н.э.)
        max: new Date().getFullYear(), // Максимальный год — текущий год
        required: true,
    },
});

const Book = mongoose.model("Book", bookSchema)

export default Book;