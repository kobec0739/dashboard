import React, { createContext, CreateContext, useContext, userContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);

    return (
        <StateContext.Provider value={{ activeMenu: activeMenu, setActiveMenu: setActiveMenu }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)