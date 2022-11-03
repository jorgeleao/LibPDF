import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios'
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



//=========== Search ==========
  const [chkboxState, setChkboxState] = useState(new Array(11).fill(false,0,11))
  const [fields, setFields] = useState({serial:0,title:"",author:"",publisher:"",from:"",to:"",keywords:""})
  const [currPage,setCurrPage] = useState('')
  const [results,setResults] = useState('')
  const [nroRecords,setNroRecords] = useState(0)

  function clearCheckboxes(){
    let newChkboxState = new Array(11).fill(false,0,11)
    setChkboxState(newChkboxState)
  }
  // Checkboxes are numbered from 0 to 10 - 0:serial, 1:titleAND, 2:titleOR, ans so on...
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

  function handleChangeReducer(field,value){
      let updatedField = {}
      switch(field){
        case 'serial':{ updatedField = {serial:parseInt(value)}; break;}  
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
    'datesAND',
    'datesOR',
    'keywordsAND',
    'keywordsOR'
  ]

  function handleSearchButtons(button){
    switch(button){
      case 'prevSerial':{ console.log("=== PREVIOUS SERIAL: "+fields.serial);
                          if(Number(fields.serial)>1){
                            let newChkboxState = [...chkboxState]  // to ensure it is a deep copy!
                            newChkboxState[0] = true
                            setChkboxState(newChkboxState)
                            searchById(fields.serial-1)?
                            setFields(prevFields => ({...fields,...prevFields.serial--})):
                            console.log("=== Didn't find the resource ===")
                          }   
                          break;}
      case 'nextSerial':{ console.log("=== NEXT SERIAL: "+fields.serial);
                          if(Number(fields.serial)>=0){
                            let newChkboxState = [...chkboxState]  // to ensure it is a deep copy!
                            newChkboxState[0] = true
                            setChkboxState(newChkboxState)
                            searchById(fields.serial+1)?
                            setFields(prevFields => ({...fields,...prevFields.serial++})):
                            console.log("=== Didn't find the resource ===")
                          }   
                          break;}
      case 'prevPage'  :{ console.log("=== PREVIOUS PAGE ===");
                          if(Number(currPage)>1) setCurrPage(currPage => Number(currPage)-Number(1))
                          break;}
      case 'nextPage'  :{ console.log("=== NEXT PAGE ===");
                          setCurrPage(currPage => Number(currPage)+Number(1))
                          break;}
      case 'search'    :{ console.log("=== SEARCH ===");
                          let selectedChkboxes = ''
                          if(chkboxState[0])selectedChkboxes='serial'
                          else for(let i=1;i<11;i++){
                            if (chkboxState[i]) selectedChkboxes += chkboxNames[i] + ','//'\n'
                          }
                          advancedSearch(selectedChkboxes,fields)
                          setCurrPage(Number(1));
                          setNroRecords(33)
                          break; }
      case 'clear'     :{ console.log("=== CLEAR ===");
                          clearCheckboxes()
                          setResults('')
                          let updatedField = {serial:0,title:"",author:"",publisher:"",from:"",to:"",keywords:""};
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

  function searchById(id){
    let success = null
    axios
    .get(`http://localhost:3001/searchbyid/${id}`)
    .then(response => {
      console.log("=== searchById: "+id+" responded! ===")
      let obj = response.data
      let updatedField = {  serial:id,
                            title:obj.title,
                            author:obj.author,
                            publisher:obj.publisher,
                            from:obj.from,
                            to:obj.to,
                            keywords:obj.keywords
                          };
      setFields(updatedField);
      success = true
    })
    .catch(error => {
      if (error.response) {
          console.log(error.status)
      } else {
          console.log(error.message)
      }
      success = false
    })
    return success
}
function advancedSearch(selBoxes,flds){
  let success = null
  axios
  .post("http://localhost:3001/advsearch",{id:selBoxes})
  .then(response => {
    console.log("=== advsearch: responded! ===")
    let obj = response.data
    let buff = ""
    obj.forEach((ob => (buff =  buff + 
                                ob.id + ". \""+
                                ob.title + "\" - "+ 
                                ob.author + ", "+ 
                                ob.publisher + ", published:"+
                                ob.from + ". "+ 
                                ob.keywords + "\n\n")))
    setResults(buff)
    success = true
  })
  .catch(error => {
    if (error.response) {
        console.log(error.status)
    } else {
        console.log(error.message)
    }
    success = false
  })
  return success
}


//=========== Cataloging ==========

const [catalogFields, setCatalogFields] = useState({serial:"serial",title:"title",author:"author",publisher:"publisher",pubdate:"2022",keywords:"#React #Web",originalFilename:"BigFile.bin"})
const [newComment,setNewComment] = useState("New comment ...")
const [previousComment,setPreviousComment] = useState("Previous comments ...")

function handleCatalogButtons(button){
  switch(button){
    case 'prevSerial':{ console.log("=== PREVIOUS SERIAL: ");
                        break;}
    case 'nextSerial':{ console.log("=== NEXT SERIAL: ");
                        break;}
    case 'upload':{ console.log("=== UPLOAD: ");
                        break;}
    case 'edit':{ console.log("=== EDIT: ");
                    break;}
    case 'saveascurrent':{ console.log("=== saveascurrent: ");
                    break;}
    case 'saveasnew':{ console.log("=== saveasnew: ");
                    break;}
    case 'download':{ console.log("=== download: ");
                    break;}
    case 'clear':{ console.log("=== clear: ");
                    let updatedCatalogFields = {serial:"",title:"",author:"",publisher:"",pubdate:"",keywords:"",originalFilename:""};
                    setCatalogFields(updatedCatalogFields);
                    setNewComment(()=>(""))
                    setPreviousComment(()=>(""))
                    break;}
    case 'delete':{ console.log("=== delete: ");
                    break;}
    default:{}
  }
}

function catalogHandleChangeReducer(field,value){
  console.log("=== value: "+value)
  let updatedField = {}
  switch(field){
    case 'serial':{ updatedField = {serial:value}; console.log("=== SERIAL ===");break;}  
    case 'title':{ updatedField = {title:value}; break;}  
    case 'author':{ updatedField = {author:value}; break;}  
    case 'publisher':{ updatedField = {publisher:value}; break;}  
    case 'pubdate':{ updatedField = {pubdate:value}; break;}  
    case 'keywords':{ updatedField = {keywords:value}; break;}  
    case 'originalFilename':{ updatedField = {originalFilename:value}; break;}  
    default:{}
  }  
  setCatalogFields(catalogFields => ({...catalogFields,...updatedField}))
}

function catalogHandleNewComment(e){
  setNewComment(()=>(e.target.value))    
}

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
            <Route path="/catalog" element={<Cataloging
                                              handleCatalogButtons={handleCatalogButtons}
                                              catalogHandleChangeReducer={catalogHandleChangeReducer}
                                              catalogFields={catalogFields}
                                              newComment={newComment}
                                              previousComment={previousComment}
                                              catalogHandleNewComment={catalogHandleNewComment}
                                              />}>
            </Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/logout" element={<Logout />}></Route>
          </Routes>
        </BrowserRouter>
      </BibliformContext.Provider>
      </SearchModeContext.Provider>
    </div>
  );
}

