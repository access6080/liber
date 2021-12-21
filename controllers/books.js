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
        const featured = await Book.find({ "featured": true })

        if (!featured) return res.status(404).json({ message: "Featured Books Not Found", success: false });

        res.status(200).send(featured);
    
    } catch (error) {
        console.log(error.message);
    }

}

const getBooksCategory = async (req, res) => {
    if (!req.query) return;
    const category = req.query.category;

    try {
        const books = await Book.find({ "category" : category, "featured": false })
            

        if (!books) return res.status(404).json({ success: false });
        // console.log(books.length)

        res.status(200).json(books);
    } catch (error) {
        console.log(error.message);
    }


}

export {
    getAllBooks,
    getFeaturedBooks,
    getBooksCategory
}