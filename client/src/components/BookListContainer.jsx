import React from 'react'
import BookList from './BookList';
import CategoryList from './CategoryList';

const BookListContainer = () => {
    return (
        <div className="pt-4 w-screen h-2/3 ">
            <CategoryList />
            <BookList category="Fiction"/>  
            <BookList category="Mystery"/>  
            <BookList category="Fantasy"/>  
            <BookList category="Fiction"/>  
        </div>
    )
}

export default BookListContainer;
