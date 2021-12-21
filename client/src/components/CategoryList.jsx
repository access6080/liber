import React from 'react';

const CategoryList = () => {

    return (
        <div className=" flex bg-liber-200  items-center justify-evenly text-blue-300 p-2 lg:px-5 shadow-lg ">
            <h1 className="text-blue-300 hover:text-slate-300 text-xl italic cursor-pointer">Science Fiction</h1>
           
            <h1 className="text-blue-300 hover:text-slate-300 text-xl italic cursor-pointer">Action</h1>
            
            <h1 className="text-blue-300 hover:text-slate-300 text-xl italic cursor-pointer">Fantasy</h1>
            
            <h1 className="text-blue-300 hover:text-slate-300 text-xl italic cursor-pointer">Mystery</h1>
        </div>
    )
}

export default CategoryList
