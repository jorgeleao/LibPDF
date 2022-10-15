import React from 'react';
import { useTranslation } from 'react-i18next';
import './search.css'
import BibliForm from './BibliForm'
import SearchMode from './SearchMode'

export default function Search(props) {
    const { t } = useTranslation();

    return (
        <div className="search_cardboard">
            <br />
            <br />
            <span className="search_pageTitle">{t('appPageTexts.part5')}</span>
            <br />
            <div>
                <div className="search-parent">
                    <div></div>
                    <div className="search-two-upper-buttons">
                        <div className="search_but_top">{t('search.previous')}</div>
                        <div className="search_but_top">{t('search.next')}</div>
                    </div>
                    <div></div>

                    <div className="search-bibliform-grid">
                        <BibliForm />
                    </div>

                    <div className="search-mode-grid">
                        <SearchMode chkboxchange={props.chkboxchange}/>
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
                    <div className="search-right_button3 search-buttondiv">{t('search.clear')}</div>
                </div>

                <div className="search-numberOfResults">
                    <span className="search-forResults">{t('search.results')}</span><br />
                    {t('search.nrorecordsfound')}: <span id="idNroRows">33</span>
                </div>

                <textarea className="search-resultsTextArea" id="search-resultsTextArea">
                </textarea>
            </div>
        </div>
    );
}
