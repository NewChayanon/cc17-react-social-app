/* eslint-disable react/prop-types */
import { createContext } from "react"
export const AhemeContext = createContext()

export default function AhemeContextProvider ({children}){
    const user = null
    return <AhemeContext.Provider value={{user:user}}>{children}</AhemeContext.Provider>
}