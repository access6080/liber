import React from 'react'

const BookList = ({category}) => {
    return (
        <div id={category} className="flex justify-center items-center h-2/3 shadow-inner shadow-gray-900">
            <h1 className="text-blue-300">{ category }</h1>
        </div>
    )
}

export default BookList;
