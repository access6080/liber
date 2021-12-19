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

const getFeaturedBooks = async (req, res) => {
    try {
        const featured = await Book.find({ "subject": "Featured" })

        if (!featured) return res.status(404).json({ message: "Featured Books Not Found" });

        res.status(200).json({ success: true, data: featured });
    
    } catch (error) {
        console.log(error.message);
    }

}

export {
    getAllBooks,
    getFeaturedBooks
}