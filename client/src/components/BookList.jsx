import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Virtual } from 'swiper';

import Book from './Book';
import { baseUrl } from '../api/serverUri';

import 'swiper/css';
import 'swiper/css/navigation';

const BookList = ({ category }) => {
    const [collection, setCollection] = useState([]);
    const [screenSize, setScreenSize] = useState();

    useEffect(() => {
        setScreenSize(window.screen.width);
        const fetchedCollection = async () => {
            const response = await axios.get(`${baseUrl}/book/category?category=${category}`);
            setCollection(response.data);
        }

        return fetchedCollection();
    }, [category]);


    return (
        <div id={category} className="flex flex-col justify-center items-center h-1/3 md:h-2/3 p-2 md:p-4 shadow-inner shadow-gray-900">
            <h1 className="w-full flex md:justify-start justify-center text-sm text-blue-300">{category}</h1>
            <Swiper
                modules={[Navigation, Virtual]}
                spaceBetween={5}
                slidesPerView={(screenSize < 640 ) ? 5 : 7}
                virtual={true}
                pagination
                navigation
                className='w-full h-full'
            >
                {collection.map((book, index) => {
                    return(
                        <SwiperSlide key={index} virtualIndex={index}>
                            <Book title={book.title} image={book.images} description={book.description} author={book.author}/>
                        </SwiperSlide>
                    )
                })}           
            </Swiper>
        </div>
    )
}

export default BookList;
