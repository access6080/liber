import React, { useState }from 'react';
import BookModal from './Modals/BookModal';

const Book = ({ title, image, author, description }) => {

    //TODO: Add A Modal For Each book
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className="w-full h-full md:p-2 my-2 cursor-pointer" onClick={() => setIsOpen(true)}>
                {/* <h3 className="text-blue-300">{title}</h3>  */}
                <img className='w-full h-full lg:rounded-3xl ' src={image} alt={title} />
            </div>
            <BookModal isOpen={isOpen} setIsOpen={setIsOpen} title={title} author={author} description={description} image={image}/>
        </>
    )
}

export default Book;