import React, { useState } from 'react';
//import { useTranslation } from 'react-i18next';
import './logout.css'
import { useInput } from './hooks/useInput';

export default function Logout(props) {
//    const { t } = useTranslation();

    const [chkbox_state, setChkbox_state] = useState([false,false])

    function toggleOneChkbox(chkboxindx){
        let newChkbox_state = new Array(2).fill(false,0,2)
        chkbox_state.map((c,i)=>{
           return newChkbox_state[i] = i===chkboxindx?!chkbox_state[i]:chkbox_state[i];
        })
        setChkbox_state(newChkbox_state)
    }

    const { value:firstName, bind:bindFirstName, reset:resetFirstName } = useInput('');
    const { value:lastName, bind:bindLastName, reset:resetLastName } = useInput('');

    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Name:    ${firstName} ${lastName}`);
//        console.log("=== "+evt.target.AnyName.value)
        resetFirstName();
        resetLastName();
    }  
    return (
        <div className="logout_cardboard">
            <br />
            <br />
            <span style={{ fontSize: "2.5em" }}>Logout</span>
            <br />
            (Playground)
            <br />
            <br />
            <div>
 
            <form onSubmit={handleSubmit}>
            <label>
                First Name:
                {/* <input type="text" onChange={AnyName.onChange} value={AnyName.value}/> */}
                <input type="text" {...bindFirstName}/>
            </label>
            <br />
            <label>
                Last Name:
                <input type="text" {...bindLastName} />
            </label>
            <br />
            <input type="submit" value="Submit" />

            <br />
            <br />
            <input type="checkbox" name="chk0" onChange={()=>toggleOneChkbox(0)} checked={chkbox_state[0]}/>CHK 1
            <br />
            <br />
            <input type="checkbox" name="chk1" onChange={()=>toggleOneChkbox(1)} checked={chkbox_state[1]}/>CHK 2

            </form>

            </div>
        </div>
    );
}
