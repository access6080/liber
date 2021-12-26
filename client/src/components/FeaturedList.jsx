import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Virtual, EffectFade } from 'swiper';

// Import Component 
import FeaturedBook from './FeaturedBook';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/virtual';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const FeaturedList = ({ featured }) => {
    return (
        <div id="featured" className="flex w-screen h-1/3 justify-center items-center">
            <Swiper
                modules={[Pagination, Virtual, Autoplay, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{
                    "delay": 2000,
                    "disableOnInteraction": false
                }}
                virtual={true}
                effect="fade"
                pagination={{ clickable: true }}
                className='h-full w-full lg:w-11/12 lg:rounded-b-3xl shadow-xl shadow-black'
            >
                {featured.map((book, index) => {
                    return(
                        <SwiperSlide key={index} virtualIndex={index}>
                            <FeaturedBook title={book.title} image={book.images} desc={book.description} />
                        </SwiperSlide>
                    )
                })}           
            </Swiper>
        </div>
    )
}

export default FeaturedList
