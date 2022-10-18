import React, { createContext } from "react"

export const BibliformContext = createContext()

export function BibliformProvider(props){
    return(
        <BibliformContext.Provider>
            {props.children}
        </BibliformContext.Provider>
    )
}