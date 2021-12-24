import React, { useState } from 'react';
import Homepage from './pages/Homepage';
import ModalContext from './context/ModalContext';


const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <ModalContext.Provider value={{isOpen, setIsOpen}}>
      <div className="h-screen">
        <Homepage />
      </div>
    </ModalContext.Provider> 
  )
}

export default App;