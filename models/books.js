import mongoose from 'mongoose';

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },

    author: {
        type: Array,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    category: {
        type: Array,
        required: true,
    },

    images: {
        type: Object,
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