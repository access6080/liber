import { Router } from 'express';
import { getBooksFromGoogle, addBooksController } from '../controllers/api.js';

const apiRoute = Router();

apiRoute.get('/:key/:accesstoken', getBooksFromGoogle);
apiRoute.post('/:accesstoken/add', addBooksController);

export default apiRoute;