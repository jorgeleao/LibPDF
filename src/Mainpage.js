import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import { version } from 'react';
import About from './about.js';
import Search from './search.js';
import { SearchModeContext } from './contexts/SearchModeContext.js'
import { BibliformContext } from './contexts/BibliformContext.js'
import Logout from './logout.js';
import Menubar from './menubar.js'
import Cataloging from './cataloging.js';
import './Mainpage.css';
import './i18n.js';


export default function Mainpage() {
  //console.log("=== React version: "+version);
  
  const [chkboxState, setChkboxState] = useState(new Array(11).fill(false,0,11))

  function serialChange(){
    let newChkboxState = [...chkboxState]  // to ensure it is a deep copy!
    newChkboxState[0] = !chkboxState[0]
    setChkboxState(newChkboxState)
    console.log("=== newChkboxState: "+newChkboxState)
    console.log("=== chkboxState: "+chkboxState)
  }
  function checkboxANDChange(and,or){
    let newChkboxState = [...chkboxState]
    if(!newChkboxState[0]){
        newChkboxState[and] = !chkboxState[and] // or document.getElementById('titleAnd').checked
        newChkboxState[or] = false
        setChkboxState(newChkboxState)
    }
  }
  function checkboxORChange(and,or){
      let newChkboxState = [...chkboxState]
      if(!newChkboxState[0]){
          newChkboxState[and] = false
          newChkboxState[or] = !chkboxState[or] // or document.getElementById('titleAnd').checked
          setChkboxState(newChkboxState)
      }
  }
//===========

//let state = {serial:"", title:"", author:"", publisher:"", from:"", to:"", keywords:""}
const [state , setState] = useState({serial:"", title:"", author:"", publisher:"", from:"", to:"", keywords:""})

function handleChangeSerial(serial){
  setState({...serial})
  console.log("=== serial: "+serial)
}
function handleChangeTitle(title){
  setState({...title})
  console.log("=== title: "+title)
}

//===========
  return (
    <div> 
      <div className="mainpage_cardboard"></div>
      <SearchModeContext.Provider value={{chkboxState, serialChange, checkboxANDChange, checkboxORChange}}>
      <BibliformContext.Provider value={{state, handleChangeSerial, handleChangeTitle}}>
        <BrowserRouter>
          <Menubar />
          <Routes>
            <Route exact path="/" element={<Search />}></Route>
            <Route path="/catalog" element={<Cataloging />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/logout" element={<Logout />}></Route>
          </Routes>
        </BrowserRouter>
      </BibliformContext.Provider>  
      </SearchModeContext.Provider>
    </div>
  );
}

