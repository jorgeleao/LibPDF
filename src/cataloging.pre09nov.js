import React from 'react';
import { useTranslation } from 'react-i18next';
import './cataloging.css';

export default function Cataloging(props) {
    const { t } = useTranslation();

    return (
        <div className="cataloging_cardboard">
            <br />
            <br />
            <span className="cataloging_pageTitle">{t('appPageTexts.part6')}</span>
            <br/>
            <div className="cataloging_divcontainer">
                <div className="cataloging_item1"></div>

                <div className="cataloging_item2 cataloging_two-upper-buttons">
                    <div className="cataloging_anterior" onClick={()=>props.handleCatalogButtons('prevSerial')}>{t('cataloging.previous')}</div>
                    <div className="cataloging_proximo" onClick={()=>props.handleCatalogButtons('nextSerial')}>{t('cataloging.next')}</div>
                </div>
                <div className="cataloging_item3"></div>

                <div className="cataloging_item1">{t('cataloging.serial')}</div>
                <div className="cataloging_item2"><input type="text" className="cataloging_largeinput"
                                                            onChange={e=>props.catalogHandleChangeReducer('serial', e.target.value)}
                                                            value={props.catalogFields.serial}/></div>
                <div className="cataloging_item3"></div>

                <div className="cataloging_item1">{t('cataloging.title')}</div>
                <div className="cataloging_item2"><input type="text" className="cataloging_largeinput"
                                                            onChange={e=>props.catalogHandleChangeReducer('title', e.target.value)}
                                                            value={props.catalogFields.title}/></div>
                <div className="cataloging_item3"></div>

                <div className="cataloging_item1">{t('cataloging.author')}</div>
                <div className="cataloging_item2"><input type="text" className="cataloging_largeinput"
                                                            onChange={e=>props.catalogHandleChangeReducer('author', e.target.value)}
                                                            value={props.catalogFields.author}/></div>
                <div className="cataloging_item3"></div>

                <div className="cataloging_item1">{t('cataloging.publisher')}</div>
                <div className="cataloging_item2"><input type="text" className="cataloging_largeinput" 
                                                            onChange={e=>props.catalogHandleChangeReducer('publisher', e.target.value)}
                                                            value={props.catalogFields.publisher}/></div>
                <div className="cataloging_item3"></div>

                <div className="cataloging_item1">{t('cataloging.pubdate')}</div>
                <div className="cataloging_item2"><input type="text" className="cataloging_largeinput"
                                                            onChange={e=>props.catalogHandleChangeReducer('pubdate', e.target.value)}
                                                            value={props.catalogFields.pubdate}/></div>
                <div className="cataloging_item3"></div>

                <div className="cataloging_item1">{t('cataloging.keywords')}</div>
                <div className="cataloging_item2"><input type="text" className="cataloging_largeinput"
                                                            onChange={e=>props.catalogHandleChangeReducer('keywords', e.target.value)}
                                                            value={props.catalogFields.keywords}/></div>
                <div className="cataloging_item3"></div>

                <div className="cataloging_item1">{t('cataloging.originalfilename')}</div>
                <div className="cataloging_item2"><input type="text" className="cataloging_largeinput"
                                                            onChange={e=>props.catalogHandleChangeReducer('originalFilename', e.target.value)}
                                                            value={props.catalogFields.originalFilename}/></div>
                <div className="cataloging_item3"></div>

                <div className="cataloging_item1">{t('cataloging.fileupload')}</div>
                <div className="cataloging_item2"><input type="file" className="cataloging_largeinput_file" /></div>
                <div className="cataloging_item3"><div className="cataloging_upload" onClick={()=>props.handleCatalogButtons('upload')}>{t('cataloging.upload')}</div></div>

                <div className="cataloging_itemC">{t('cataloging.newcomment')}</div>
                <div className="cataloging_item2"><textarea className="cataloging_newcomment"
                                                            value={props.newComment}
                                                            onChange={e=>props.catalogHandleNewComment(e)}/></div>
                <div className="cataloging_item3"></div>

                <div className="cataloging_itemC">{t('cataloging.previouscomments')}</div>
                <div className="cataloging_item2"><textarea className="cataloging_newcomment" value={props.previousComment} readOnly /></div>
                <div className="cataloging_item3"></div>

                <div className="cataloging_item1"></div>
                <div className="cataloging_item4"><div className="cataloging_botbutton" onClick={()=>props.handleCatalogButtons('edit')}>{t('cataloging.edit')}</div></div>
                <div className="cataloging_item4"><div className="cataloging_botbutton" onClick={()=>props.handleCatalogButtons('saveascurrent')}>{t('cataloging.saveascurrent')}</div></div>
                <div className="cataloging_item4"><div className="cataloging_botbutton" onClick={()=>props.handleCatalogButtons('saveasnew')}>{t('cataloging.saveasnew')}</div></div>
                <div className="cataloging_item3"></div>

                <div className="cataloging_item1"></div>
                <div className="cataloging_item4"><div className="cataloging_botbutton" onClick={()=>props.handleCatalogButtons('download')}>{t('cataloging.download')}</div></div>
                <div className="cataloging_item4"><div className="cataloging_botbutton" onClick={()=>props.handleCatalogButtons('clear')}>{t('cataloging.clear')}</div></div>
                <div className="cataloging_item4"><div className="cataloging_botbutton" onClick={()=>props.handleCatalogButtons('delete')}>{t('cataloging.delete')}</div></div>
                <div className="cataloging_item3"></div>
            </div>
        </div>
    );
}
