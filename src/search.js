import React from 'react';
import { useTranslation } from 'react-i18next';
import './search.css'

export default function Search(props) {
    const { t } = useTranslation();

    return (
        <div onClick={() => props.clickHandler()} className="search_cardboard">
            <br />
            <br />
            <span style={{ fontSize: "2.5em" }}>{t('appPageTexts.part5')}</span>
            <br />
            <div>
                <div className="search_grid-container">
                    <div className="search_item1 item"><span>{t('search.serial')}</span></div>
                    <div className="search_item2 item"><input type="text" className="intext" /></div>
                    <div className="search_item4 item" style={{ textAlign: "left" }}><input type="checkbox" className="checkboxstyle" /></div>
                    <div className="search_item4 item"></div>

                    <div className="search_item1 item"><span>{t('search.title')}</span></div>
                    <div className="search_item2 item"><input type="text" className="intext" /></div>
                    <div className="search_item4 item" style={{ textAlign: "left" }}><input type="checkbox" className="checkboxstyle"/> {t('search.or')}</div>
                    <div className="search_item4 item" style={{ textAlign: "left" }}><input type="checkbox" className="checkboxstyle" /> {t('search.and')}</div>

                    <div className="search_item1 item"><span>{t('search.author')}</span></div>
                    <div className="search_item2 item"><input type="text" className="intext" /></div>
                    <div className="search_item4 item" style={{ textAlign: "left" }}><input type="checkbox" className="checkboxstyle" /> {t('search.or')}</div>
                    <div className="search_item4 item" style={{ textAlign: "left" }}><input type="checkbox" className="checkboxstyle" /> {t('search.and')}</div>

                    <div className="search_item1 item"><span>{t('search.vehicle')}</span></div>
                    <div className="search_item2 item"><input type="text" className="intext" /></div>
                    <div className="search_item4 item" style={{ textAlign: "left" }}><input type="checkbox" className="checkboxstyle" /> {t('search.or')}</div>
                    <div className="search_item4 item" style={{ textAlign: "left" }}><input type="checkbox" className="checkboxstyle" /> {t('search.and')}</div>

                    <div className="search_item6 item"><span>{t('search.pubdate')}</span></div>
                    <div className="search_item7 item">{t('search.from')}: <input type="text" className="intext" style={{ width: "215px", marginLeft: "1px" }} /></div>
                    <div className="search_item8 item">{t('search.to')}: <input type="text" className="intext" style={{ width: "215px", marginLeft: "1px" }} /></div>
                    <div className="search_item4 item" style={{ textAlign: "left" }}><input type="checkbox" className="checkboxstyle" /> {t('search.or')}</div>
                    <div className="search_item4 item" style={{ textAlign: "left" }}><input type="checkbox" className="checkboxstyle" /> {t('search.and')}</div>

                    <div className="search_item1 item"><span>{t('search.keywords')}</span></div>
                    <div className="search_item2 item"><input type="text" className="intext" /></div>
                    <div className="search_item4 item" style={{ textAlign: "left" }}><input type="checkbox" className="checkboxstyle" /> {t('search.or')}</div>
                    <div className="search_item4 item" style={{ textAlign: "left" }}><input type="checkbox" className="checkboxstyle" /> {t('search.and')}</div>
                </div>

                <div className="next_previous_buttons">
                    <div className="left_button1 buttondiv" style={{ backgroundColor: "rgb(243, 245, 243)", border: "none" }}></div>
                    <div className="center_button1 buttondiv" style={{ backgroundColor: "rgb(243, 245, 243)", border: "none", color: "black" }}>{t('search.currentpage')}</div>
                    <div className="right_button1 buttondiv" style={{ backgroundColor: "rgb(243, 245, 243)", border: "none" }}></div>
                    <div className="left_button2 buttondiv">&lt; {t('search.previouspage')}</div>
                    <div className="center_button2 buttondiv" style={{ backgroundColor: "white", color: "black" }}><input type="text" className="paginaAtualInput" /></div>
                    <div className="right_button2 buttondiv">{t('search.nextpage')} &gt;</div>
                    <div className="left_button3 buttondiv">{t('search.search')}</div>
                    <div className="center_button3 buttondiv">{t('search.cataloging')}</div>
                    <div className="right_button3 buttondiv" onClick="">{t('search.clear')}</div>
                </div>

                <div className="numberOfResults">
                    <span style={{fontSize:"1.6em"}}>{t('search.results')}</span><br />
                    {t('search.nrorecordsfound')}: <span id="idNroRows">33</span>
                </div>

                <textarea className="resultsTextArea">

                </textarea>
            </div>
        </div>
    );
}
