import { createContext } from 'react';

const ModalContext = createContext({
    isOpen: false,
    setIsOpen: (isOpen) => {}
});

export default  ModalContext;