import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import { version } from 'react';
import About from './about.js';
import Search from './search.js';
import { SearchModeContext } from './contexts/SearchModeContext.js'
//import { BibliformContext } from './contexts/BibliformContext.js'
import Logout from './logout.js';
import Menubar from './menubar.js'
import Cataloging from './cataloging.js';
import './Mainpage.css';
import './i18n.js';
import { advancedSearch } from './api/advancedSearch.js';
import { searchById } from './api/searchById.js';
import { savenew } from './api/savenew.js';
import { savecurrent } from './api/savecurrent.js';


export default function Mainpage() {
//console.log("=== React version: "+version);



//=========== Search ==========
  const [chkboxState, setChkboxState] = useState(new Array(11).fill(false,0,11))
  const [fields, setFields] = useState({serial:"",title:"",author:"",publisher:"",from:"",to:"",keywords:""})
  const [currPage,setCurrPage] = useState('')
  const [results,setResults] = useState([])
  const [nroRecords,setNroRecords] = useState(0)
  const [lastSearch, setLastSearch] = useState([])
 // const [resultsContents,setResultsContents] = useState([])
  const [loggerMessage, setLoggerMessage] = useState(['',true])

  function showMessage(message,infolevel){
    let msg = [message, infolevel]
    setLoggerMessage(msg)
  }

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
  // const chkboxNames = [
  //   'serial',
  //   'titleAND',
  //   'titleOR',
  //   'authorAND',
  //   'authorOR',
  //   'publisherAND',
  //   'publisherOR',
  //   'datesAND',
  //   'datesOR',
  //   'keywordsAND',
  //   'keywordsOR'
  // ]

  async function advSearchUtil(page2){
    let page = page2
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
      setLastSearch(searchResult)
      let buff = []
      searchResult.forEach(result=>{
        buff.push(
          result.id+". \""+
          result.title+"\", "+
          result.author+". Pub: "+
          result.publisher+", "+
          result.pubdate+". Keywords: "+
          result.keywords+". Grade: 1.")
      })
      setResults(buff)
      setLoggerMessage(["The results for the current page are...",true]);
    }else{
      setResults(["=== Didn't find any ..."])
      setLoggerMessage(["Didn't find another page...",false]);
    }

    setCurrPage(page);
    setNroRecords(10)
  }

  async function searchByIdNextUtil(id){
    if(Number(fields.serial)>=0){
      let newChkboxState = [...chkboxState]  // to ensure it is a deep copy!
      newChkboxState[0] = true
      setChkboxState(newChkboxState)
      let result = await searchById(Number(fields.serial)+1)

      if(result.success){
        let updatedField = {...fields}
        updatedField.serial = result.id;
        setFields(updatedField)
        let buff = []
        buff.push(
          result.id+". \""+
          result.title+"\", "+
          result.author+". Pub: "+
          result.publisher+", "+
          result.pubdate+". Keywords: "+
          result.keywords+". Grade: 1."
        )
        setResults(buff)
        setLoggerMessage(["And the next serial is ...",true]);
      }else{  
        setLoggerMessage(["Could not find next...",false])
      }
    }else{
      setLoggerMessage(["Could not find next...",false])
    }   
  }

  async function searchByIdPreviousUtil(id){
    console.log("=== Previous ===")
    if(Number(fields.serial)>1){
      let newChkboxState = [...chkboxState]  // to ensure it is a deep copy!
      newChkboxState[0] = true
      setChkboxState(newChkboxState)
      let result = await searchById(Number(fields.serial)-1)
      if(result.success){
        let updatedField = {
          serial:result.id,
          title:fields.title,
          author:fields.author,
          publisher:fields.publisher,
          from:fields.pubdate,
          to:fields.to,
          keywords:fields.keywords
        }
        setFields(updatedField)
        let buff = []
        buff.push(
          result.id+". \""+
          result.title+"\", "+
          result.author+". Pub: "+
          result.publisher+", "+
          result.pubdate+". Keywords: "+
          result.keywords+". Grade: 1.")
        setResults(buff)
        setLoggerMessage(["And the previous is...",true]);
      }else{  
        setLoggerMessage(["Could not find previous...",false])
      }
    }else{
      setLoggerMessage(["Could not find previous...Could not find previous...",false])
    }   
  }

  function handleSearchButtons(button){
    switch(button){
      case 'prevSerial':  { searchByIdPreviousUtil(fields.serial)   
                            break;}

      case 'nextSerial':  { searchByIdNextUtil(fields.serial)
                            break;}

      case 'prevPage'  :  { if(Number(currPage)>1){
                              advSearchUtil(currPage-1)
                            }
                            break;}

      case 'nextPage'  :  { if(Number(currPage)>0){
                              advSearchUtil(currPage+1)
                            }
                            break;}

      case 'search'    :  { advSearchUtil(1)
                            break; }

      case 'clear'     :  { console.log("=== CLEAR ===");
                            clearCheckboxes()
                            setResults([])
                            let updatedField = {serial:"",title:"",author:"",publisher:"",from:"",to:"",keywords:""};
                            setFields(updatedField);
                            setCurrPage("");
                            setNroRecords(0)
                            setLoggerMessage([" ",true])
                            break;}

      default          :  {}
    }
  }

  function handleChangeCurrPage(e){
    //console.log("=== Curr page changed: "+e.target.value)
    setCurrPage(Number(e.target.value))
  }



//=========== Cataloging ==========

const [catalogFields, setCatalogFields] = useState({serial:"",title:"",author:"",publisher:"",pubdate:"",keywords:"",originalFilename:""})
const [newComment,setNewComment] = useState("New comment ...")
const [previousComment,setPreviousComment] = useState("Previous comments ...")
const [isEditing, setIsEditing] = useState(false)
const [inputTypeFileValue, setInputTypeFileValue] = useState('')

function handleInputTypeFile(e){
    setInputTypeFileValue(e.target.value)
}




async function catalogNextByIdUtil(id){
  if(Number(catalogFields.serial)>=0){

    let result = await searchById(Number(catalogFields.serial)+1)
    if(result.success){
      let updatedField = {
        serial:result.id,
        title:result.title,
        author:result.author,
        publisher:result.publisher,
        pubdate:result.pubdate,
        keywords:result.keywords,
        originalFilename:result.originalfn
      }
      setCatalogFields(updatedField)
      setLoggerMessage(["And the next serial is ...",true]);
    }else{  
      setLoggerMessage(["Could not find next...",false])
    }
  }else{
    setLoggerMessage(["Could not find next...",false])
  }   
}

async function catalogPreviousByIdUtil(id){
  console.log("=== Previous ===")
  if(Number(catalogFields.serial)>1){

    let result = await searchById(Number(catalogFields.serial)-1)
    if(result.success){
      let updatedField = {
        serial:result.id,
        title:result.title,
        author:result.author,
        publisher:result.publisher,
        pubdate:result.pubdate,
        keywords:result.keywords,
        originalFilename:result.originalfn
      }
      setCatalogFields(updatedField)
      setLoggerMessage(["And the previous serial is ...",true]);
    }else{  
      setLoggerMessage(["Could not find previous...",false])
    }
  }else{
    setLoggerMessage(["Could not find previous...",false])
  }   

}

function handleCatalogButtons(button){
  switch(button){
    case 'prevSerial':    { catalogPreviousByIdUtil(catalogFields.serial);
                            setIsEditing(false)
                            break;}
    case 'nextSerial':    { catalogNextByIdUtil(catalogFields.serial);
                            setIsEditing(false)
                            break;}
    case 'upload':        { let updatedField = {originalFilename : inputTypeFileValue.split('\\').pop().split('/').pop()}    
                            //.replace(/^.*[\\\/]/, '')}  // to extract just the filename from a full path...
                            // https://stackoverflow.com/questions/423376/how-to-get-the-file-name-from-a-full-path-using-javascript

                            // do the real upload here...
                            setCatalogFields(catalogFields => ({...catalogFields,...updatedField}))
                            break;}
    case 'edit':          { if(isEditing){
                              setIsEditing(false);
                              setLoggerMessage(["",true])
                            }else{
                              setIsEditing(true);
                              setLoggerMessage(["Atention: is editing... ",false])
                            }
                            break;}
    case 'saveascurrent': { console.log("=== saveascurrent: ");
                            savecurrent({title:"Running more..."},3333)
                            break;}
    case 'saveasnew':     { console.log("=== saveasnew: ");
                            savenew({title:"Running more..."})
                            break;}
    case 'download':      { console.log("=== download: ");
                            break;}
    case 'clear':         { let updatedCatalogFields = {serial:"",title:"",author:"",publisher:"",pubdate:"",keywords:"",originalFilename:""};
                            setCatalogFields(updatedCatalogFields);
                            setNewComment(()=>(""))
                            setPreviousComment(()=>(""))
                            setIsEditing(false)
                            break;}
    case 'delete':        { console.log("=== delete: ");
                            break;}
    default:              {}
  }
}

function catalogHandleChangeReducer(field,value){
  //console.log("=== value: "+value)
  let updatedField = {}
  switch(field){
    case 'serial':{ updatedField = {serial:value}; break;}  
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
{/*      <BibliformContext.Provider value={{fields, handleChangeReducer}}> */}
        <BrowserRouter>
          <Menubar />
          <Routes>
            <Route exact path="/" element={<Search
                                              loggerMessage={loggerMessage} 
                                              handleChangeReducer={handleChangeReducer}
                                              handleSearchButtons={handleSearchButtons} 
                                              fields={fields}
                                              catalogFields={catalogFields}
                                              currPage={currPage} 
                                              handleChangeCurrPage={handleChangeCurrPage}
                                              lastSearch={lastSearch}
                                              nroRecords={nroRecords}
                                              results={results}/>}>
            </Route>
            <Route path="/catalog" element={<Cataloging
                                              loggerMessage={loggerMessage} 
                                              handleCatalogButtons={handleCatalogButtons}
                                              catalogHandleChangeReducer={catalogHandleChangeReducer}
                                              catalogFields={catalogFields}
                                              inputTypeFileValue={inputTypeFileValue}
                                              setInputTypeFileValue={setInputTypeFileValue}
                                              handleInputTypeFile={handleInputTypeFile}
                                              newComment={newComment}
                                              previousComment={previousComment}
                                              catalogHandleNewComment={catalogHandleNewComment}
                                              isEditing={isEditing}
                                              setIsEditing={setIsEditing}
                                              />}>
            </Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/logout" element={<Logout />}></Route>
          </Routes>
        </BrowserRouter>
{/*      </BibliformContext.Provider>  */}
      </SearchModeContext.Provider>
    </div>
  );
}

