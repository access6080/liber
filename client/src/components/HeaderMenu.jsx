import React from 'react';
// import { HiViewList } from 'react-icons/hi';


//TODO: Use React Context to Redesign Header Menu


const HeaderMenu = ({state, setState}) => {

    return (
        <div className={`flex text-blue-300 justify-between bg-liber-100 w-screen p-2 ${(state === true) ? "" : "hidden"}`}>
            <h1 className="cursor-pointer" onClick={() => setState((prevState) => !prevState)}><a href='#Home'>Home</a></h1>
            <h1 className="cursor-pointer" onClick={() => setState((prevState) => !prevState)}><a href='#Featured'>Featured</a></h1>
            <h1 className="cursor-pointer" onClick={() => setState((prevState) => !prevState)}><a href='#Categories'>Categories</a></h1>
            <h1 className="cursor-pointer" onClick={() => setState((prevState) => !prevState)}><a href='#About'></a>About</h1>
        </div>
    )
}

export default HeaderMenu
