import React from 'react'

//TODO: Change Font Style
  
const Footer = () => {
    return (
        <div className="flex justify-center md:justify-between w-full bg-liber-500 p-2 text-sm text-muted md:text-lg">
            <h1 className='text-blue-300'>© 2021 Jemak</h1>
            <h1 className='hidden md:flex text-blue-300'>This website was designed by Jemak</h1>
        </div>
    )
}

export default Footer
