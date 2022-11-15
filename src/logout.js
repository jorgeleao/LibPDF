import React from "react";
import './logout.css'
import Messager2 from './messager2/messager'
import  { useMessager }  from './messager2/useMessager.js'



export default function Logout(props) {
    const { isActive, message, progress, openMessager } = useMessager();


    return (
        <div className="common_cardboard">
            <br />
            <br />
            <br/>
            <Messager2 isActive = {isActive} message={message} progress={progress}/>

            <button onClick={() => openMessager('...Messager 2...')} >Open Messager2</button>
        </div>
    );
}
