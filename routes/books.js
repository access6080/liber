import { Router } from "express";
import { getAllBooks, getFeaturedBooks,getBooksCategory } from '../controllers/books.js';

const bookRoutes = Router();

bookRoutes.get('/', getAllBooks);

bookRoutes.get('/featured', getFeaturedBooks);

bookRoutes.get('/category', getBooksCategory);

export default bookRoutes;