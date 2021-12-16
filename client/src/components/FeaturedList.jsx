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

const FeaturedList = () => {
    return (
        <div className="flex w-screen h-1/3 justify-center items-center">
            <Swiper
                modules={[Pagination, Virtual, Autoplay, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{delay: 3000}}
                virtual={true}
                effect="fade"
                pagination={{ clickable: true }}
                className='h-full w-11/12 rounded-b-3xl shadow-xl shadow-black'
            >
                {["bg-red-500", "bg-green-500", "bg-yellow-500", "bg-blue-500"].map((color, index) => {
                    return (
                        <SwiperSlide key={index} virtualIndex={index}>
                            <FeaturedBook color={color} index={index} />
                        </SwiperSlide>
                    )
                })}           
            </Swiper>
        </div>
    )
}

export default FeaturedList
