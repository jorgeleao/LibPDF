import React, { useContext } from 'react'
import { BibliformContext } from './contexts/BibliformContext.js'
import { useTranslation } from 'react-i18next';
import './search.css'
import './BibliForm.css'
import SearchMode from './SearchMode'
import SearchResults from './searchResults'
import { useNavigate } from "react-router-dom";
import './common.css';


export default function Search(props) {
    const { t } = useTranslation();
    const {fields, handleChangeReducer} = useContext(BibliformContext)

    let navigate = useNavigate();
    function elementClickHandle(){
        console.log("=== elementClickHandle")
        navigate("/catalog")
    }
//     const clickGoto = (e) => {
//         props.setCataloging_Input_ID(props.search_input_ID)
//         props.setCataloging_Input_Name(props.search_input_Name)
//         props.setCataloging_Input_Phone(props.search_input_Phone)
//         navigate("/catalog")
// //     <Link to="/catalog" style={{color:"black"}}><strong>GO TO CATALOGING - &nbsp;&nbsp;</strong></Link>
//     }

    let contents = props.results.map((el,i) => 
        <div    key={el.id} onClick={elementClickHandle} className="searchElement" 
                            style={i%2?
                                {backgroundColor:"white",borderBottom:"1px solid #5b83b5"}:
                                {backgroundColor:"#e3f9ff",borderBottom:"1px solid #5b83b5"}}>
                {el}
        </div>
    )

    return (
        <div className="common_cardboard">
            <br />
            <br />
            <br/>
            <div className="common_divcontainer">
                <div className="common_pageTitle"><span>{t('appPageTexts.part5')}</span></div>
                <div className="common_message"></div>
                <div></div>

                <div></div>
                <div className="common-two-upper-buttons">
                    <div className="common_but_top" onClick={()=>props.handleSearchButtons('prevSerial')}>{t('search.previous')}</div>
                    <div className="common_but_top" onClick={()=>props.handleSearchButtons('nextSerial')}>{t('search.next')}</div>
                </div>
                <div></div>

                <div>{t('common.serial')}</div>
                <div className="common-twoeight"><input name="serial" type="text" className="common-intext" value={fields.serial} 
                    onChange={e=>handleChangeReducer('serial', e.target.value)}/></div>

                <div>{t('common.title')}</div>
                <div className="common-twoeight"><input name="title" type="text" className="common-intext" value={fields.title} 
                    onChange={e=>handleChangeReducer('title', e.target.value)} autoComplete="true"/></div>
                
                <div>{t('common.author')}</div>
                <div className="common-twoeight"><input name="author" type="text" className="common-intext" value={fields.author} 
                    onChange={e=>handleChangeReducer('author', e.target.value)}/></div>
                
                <div>{t('common.publisher')}</div>
                <div className="common-twoeight"><input name="publisher" type="text" className="common-intext" value={fields.publisher} 
                    onChange={e=>handleChangeReducer('publisher', e.target.value)}/></div>
                
                <div>{t('common.pubdate')}</div>
                <div>{t('common.from')}</div>
                <div className="search-threefive"><input name="from" type="text" className="common-intextSmall" value={fields.from} 
                    onChange={e=>handleChangeReducer('from', e.target.value)}/></div>

                <div>{t('common.to')}</div>
                <div className="search-sixeight"><input name="to" type="text" className="common-intextSmall" value={fields.to} 
                    onChange={e=>handleChangeReducer('to', e.target.value)}/></div>

                <div>{t('common.keywords')}</div>
                <div className="common-twoeight"><input name="keywords" type="text" className="common-intext" value={fields.keywords} 
                    onChange={e=>handleChangeReducer('keywords', e.target.value)}/></div>

                <div className="common-mode-grid">
                    <SearchMode />
                </div>

                <div></div>
                <div className="search-bottompart">
                    <div className="search-next_previous_buttons">
                        <div className="search-left_button1 search-buttondivSmall"></div>
                        <div className="search-center_button1 search-buttondivSmall">{t('search.currentpage')}</div>
                        <div className="search-right_button1 search-buttondivSmall"></div>

                        <div className="search-left_button2 search-buttondiv" onClick={()=>props.handleSearchButtons('prevPage')}>&lt; {t('search.previouspage')}</div>
                        <div className="search-center_button2 search-buttondiv">
                            <input type="text"  className="search-currentpageInput" 
                                                value={props.currPage} 
                                                onChange={e=>props.handleChangeCurrPage(e)}/>
                        </div>
                        <div className="search-right_button2 search-buttondiv" onClick={()=>props.handleSearchButtons('nextPage')}>{t('search.nextpage')} &gt;</div>
                        <div className="search-left_button3 search-buttondiv" onClick={()=>props.handleSearchButtons('search')}>{t('search.search')}</div>
                        <div className="search-center_button3" style={{textAlign:"center"}}>
                        <br /><span className="search-forResults">{t('search.results')}</span><br />
                            {t('search.nrorecordsfound')}: <span id="idNroRecords">{props.nroRecords}</span>
                        </div>  
                        <div className="search-right_button3 search-buttondiv" onClick={()=>props.handleSearchButtons('clear')}>{t('search.clear')}</div>
                    </div>
                </div>
                <div></div>

                <div className="search-resultspart">
                    <SearchResults>
                        {contents}
                    </SearchResults>
                </div>
            </div>
        </div>
    );
}
