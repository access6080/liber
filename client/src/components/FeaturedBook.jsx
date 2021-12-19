import React from 'react';

const FeaturedBook = ({ title, image, desc}) => {
    
    return (
        <div className={`flex bg-liber-200 justify-between h-full`}>
            <div className=' w-1/5 p-2 ml-4'>
                <img className='w-full' src={image} alt="Book Cover" />
            </div>
            <div className='flex flex-col justify-center items-center w-4/5 my-2'>
                <h1 className='text-white text-4xl mb-4'>{title}</h1>
                <p className='text-white text-lg'>{desc}</p>
            </div>
        </div>
    )
}

export default FeaturedBook
