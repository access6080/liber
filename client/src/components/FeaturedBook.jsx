import React from 'react';

const FeaturedBook = ({ title, image, desc}) => {
    
    return (
        <div className={`flex bg-liber-200 justify-between h-full  md:overflow-hidden`}>
            <div className='w-2/5 md:w-1/5 mr-4 object-cover'>
                <img className='w-full h-full ' src={image} alt="Book Cover" />
            </div>
            <div className='flex flex-col justify-center items-center w-3/5 md:w-4/5 m-2'>
                <h1 className='text-blue-300 md:text-4xl hover:underline underline-offset-2 text-2xl mb-4 cursor-pointer'>{title}</h1>
                <p className='text-blue-300 text-lg hidden md:flex '>{desc}</p>
            </div>
        </div>
    )
}

export default FeaturedBook
