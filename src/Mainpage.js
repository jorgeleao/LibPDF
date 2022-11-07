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
import { advancedSearch } from './api/advancedSearch.js';
import { searchById } from './api/searchById.js';


export default function Mainpage() {
//console.log("=== React version: "+version);



//=========== Search ==========
  const [chkboxState, setChkboxState] = useState(new Array(11).fill(false,0,11))
  const [fields, setFields] = useState({serial:0,title:"",author:"",publisher:"",from:"",to:"",keywords:""})
  const [currPage,setCurrPage] = useState('')
  const [results,setResults] = useState([])
  const [nroRecords,setNroRecords] = useState(0)
 // const [resulstContents,setResultsContents] = useState([])

  function clearCheckboxes(){
    let newChkboxState = new Array(11).fill(false,0,11)
    setChkboxState(newChkboxState)
  }
  // Checkboxes are numbered from 0 to 10 - 0:serial, 1:titleAND, 2:titleOR, and so on...
  function serialChange(){
    let newChkboxState = [...chkboxState]  // to ensure it is a deep copy!
    newChkboxState[0] = !chkboxState[0]    // Toggle the serial checkbox
    setChkboxState(newChkboxState)
  }
  function checkboxANDChange(and,or){
    let newChkboxState = [...chkboxState]       // Get a deep copy
    if(!newChkboxState[0]){                     // If serial is not checked
        newChkboxState[and] = !chkboxState[and] // Toggle a given AND checkbox
        newChkboxState[or] = false              // Corresponding OR must be uncheckd, no matter what
        setChkboxState(newChkboxState)          // Set the state...
    }
  }
  function checkboxORChange(and,or){
      let newChkboxState = [...chkboxState]
      if(!newChkboxState[0]){
          newChkboxState[and] = false
          newChkboxState[or] = !chkboxState[or] 
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

  async function advSearchUtil(){
    let page = 1
    // let selectedChkboxes = ''
    // if(chkboxState[0])selectedChkboxes='serial'
    // else for(let i=1;i<11;i++){
    //   if (chkboxState[i]) selectedChkboxes += chkboxNames[i] + ','//'\n'
    // }
    let queryparam = {params:{
                              tm:"or",title:"Running again",
                              am:"or",author:"Dr. Joh Doolittle",
                              pm:"or",publisher:"McGraw-Hill Inc.",
                              fdm:"or",from:"2020-01-01",
                              tdm:"or",to:"2022-11-05",
                              km:"or",keywords:"#REACT"
                            }}
    let searchResult = await advancedSearch(queryparam,page)
    if(searchResult[0].success){
      let buff = []
      searchResult.forEach(res=>{
        buff.push(
                res.id+". \""+
                res.title+"\", "+
                res.author+". "+
                res.publisher+", "+
                res.pubdate+". Keywords: "+
                res.keywords+". Grade: 1.")
      })
      buff.forEach((el)=>console.log(el))
      setResults(buff)
    }else{
      setResults(["=== Didn't find any ..."])
    }

    setCurrPage(Number(1));
    setNroRecords(33)
  }

  async function searchByIdNextUtil(id){
    if(Number(fields.serial)>=0){
      let newChkboxState = [...chkboxState]  // to ensure it is a deep copy!
      newChkboxState[0] = true
      setChkboxState(newChkboxState)
      let result = await searchById(Number(fields.serial)+1)
      let updatedField = {
                    serial:result.id,
                    title:result.title,
                    author:result.author,
                    publisher:result.publisher,
                    from:result.pubdate,
                    to:'',
                    keywords:result.keywords};
      result.success?
        setFields(updatedField):
        console.log("=== Didn't find the resource ===")
    }   
  }
  async function searchByIdPreviousUtil(id){
    if(Number(fields.serial)>1){
      let newChkboxState = [...chkboxState]  // to ensure it is a deep copy!
      newChkboxState[0] = true
      setChkboxState(newChkboxState)
      let result = await searchById(Number(fields.serial)-1)
      let updatedField = {
                    serial:result.id,
                    title:result.title,
                    author:result.author,
                    publisher:result.publisher,
                    from:result.pubdate,
                    to:'',
                    keywords:result.keywords};
      result.success?
      setFields(updatedField):
      console.log("=== Didn't find the resource ===")
    }   
  }

  function handleSearchButtons(button){
    switch(button){
      case 'prevSerial':  { searchByIdPreviousUtil(fields.serial)   
                            break;}

      case 'nextSerial':  { searchByIdNextUtil(fields.serial)
                            break;}

      case 'prevPage'  :  { console.log("=== PREVIOUS PAGE ===");
                            if(Number(currPage)>1) setCurrPage(currPage => Number(currPage)-Number(1))
                            break;}

      case 'nextPage'  :  { console.log("=== NEXT PAGE ===");
                            setCurrPage(currPage => Number(currPage)+Number(1))
                            break;}

      case 'search'    :  { advSearchUtil()
                            break; }

      case 'clear'     :  { console.log("=== CLEAR ===");
                            clearCheckboxes()
                            setResults([])
                            let updatedField = {serial:0,title:"",author:"",publisher:"",from:"",to:"",keywords:""};
                            setFields(updatedField);
                            setCurrPage("");
                            setNroRecords(0)
                            break;}

      default          :  {}
    }
  }

  function handleChangeCurrPage(e){
    console.log("=== Curr page changed: "+e.target.value)
    setCurrPage(Number(e.target.value))
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
                                              results={results}/>}>
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

