import Book from "../models/book-model.js";
import BookService from "../services/BookService.js";

class BookController {
  async create(req, res) {
    try {
      const book = await BookService.create(req.body);
      return res.json(book);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  async get(req, res) {
    try {
      const books = await BookService.get();
      return res.json(books);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  async getOne(req, res) {
    try {
      const book = await BookService.getOne(req.params.id)
      return res.json(book)
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

export default new BookController();
