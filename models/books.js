import mongoose from 'mongoose';

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },

    author: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    category: {
        type: String,
        required: true,
    },

    images: {
        type: String,
        required: true,
    },

    featured: {
        type: Boolean,
        default: false,
        required: true
    }
});

const Book = mongoose.model('Book', bookSchema);

export default Book;