import React from 'react';
import { useTranslation } from 'react-i18next';
import './search.css'
import SearchMode from './SearchMode'

export default function Search(props) {
    const { t } = useTranslation();

    return (
        <div onClick={() => props.clickHandler()} className="search_cardboard">
            <br />
            <br />
            <span style={{ fontSize: "2.5em" }}>{t('appPageTexts.part5')}</span>
            <br />
            <div>

            <div class="search-parent" style={{width:"888px",marginLeft:"auto",marginRight:"auto"}}>
                    <div style={{border:"0px solid black"}}></div>
                    <div style={{border:"0px solid black",gridColumn: "2 / 6",textAlign:"right", 
                                    paddingLeft:"7px",display:"flex",justifyContent: "space-between"}}>
                        <div className="search_but_top">{t('search.previous')}</div>
                        <div className="search_but_top">{t('search.next')}</div>
                    </div>
                    <div style={{border:"0px solid black"}}></div>

                    <div style={{border:"0px solid black",textAlign:"right"}}>{t('search.serial')}</div>
                    <div style={{border:"0px solid black",gridColumn: "2 / 6",textAlign:"right"}}><input type="text" className="search-intext" /></div>

                    <div style={{border:"0px solid black",textAlign:"right"}}>{t('search.title')}</div>
                    <div style={{border:"0px solid black",gridColumn: "2 / 6",textAlign:"right"}}><input type="text" className="search-intext" /></div>
                    
                    <div style={{border:"0px solid black",textAlign:"right"}}>{t('search.author')}</div>
                    <div style={{border:"0px solid black",gridColumn: "2 / 6",textAlign:"right"}}><input type="text" className="search-intext" /></div>
                    
                    <div style={{border:"0px solid black",textAlign:"right"}}>{t('search.vehicle')}</div>
                    <div style={{border:"0px solid black",gridColumn: "2 / 6",textAlign:"right"}}><input type="text" className="search-intext" /></div>
                    
                    <div style={{border:"0px solid black",textAlign:"right"}}>{t('search.pubdate')}</div>
                    <div style={{border:"0px solid black",textAlign:"right"}}>{t('search.from')}</div>
                    <div style={{border:"0px solid black",textAlign:"right"}}><input type="text" className="search-intextSmall" /></div>
                    <div style={{border:"0px solid black",textAlign:"right"}}>{t('search.to')}</div>
                    <div style={{border:"0px solid black",textAlign:"right"}}><input type="text" className="search-intextSmall" /></div>

                    <div style={{border:"0px solid black",textAlign:"right"}}>{t('search.keywords')}</div>
                    <div style={{border:"0px solid black",gridColumn: "2 / 6",textAlign:"right"}}><input type="text" className="search-intext" /></div>
                    
                    <div style={{border:"0px solid black",gridColumn:"6",gridRow:"2/8"}}>
                        <SearchMode />
                    </div>
                </div>


                <div className="search-next_previous_buttons">
                    <div className="search-left_button1 search-buttondivSmall" style={{ backgroundColor: "rgb(243, 245, 243)", border: "none" }}></div>
                    <div className="search-center_button1 search-buttondivSmall" style={{ backgroundColor: "rgb(243, 245, 243)", border: "none", color: "black" }}>{t('search.currentpage')}</div>
                    <div className="search-right_button1 search-buttondivSmall" style={{ backgroundColor: "rgb(243, 245, 243)", border: "none" }}></div>
                    <div className="search-left_button2 search-buttondiv">&lt; {t('search.previouspage')}</div>
                    <div className="search-center_button2 search-buttondiv" style={{ backgroundColor: "white", color: "black" }}><input type="text" className="search-paginaAtualInput" /></div>
                    <div className="search-right_button2 search-buttondiv">{t('search.nextpage')} &gt;</div>
                    <div className="search-left_button3 search-buttondiv">{t('search.search')}</div>
                    <div className="search-center_button3 search-buttondiv">{t('search.cataloging')}</div>
                    <div className="search-right_button3 search-buttondiv" onClick="">{t('search.clear')}</div>
                </div>

                <div className="search-numberOfResults">
                    <span style={{fontSize:"1.0em",lineHeight:"18px",fontWeight:"bold"}}>{t('search.results')}</span><br />
                    {t('search.nrorecordsfound')}: <span id="idNroRows">33</span>
                </div>

                <textarea className="search-resultsTextArea">

                </textarea>
            </div>
        </div>
    );
}
