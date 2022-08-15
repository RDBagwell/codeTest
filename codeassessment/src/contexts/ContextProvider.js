import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const CotextProvider = ({ children })=>{
    const [isOpen, setIsOpen] = useState(false);
    const handleIsOpen = ()=>{
        !isOpen ? setIsOpen(true) : setIsOpen(false);
    }

    const [opionTitle, setOptionTitle] = useState('All Photos')
    const handleChange = (event)=>{
      const title = event.target.value
      setOptionTitle(title)
    }

    const [cardData, setcardData] = useState([])


    return(
        <StateContext.Provider value={{
            isOpen,
            setIsOpen,
            handleIsOpen,
            opionTitle,
            handleChange,
            cardData,
            setcardData
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = ()=> useContext(StateContext);