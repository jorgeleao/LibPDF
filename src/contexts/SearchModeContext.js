import React, { createContext } from "react"

export const SearchModeContext = createContext()

export function SearchModeProvider(props){
    return(
        <SearchModeContext.Provider>
            {props.children}
        </SearchModeContext.Provider>
    )
}