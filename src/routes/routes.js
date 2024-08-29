import express from "express";
import getBook from "../controllers/book_Controller.js";
const router = express.Router()

router.get('/', getBook)
router.get('/books/id',)
router.post('books',)

export default router