import React, { useState } from 'react'
import './messager.css'


export default function Messager2(props){

    return(
        <div className={    
            props.isActive
            ?"messager-fadeIn messager messager-colorsAlert"
            :"messager-fadeOut messager messager-colorsAlert"
        }>

            <div className="messager-textdiv">{props.message}</div>

            <div className="messager-outerSpinner">
                <span className="messager-controls">Close</span>
                <div className="messager-background">
                  <div className="messager-spinner" style={{width:`${props.progress}%`}}>
                    <div className="messager-border"></div>
                  </div>
                </div>
                <span className="messager-controls">Freeze</span>
            </div>

        </div>
    )
}