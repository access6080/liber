import axios from 'axios';
import Book from '../models/books.js';

const KEYWORDS = ['mystery', 'action', 'fiction', 'thriller']

const getBooksFromGoogle = async (req, res) => {
    const { key } = req.params;
    const { accesstoken } = req.params;
    
    if (!accesstoken) {
        return
    }

    try {
        const { data } = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=*+subject:${key}&key=${process.env.API_KEY}`)
      
        const books = data.items.map(obj => {
            return {
                title: obj.volumeInfo.title,
                author: obj.volumeInfo.authors,
                description: obj.volumeInfo.description,
                category: obj.volumeInfo.categories,
                images: obj.volumeInfo.imageLinks,
                subject: key
            }
        });

        books.forEach(async (book, i) => {
            // Add Book  to database
            await Book.create(book);
        });

        res.status(200).json({message: 'OK'});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ success: false });
    }
}

const addBooksController = async (req, res) => {
    const { accesstoken } = req.params;

    if (accesstoken !== 6080) return res.status(403).send("Api Key required");

    const book = req.body;

    try {
        const newBook = await Book.create(book);

        res.status(200).json({success: true})
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ success: false })
    }
}


export {
    getBooksFromGoogle,
    addBooksController
}