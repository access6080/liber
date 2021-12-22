import React from 'react';

const CategoryList = () => {

    return (
        <div id="categories" className=" flex bg-liber-200  items-center justify-evenly text-blue-300 p-2 lg:px-5 shadow-lg ">
            <h1 className="text-blue-300 hover:text-slate-300 md:text-xl italic cursor-pointer"><a href='#Science Fiction'>Science Fiction</a></h1>
           
            <h1 className="text-blue-300 hover:text-slate-300 md:text-xl italic cursor-pointer"><a href='#Action'>Action</a></h1>
            
            <h1 className="text-blue-300 hover:text-slate-300 md:text-xl italic cursor-pointer"><a href='#Fantasy'>Fantasy</a></h1>
            
            <h1 className="text-blue-300 hover:text-slate-300 md:text-xl italic cursor-pointer"><a href='#Mystery'>Mystery</a></h1>
        </div>
    )
}

export default CategoryList
