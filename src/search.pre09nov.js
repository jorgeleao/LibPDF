import React from 'react';
import { useTranslation } from 'react-i18next';
import './search.css'
import BibliForm from './BibliForm'
import SearchMode from './SearchMode'
import SearchResults from './searchResults'
import { useNavigate } from "react-router-dom";

export default function Search(props) {
    const { t } = useTranslation();

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
        <div className="search_cardboard">
            <br />
            <br />
            <span className="search_pageTitle">{t('appPageTexts.part5')}</span>
            <br />
                <div className="search-parent">
                    <div></div>
                    <div className="search-two-upper-buttons">
                        <div className="search_but_top" onClick={()=>props.handleSearchButtons('prevSerial')}>{t('search.previous')}</div>
                        <div className="search_but_top" onClick={()=>props.handleSearchButtons('nextSerial')}>{t('search.next')}</div>
                    </div>
                    <div></div>

                    <div className="search-bibliform-grid">
                        <BibliForm />
                    </div>

                    <div className="search-mode-grid">
                        <SearchMode />
                    </div>
                </div>

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
                        <span className="search-forResults">{t('search.results')}</span><br />
                        {t('search.nrorecordsfound')}: <span id="idNroRecords">{props.nroRecords}</span>
                    </div>  
                    <div className="search-right_button3 search-buttondiv" onClick={()=>props.handleSearchButtons('clear')}>{t('search.clear')}</div>
                </div>
                <br/>
                <br/>
                <SearchResults>
                    {contents}
                </SearchResults>
        </div>
    );
}
