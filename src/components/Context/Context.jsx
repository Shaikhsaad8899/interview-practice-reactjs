import React, { createContext, useState } from 'react'
export const Context = createContext()
const ContextProvider = ({ children }) => {
    const [color, setColor] = useState("Red")
     return (
        <Context.Provider value={{ color, setColor }}>{children}</Context.Provider>
    )
}

export default ContextProvider