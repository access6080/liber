import { Router } from "express";
import { getAllBooks } from '../controllers/books.js';

const bookRoutes = Router();

bookRoutes.get('/', getAllBooks);

export default bookRoutes;