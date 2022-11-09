import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './common.css';
import SearchMode from './SearchMode'


export default function Cataloging(props) {
    const { t } = useTranslation();


    return (
        <div className="common_cardboard">
            <br />
            <br />
            <br/>
            <div className="common_divcontainer">
                <div className="common_pageTitle"><span>{t('appPageTexts.part6')}</span></div>
                <div className="common_message"></div>
                <div></div>

                <div></div>
                <div className="common-two-upper-buttons">
                    <div className="common_but_top" onClick={()=>props.handleSearchButtons('prevSerial')}>{t('search.previous')}</div>
                    <div className="common_but_top" onClick={()=>props.handleSearchButtons('nextSerial')}>{t('search.next')}</div>
                </div>
                <div></div>

                <div className="common_item1">{t('common.serial')}</div>
                <div className="common_item2"><input type="text" className="common_largeinput"
                                                            onChange={e=>props.catalogHandleChangeReducer('serial', e.target.value)}
                                                            value={props.catalogFields.serial}/>
                </div>
                <div></div>

                <div className="common_item1">{t('common.title')}</div>
                <div className="common_item2"><input type="text" className="common_largeinput"
                                                            onChange={e=>props.catalogHandleChangeReducer('title', e.target.value)}
                                                            value={props.catalogFields.title}/>
                </div>
                <div></div>

                <div className="common_item1">{t('common.author')}</div>
                <div className="common_item2"><input type="text" className="common_largeinput"
                                                            onChange={e=>props.catalogHandleChangeReducer('author', e.target.value)}
                                                            value={props.catalogFields.author}/>
                </div>
                <div></div>

                <div className="common_item1">{t('common.publisher')}</div>
                <div className="common_item2"><input type="text" className="common_largeinput" 
                                                            onChange={e=>props.catalogHandleChangeReducer('publisher', e.target.value)}
                                                            value={props.catalogFields.publisher}/>
                </div>
                <div></div>

                <div className="common_item1">{t('common.pubdate')}</div>
                <div className="common_item2"><input type="text" className="common_largeinput"
                                                            onChange={e=>props.catalogHandleChangeReducer('pubdate', e.target.value)}
                                                            value={props.catalogFields.pubdate}/>
                </div>
                <div></div>

                <div className="common_item1">{t('common.keywords')}</div>
                <div className="common_item2"><input type="text" className="common_largeinput"
                                                            onChange={e=>props.catalogHandleChangeReducer('keywords', e.target.value)}
                                                            value={props.catalogFields.keywords}/>
                </div>
                <div></div>

                <div className="common_item1">{t('common.originalfilename')}</div>
                <div className="common_item2"><input type="text" className="common_largeinput"
                                                            onChange={e=>props.catalogHandleChangeReducer('originalFilename', e.target.value)}
                                                            value={props.catalogFields.originalFilename}/>
                </div>
                <div></div>

                <div className="common_item1">{t('common.fileupload')}</div>
                <div className="common_item2"><input type="file" className="cataloging_largeinput_file" /></div>
                <div className="cataloging-eightnine">
                    <div className="cataloging_upload" onClick={()=>props.handleCatalogButtons('upload')}>
                        {t('common.upload')}
                    </div>
                </div>

                <div className="cataloging_itemC">{t('cataloging.newcomment')}</div>
                <div className="cataloging_item2"><textarea className="cataloging_newcomment"
                                                            value={props.newComment}
                                                            onChange={e=>props.catalogHandleNewComment(e)}/></div>
                <div></div>

                <div className="cataloging_previouscomment">{t('cataloging.previouscomments')}</div>
                <div className="cataloging_previouscommentbox"><textarea className="cataloging_newcomment" value={props.previousComment} readOnly /></div>
                <div className="cataloging_item3"></div>

                <div className="cataloging-firstbuttonrow"></div>
                <div className="cataloging-threebuttons">
                    <div className="cataloging_botbutton" onClick={()=>props.handleCatalogButtons('edit')}>{t('cataloging.edit')}</div>
                    <div className="cataloging_botbutton" onClick={()=>props.handleCatalogButtons('saveascurrent')}>{t('cataloging.saveascurrent')}</div>
                    <div className="cataloging_botbutton" onClick={()=>props.handleCatalogButtons('saveasnew')}>{t('cataloging.saveasnew')}</div>
                </div>
                <div></div>

                <div className="cataloging-firstbuttonrow"></div>
                <div className="cataloging-threebuttons">
                    <div className="cataloging_botbutton" onClick={()=>props.handleCatalogButtons('download')}>{t('cataloging.download')}</div>
                    <div className="cataloging_botbutton" onClick={()=>props.handleCatalogButtons('clear')}>{t('cataloging.clear')}</div>
                    <div className="cataloging_botbutton" onClick={()=>props.handleCatalogButtons('delete')}>{t('cataloging.delete')}</div>
                </div>
            </div>
        </div>
    );
}
