import Book from "../models/book-model.js";

class BookService {
  async create(book) {
    const createBook = await Book.create(book);
    return createBook;
  }

  async get() {
      const books = await Book.find();
      return books;
  }
  async getOne(id) {
    if (!id) {
      throw new Error("не указан");
    }
    const bookID = await Book.findById(id);
    return bookID;
  }
}
export default new BookService();
