import express from "express";
import postBookController from "../controllers/BookController.js";
const router = express.Router()

router.get('/books', postBookController.get)
router.get('/books/:id',postBookController.getOne)
router.post('/books', postBookController.create)

export default router