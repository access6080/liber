import React from 'react'

const FeaturedBook = ({color, index}) => {
    return (
        <div className={`flex ${color} h-full justify-center items-center`}>
            Slide {index + 1}
        </div>
    )
}

export default FeaturedBook
