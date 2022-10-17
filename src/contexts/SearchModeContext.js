import React, { createContext } from "react"

export const SearchModeContext = createContext()

export function SearchModeProvider(props){
    function sendMessage(){
        console.log("=== Passed by context! ===")
    }
    return(
        <SearchModeContext.Provider value={{sendMessage}}>
            {props.children}
        </SearchModeContext.Provider>
    )
}