import React from 'react'
import BookList from './BookList';
import CategoryList from './CategoryList';
import Footer from './Footer';


const BookListContainer = () => {
    return (
        <div className="pt-4 w-screen h-2/3 ">
            <CategoryList />
            <BookList category="Science Fiction"/>  
            <BookList category="Mystery"/>  
            <BookList category="Fantasy"/>  
            <BookList category="Action" />  
            <Footer /> {/*TODO: Complete Footer */}
        </div>
    )
}

export default BookListContainer;
