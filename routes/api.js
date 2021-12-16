import { Router } from 'express';
import { getBooksFromGoogle } from '../controllers/api.js';

const apiRoute = Router();

apiRoute.get('/:key/:accesstoken', getBooksFromGoogle)

export default apiRoute;