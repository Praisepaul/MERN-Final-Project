import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
const[currentColor, setCurrentColor] = useState('#03C9D7');
const[currentMode, setCurrentMode] = useState('Light');
const[themeSettings, setThemeSettings] = useState(false);
const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('colorMode', e.target.value);
    setThemeSettings(false);
}

const setColor = (mode) => {
    setCurrentColor(mode);
    localStorage.setItem('themeMode', mode);
    setThemeSettings(false);
}

    const [screenSize, setScreenSize] = useState(undefined);
    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked]: true });
    }
    return (
        <StateContext.Provider value={{
            activeMenu,
            setActiveMenu,
            isClicked,
            setIsClicked,
            handleClick,
            screenSize,
            setScreenSize,
            setColor, 
            setMode, 
            currentColor, 
            currentMode, 
            themeSettings,
            setThemeSettings,
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateConstant = () => useContext(StateContext);