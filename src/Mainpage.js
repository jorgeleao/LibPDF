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

  function clearCheckboxes(){
    let newChkboxState = new Array(11).fill(false,0,11)
    setChkboxState(newChkboxState)
  }
  function serialChange(){
    let newChkboxState = [...chkboxState]  // to ensure it is a deep copy!
    newChkboxState[0] = !chkboxState[0]
    setChkboxState(newChkboxState)
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

  const [fields, setFields] = useState({serial:"",title:"",author:"",publisher:"",from:"",to:"",keywords:""})

  function handleChangeReducer(field,value){
      let updatedField = {}
      switch(field){
        case 'serial':{ updatedField = {serial:value}; break;}  
        case 'title':{ updatedField = {title:value}; break;}  
        case 'author':{ updatedField = {author:value}; break;}  
        case 'publisher':{ updatedField = {publisher:value}; break;}  
        case 'from':{ updatedField = {from:value}; break;}  
        case 'to':{ updatedField = {to:value}; break;}  
        case 'keywords':{ updatedField = {keywords:value}; break;}  
        default:{}
      }  
      setFields(fields => ({...fields,...updatedField}))
  }
  const chkboxNames = [
    'serial',
    'titleAND',
    'titleOR',
    'authorAND',
    'authorOR',
    'publisherAND',
    'publisherOR',
    'dateAND',
    'dateOR',
    'keywordsAND',
    'keywordsOR'
  ]

  const [currPage,setCurrPage] = useState('')
  const [results,setResults] = useState('')

  function handleSearchButtons(button){
    switch(button){
      case 'prevSerial':{ console.log("=== PREVIOUS SERIAL: "+fields.serial);
                          if(fields.serial>Number(1)) setFields(fields => ({...fields,...fields.serial--}))
                          break;}
      case 'nextSerial':{ console.log("=== NEXT SERIAL: "+fields.serial);
                          setFields(fields => ({...fields,...fields.serial++}))
                          break;}
      case 'prevPage'  :{ console.log("=== PREVIOUS PAGE ===");
                          if(currPage>Number(1)) setCurrPage(currPage => currPage-Number(1))
                          break;}
      case 'nextPage'  :{ console.log("=== NEXT PAGE ===");
                          setCurrPage(currPage => currPage+Number(1))
                          break;}
      case 'search'    :{ let selectedChkboxes = ''
                          if(chkboxState[0])selectedChkboxes='serial'
                          else for(let i=1;i<11;i++){
                            if (chkboxState[i]) selectedChkboxes += chkboxNames[i] + '\n'
                          }
                          setFields({serial:Number(1),title:"",author:"",publisher:"",from:"",to:"",keywords:""});
                          setResults(
                            '=== Fields:\n'+
                            fields.serial+'\n'+
                            fields.title+'\n'+
                            fields.author+'\n'+
                            fields.publisher+'\n'+
                            fields.from+'\n'+
                            fields.to+'\n'+
                            fields.keywords+'\n'+
                            '=== Checkboxes:\n'+
                            selectedChkboxes
                          )
                          setCurrPage(Number(1));
                          setNroRecords(33)
                          break; }
      case 'clear'     :{ console.log("=== CLEAR ===");
                          clearCheckboxes()
                          setResults('')
                          let updatedField = {serial:"",title:"",author:"",publisher:"",from:"",to:"",keywords:""};
                          setFields(updatedField);
                          setCurrPage("");
                          setNroRecords(0)
                          break;}
      default:{}
    }
  }

  function handleChangeCurrPage(e){
    console.log("=== Curr page changed: "+e.target.value)
    setCurrPage(Number(e.target.value))
  }

  const [nroRecords,setNroRecords]= useState(0)

  return (
    <div> 
      <div className="mainpage_cardboard"></div>
      <SearchModeContext.Provider value={{chkboxState, serialChange, checkboxANDChange, checkboxORChange}}>
      <BibliformContext.Provider value={{fields, handleChangeReducer}}>
        <BrowserRouter>
          <Menubar />
          <Routes>
            <Route exact path="/" element={<Search 
                                              handleSearchButtons={handleSearchButtons} 
                                              currPage={currPage} 
                                              handleChangeCurrPage={handleChangeCurrPage}
                                              nroRecords={nroRecords}
                                              textareavalue={results}/>}>
            </Route>
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

