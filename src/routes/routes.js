import { Router } from "express";
import postBookController from "../controllers/BookController.js";
import UserController from "../controllers/UserController.js";

const router = new Router()

router.get('/books', postBookController.get)
router.get('/books/:id',postBookController.getOne)
router.post('/books', postBookController.create)


router.post('/registration', UserController.registration)
router.post('/login',UserController.login)
router.post('/logout', UserController.logout)
router.get('/activate/:link',UserController.active)
router.get('/refresh',UserController.refresh)
router.get('/users',UserController.getUsers)


export default router