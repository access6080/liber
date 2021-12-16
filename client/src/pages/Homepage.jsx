import React from 'react'
import BookListContainer from '../components/BookListContainer';
import FeaturedList from '../components/FeaturedList';
import Header from '../components/Header';



const Homepage = () => {
    return (
        <div className="flex flex-col bg-liber-200 overflow-auto w-screen h-full">
            <Header />
            <FeaturedList />
            <BookListContainer />
        </div>
    )
}

export default Homepage;
