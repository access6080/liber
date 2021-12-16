import Book from '../models/books.js';

const getAllBooks = async (req, res) => {
    //  Get all books Controller
    try {
        const books = await Book.find();

        res.status(200).json({ success: true, data: books });
    } catch (error) {
        console.log(error.message);
    }
}

export {
    getAllBooks
}