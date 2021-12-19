import { Router } from "express";
import { getAllBooks, getFeaturedBooks } from '../controllers/books.js';

const bookRoutes = Router();

bookRoutes.get('/', getAllBooks);

bookRoutes.get('/featured', getFeaturedBooks);

export default bookRoutes;