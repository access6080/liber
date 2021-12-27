import React, { useState, useEffect } from 'react';
import axios from 'axios';

import BookListContainer from '../components/BookListContainer';
import FeaturedList from '../components/FeaturedList';
import Header from '../components/Header';
import AboutUsModal from '../components/Modals/AboutUsModal';
import { baseUrl } from '../api/serverUri';



const Homepage = () => {
    const [featured, setfeatured] = useState([]);

    useEffect(() => {
        const fetchedFeatured = async () => {
            const response = await axios.get(`${baseUrl}/book/featured`);
            setfeatured(response.data);
        }


        return fetchedFeatured();
    }, []);

    return (
        <div className="flex flex-col bg-liber-200 overflow-auto w-screen h-full">
            <Header />
            <FeaturedList featured={featured}/>
            <BookListContainer />
            <AboutUsModal />
        </div>
    )
}

export default Homepage;
