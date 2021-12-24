import React, { useContext } from 'react';
import ModalContext from '../context/ModalContext';


//TODO: Use React Context to Redesign Header Menu


const HeaderMenu = ({ state, setState }) => {
    const { setIsOpen } = useContext(ModalContext);

    const handleClick = () => {
        setState((prevState) => !prevState);
        setIsOpen(true);
    }

    return (
        <div className={`flex text-blue-300 justify-between bg-liber-100 w-screen p-2 ${(state === true) ? "" : "hidden"}`}>
            <h1 className="cursor-pointer" onClick={() => setState((prevState) => !prevState)}><a href='#home'>Home</a></h1>
            <h1 className="cursor-pointer" onClick={() => setState((prevState) => !prevState)}><a href='#featured'>Featured</a></h1>
            <h1 className="cursor-pointer" onClick={() => setState((prevState) => !prevState)}><a href='#categories'>Categories</a></h1>
            <h1 className="cursor-pointer" onClick={handleClick}>About</h1>
        </div>
    )
}

export default HeaderMenu
