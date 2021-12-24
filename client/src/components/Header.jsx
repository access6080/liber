import React, { useState, useContext } from 'react';
import { HiViewList } from 'react-icons/hi';
import HeaderMenu from './HeaderMenu';
import ModalContext from '../context/ModalContext';


const Header = () => {
    const [menu, setMenu] = useState("Home")
    const [toggleMenu, setToggleMenu] = useState(false);
    const { isOpen, setIsOpen } = useContext(ModalContext);

    const handleClick = (e) => {
        setMenu(e.target.innerHTML);

        if (e.target.innerHTML === "About") {
            setIsOpen(true);
            setMenu("Home");
        }

    };

    const handleMenu = () => {
        setToggleMenu((prevState) => !prevState);
    };

    return (
        <>
        {/* {(isOpen === false)  && setMenu("Home")}; */}
        <header className={`sticky top-0 z-50 bg-liber-100 flex items-center justify-between p-2 lg:px-5 shadow-md`}>

            {/* Left */}
            <div className='flex items-center ring-2 p-1 ring-blue-300 rounded-full cursor-pointer'>
                <h1 className="text-blue-200 font-serif italic">Liber</h1>
            </div>

            {/* Right */}
            <div className='flex items-center justify-end cursor-pointer'>
                <div className='space-x-4 sm:space-x-2 hidden md:inline-flex ml-2 items-center'>
                    <div className='flex items-center rounded-full cursor-pointer'>
                        <h1 className={
                            `text-blue-200 font-serif italic ${(menu === 'Home') && 'underline underline-offset-4'}` 
                        }
                            onClick={handleClick}>
                            <a href="#home">Home</a>
                        </h1>
                    </div>
                    <div className='flex items-center rounded-full cursor-pointer'>
                        <h1 className={
                            `text-blue-200 font-serif italic ${(menu === 'Featured') && 'underline underline-offset-4'}` 
                        }
                            onClick={handleClick}>
                            <a href={"#featured"}>Featured</a>
                        </h1>
                    </div>
                    <div className='flex items-center rounded-full cursor-pointer'>
                        <h1 className={
                            `text-blue-200 font-serif italic ${(menu === 'Categories') && 'underline underline-offset-4'}` 
                        }
                            onClick={handleClick}>
                            <a href={"#categories"}>Categories</a>
                        </h1>
                    </div>
                    <div className='flex items-center rounded-full cursor-pointer'>
                        <h1 className={
                            `text-blue-200 font-serif italic ${(menu === 'About') && 'underline underline-offset-4'}` 
                        }
                            onClick={handleClick}>
                            About
                        </h1>
                    </div>
                </div>  
                <div className='md:hidden z-0'>
                    <HiViewList onClick={handleMenu} className='text-blue-200 h-6'/>
                </div>
            </div>
            </header>
            {/*TODO: Implement mobile header */}
        <HeaderMenu state={toggleMenu} setState={setToggleMenu}/>
        </>
    )
}

export default Header
