import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './logout.css'
//import { useInput } from './hooks/useInput';
import { useForm } from "react-hook-form";
import axios from 'axios'

export default function Logout(props) {
    const { t } = useTranslation();

//    const { value:firstName, bind:bindFirstName, reset:resetFirstName } = useInput('');
//    const { value:lastName, bind:bindLastName, reset:resetLastName } = useInput('');
//     const handleSubmit = (evt) => {
//         evt.preventDefault();
//         alert(`Submitting Name:    ${firstName} ${lastName}`);
// //        console.log("=== "+evt.target.AnyName.value)
//         resetFirstName();
//         resetLastName();
//     }  
/* <form onSubmit={handleSubmit}>
<label>
    First Name:&nbsp;
    <input type="text" onChange={AnyName.onChange} value={AnyName.value}/>
    <input type="text" {...bindFirstName}/>
</label>
<br />
<label>
    Last Name:&nbsp;
    <input type="text" {...bindLastName} />
</label>
<br />
<input type="submit" value="Submit" />
</form> */


    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        axios("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          console.log(response.data[0].name);
        })

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



                <form onSubmit = { handleSubmit(onSubmit) } >
                    <div className="bibliform-twosix"><input  {...register("serial", {required:  false})} name="serial" type="text" className="bibliform-intext" /></div>

                    <div>{t('bibliform.title')}</div>
                    <div className="bibliform-twosix"><input  {...register("title", {required:  false})} name="title" type="text" className="bibliform-intext" /></div>

                    <div>{t('bibliform.author')}</div>
                    <div className="bibliform-twosix"><input  {...register("author", {required:  false})} name="author" type="text" className="bibliform-intext" /></div>

                    <div>{t('bibliform.publisher')}</div>
                    <div className="bibliform-twosix"><input  {...register("publisher", {required:  false})} name="publisher" type="text" className="bibliform-intext" /></div>

                    <input type="submit" />
                </form>
            </div>
        </div>
    );
}
