import Book from "../models/book.js";

class BookService{
    async create(book) {
          const createBook = await Book.create(book)
          return createBook
        }
    
      async get(req, res) {
        try {
          const books = await Book.find();
          return res.json(books);
        } catch (err) {
          res.status(500).json(err);
        }
      }
      async getOne(req, res) {
        try {
          const { id } = req.params;
          const book = await Book.findById(id);
          if (!book) {
            return res.json("id не найдет");
          }
          return res.json(book);
        } catch (err) {
          res.status(500).json(err);
        }
      }
}
export default new BookService()