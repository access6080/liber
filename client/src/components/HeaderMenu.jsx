import React from 'react';
// import { HiViewList } from 'react-icons/hi';


const HeaderMenu = ({state, setState}) => {

    return (
        <div className={`bg-white w-screen z-10 ${(state === true) ? "" : "hidden"}`}>
            <h1 onClick={() => setState((prevState) => !prevState)}>Close</h1>
        </div>
    )
}

export default HeaderMenu
