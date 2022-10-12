import React from 'react';
import { useTranslation } from 'react-i18next';
import './logout.css'
import { useInput } from './hooks/useInput';

export default function Logout(props) {
    const { t } = useTranslation();

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
            </form>

            </div>
        </div>
    );
}
