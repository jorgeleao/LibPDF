import React from 'react';
import { useTranslation } from 'react-i18next';
import './common.css';
import './cataloging.css';
import Messager2 from './messager2/messager.js'


export default function Cataloging(props) {
    const { t } = useTranslation();

    return (
        <div className="common_cardboard">
            <br />
            <br />
            <br />
            <div className="common_divcontainer">
                <div className="common_pageTitle"><span>{t('appPageTexts.part6')}</span></div>
                <div className="common_message">
                <Messager2 isActive = {props.isActive} message={props.message} progress={props.progress} colortheme={props.colortheme}/>
                </div>
                <div></div>

                <div></div>
                <div className="common-two-upper-buttons">
                    <div className="common_but_top" onClick={()=>props.handleCatalogButtons('prevSerial')}>{t('search.previous')}</div>
                    <div className="common_but_top" onClick={()=>props.handleCatalogButtons('nextSerial')}>{t('search.next')}</div>
                </div>
                <div></div>

                <div className="common_item1">{t('common.serial')}</div>
                <div className="common-twoeight"><input type="text"
                                                        className="common_largeinput"
                                                        value={props.catalogFields.serial}
                                                        onChange={e=>props.catalogHandleChangeReducer('serial', e.target.value)}/>
                </div>
                <div></div>

                <div className="common_item1">{t('common.title')}</div>
                <div className="common_item2"><input    type="text" 
                                                        className="common_largeinput"
                                                        onChange={e=>props.catalogHandleChangeReducer('title', e.target.value)}
                                                        value={props.catalogFields.title} 
                                                        disabled={!props.isEditing}/>
                </div>
                <div></div>

                <div className="common_item1">{t('common.author')}</div>
                <div className="common_item2"><input    type="text" 
                                                        className="common_largeinput"
                                                        onChange={e=>props.catalogHandleChangeReducer('author', e.target.value)}
                                                        value={props.catalogFields.author} 
                                                        disabled={!props.isEditing}/>
                </div>
                <div></div>

                <div className="common_item1">{t('common.publisher')}</div>
                <div className="common_item2"><input    type="text" 
                                                        className="common_largeinput" 
                                                        onChange={e=>props.catalogHandleChangeReducer('publisher', e.target.value)}
                                                        value={props.catalogFields.publisher} 
                                                        disabled={!props.isEditing}/>
                </div>
                <div></div>

                <div className="common_item1">{t('common.pubdate')}</div>
                <div className="common_item2"><input    type="text" 
                                                        className="common_largeinput"
                                                        onChange={e=>props.catalogHandleChangeReducer('pubdate', e.target.value)}
                                                        value={props.catalogFields.pubdate} 
                                                        disabled={!props.isEditing}/>
                </div>
                <div></div>

                <div className="common_item1">{t('common.keywords')}</div>
                <div className="common_item2"><input    type="text" 
                                                        className="common_largeinput"
                                                        onChange={e=>props.catalogHandleChangeReducer('keywords', e.target.value)}
                                                        value={props.catalogFields.keywords} 
                                                        disabled={!props.isEditing}/>
                </div>
                <div></div>

                <div className="common_item1">{t('common.originalfilename')}</div>
                <div className="common_item2"><input    type="text" 
                                                        className="common_largeinput"
                                                        onChange={e=>props.catalogHandleChangeReducer('originalFilename', e.target.value)}
                                                        value={props.catalogFields.originalFilename} 
                                                        disabled={!props.isEditing}/>
                </div>
                <div></div>

                <div className="common_item1">{t('common.fileupload')}</div>
                <div className="common_item2">
                    <input  type="file" 
                            key={props.inputFileKey}
                            className={props.isEditing?"cataloging-bg_white cataloging_largeinput_file":"cataloging_largeinput_file"} 
                            disabled={!props.isEditing} 
                            onChange={ e => props.handleInputTypeFile(e)}/>
                </div>
                <div className="cataloging-eightnine">
                <div    className={props.isEditing?"normalColor cataloging_upload":"disabledColor cataloging_upload"}
                        onClick={() => props.handleCatalogButtons('upload')}>
                            {t('common.upload')}
                    </div>
                </div>

                <div className="cataloging_startnewcomment">{t('cataloging.newcomment')}</div>
                <div className="cataloging_newcommentcontainer">
                    <textarea   className="cataloging_newcomment"
                                value={props.newComment} 
                                readOnly={!props.isEditing}
                                onChange={e=>props.catalogHandleNewComment(e)}/>
                </div>
                <div className="cataloging_endnewcomment"></div>

                <div className="cataloging_previouscomment">{t('cataloging.previouscomments')}</div>
                <div className="cataloging_previouscommentbox">
                    <textarea   className="cataloging_newcomment" 
                                value={props.previousComment} 
                                readOnly />
                </div>
                <div></div>

                <div className="cataloging-firstbuttonrow"></div>
                <div className="cataloging-threebuttons">
                    <div    className={props.isEditing?"redColor cataloging_botbutton":"normalColor cataloging_botbutton"}
                            onClick={() => props.handleCatalogButtons('edit')}>{t('cataloging.edit')}</div>
                    <div    className={props.isEditing?"normalColor cataloging_botbutton":"disabledColor cataloging_botbutton"}
                            onClick={()=> {props.isEditing?props.handleCatalogButtons('saveascurrent'):props.handleCatalogButtons('nada')}}>{t('cataloging.saveascurrent')}</div>
                    <div    className={props.isEditing?"normalColor cataloging_botbutton":"disabledColor cataloging_botbutton"}
                            onClick={()=> {props.isEditing?props.handleCatalogButtons('saveasnew'):props.handleCatalogButtons('nada')}}>{t('cataloging.saveasnew')}</div>
                </div>
                <div></div>

                <div className="cataloging-firstbuttonrow"></div>
                <div className="cataloging-threebuttons">
                    <div className="normalColor cataloging_botbutton" onClick={()=>props.handleCatalogButtons('download')}>{t('cataloging.download')}</div>
                    <div className="normalColor cataloging_botbutton" onClick={()=>props.handleCatalogButtons('clear')}>{t('cataloging.clear')}</div>
                    <div    className={props.isEditing?"normalColor cataloging_botbutton":"disabledColor cataloging_botbutton"}
                            onClick={()=> {props.isEditing?props.handleCatalogButtons('delete'):props.handleCatalogButtons('nada')}}>{t('cataloging.delete')}</div>
                </div>
            </div>
        </div>
    );
}
