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
                <div class="search-parent">
                    <div></div>
                    <div className="search-two-upper-buttons">
                        <div className="search_but_top">{t('search.previous')}</div>
                        <div className="search_but_top">{t('search.next')}</div>
                    </div>
                    <div></div>

                    <div>{t('search.serial')}</div>
                    <div style={{gridColumn: "2 / 6",}}><input type="text" className="search-intext" /></div>

                    <div>{t('search.title')}</div>
                    <div style={{gridColumn: "2 / 6",}}><input type="text" className="search-intext" /></div>
                    
                    <div>{t('search.author')}</div>
                    <div style={{gridColumn: "2 / 6",}}><input type="text" className="search-intext" /></div>
                    
                    <div>{t('search.vehicle')}</div>
                    <div style={{gridColumn: "2 / 6",}}><input type="text" className="search-intext" /></div>
                    
                    <div>{t('search.pubdate')}</div>
                    <div>{t('search.from')}</div>
                    <div><input type="text" className="search-intextSmall" /></div>
                    <div>{t('search.to')}</div>
                    <div><input type="text" className="search-intextSmall" /></div>

                    <div>{t('search.keywords')}</div>
                    <div style={{gridColumn: "2 / 6",}}><input type="text" className="search-intext" /></div>
                    
                    <div style={{gridColumn:"6",gridRow:"2/8"}}>
                        <SearchMode />
                    </div>
                </div>

                <div className="search-next_previous_buttons">
                    <div className="search-left_button1 search-buttondivSmall"></div>
                    <div className="search-center_button1 search-buttondivSmall">{t('search.currentpage')}</div>
                    <div className="search-right_button1 search-buttondivSmall"></div>

                    <div className="search-left_button2 search-buttondiv">&lt; {t('search.previouspage')}</div>
                    <div className="search-center_button2 search-buttondiv">
                        <input type="text" className="search-currentpageInput" />
                    </div>
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
