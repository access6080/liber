import React from 'react';
import logo from './static/liberLogo.jpeg';

const App = () => {
  return (
    <div className="flex flex-col bg-black h-screen justify-center items-center">
      <h1 className="text-white text-4xl p-4">Welcome to Liber</h1>
      <div className="flex justify-center  bg-red-500 ">
        <img className="w-[200px] h-[200px] rounded-full object-fit" src={logo} />
      </div>
    </div>
  )
}

export default App

