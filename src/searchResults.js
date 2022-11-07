import React from 'react';
import './searchResults.css'

export default function SearchResults(props){
    
    return(
        <div className="searchResults">
            { props.children }
        </div>
    )
}