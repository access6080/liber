import React from 'react'

const Book = ({ title, image }) => {
    //TODO: Add A Modal For Each book
    return (
        <div className="w-full h-full md:p-2 my-2 cursor-pointer">
            {/* <h3 className="text-blue-300">{title}</h3>  */}
            <img className='w-full h-full lg:rounded-3xl ' src={image} alt={title} />
        </div>
    )
}

export default Book
