import React from 'react'
import './messager.css'

export default function Messager(props){
    return(
        <div className={    
            props.isActive
            ?"messager-fadeIn messager messager-colorsAlert"
            :"messager-fadeOut messager messager-colorsAlert"
        }>
            <span>{props.message}</span>
            <div className="messager-outerSpinner">
                <span className="messager-controls">Close</span>
                <div className="messager-spinner">
                    <div className="messager-inner"></div>
                </div>
                <span className="messager-controls">Freeze</span>
            </div>
        </div>
    )
}