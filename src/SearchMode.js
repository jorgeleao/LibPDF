import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import './SearchMode.css'

export default function SearchMode(){
    const { t } = useTranslation();
    const onSubmit= (evt) => {
        evt.preventDefault();
        console.log("===> "+evt.target.serialChkd.checked)
    }

    const [serialNChkd, setSerialNChkd] = useState(false)

    const [title, setTitle] = useState({disabled:false, titleAnd:false, titleOr:false})
    const [author, setAuthor] = useState({disabled:false, authorAnd:false, authorOr:false})
    const [publisher, setPublisher] = useState({disabled:false, pubAnd:false, pubOr:false})
    const [year, setYear] = useState({disabled:false, yearAnd:false, yearOr:false})
    const [keywords, setKeywords] = useState({disabled:false, keyAnd:false, keyOr:false})

    function handleSerialClick(){
        setSerialNChkd(!serialNChkd)

        setTitle({...title, disabled:!serialNChkd})
        setAuthor({...author, disabled:!serialNChkd})
        setPublisher({...publisher, disabled:!serialNChkd})
        setYear({...year, disabled:!serialNChkd})
        setKeywords({...keywords, disabled:!serialNChkd})
    }

    function titleAndClick(evt){
        setTitle({ disabled:false, titleAnd:!title.titleAnd, titleOr:false})
    }
    function titleOrClick(evt){
        setTitle({ disabled:false, titleAnd:false, titleOr:!title.titleOr})
    }

    function authorAndClick(evt){
        setAuthor({ disabled:false, authorAnd:!author.authorAnd, authorOr:false})
    }
    function authorOrClick(evt){
        setAuthor({ disabled:false, authorAnd:false, authorOr:!author.authorOr})
    }

    function publisherAndClick(evt){
        setPublisher({ disabled:false, pubAnd:!publisher.pubAnd, pubOr:false})
    }
    function publisherOrClick(evt){
        setPublisher({ disabled:false, pubAnd:false, pubOr:!publisher.pubOr})
    }

    function yearAndClick(evt){
        setYear({ disabled:false, yearAnd:!year.yearAnd, yearOr:false})
    }
    function yearOrClick(evt){
        setYear({ disabled:false, yearAnd:false, yearOr:!year.yearOr})
    }

    function keyAndClick(evt){
        setKeywords({ disabled:false, keyAnd:!keywords.keyAnd, keyOr:false})
    }
    function keyOrClick(evt){
        setKeywords({ disabled:false, keyAnd:false, keyOr:!keywords.keyOr})
    }

    return(
        <form onSubmit={onSubmit}>
            <div className='SearchMode'>
                <div className='SearchMode-checkboxes'>
                    <label htmlFor="serialChkd" style={{color:"rgb(243, 245, 243)"}}>{t('searchMode.AND')}</label>

                    <input name="serialChkd" type="checkbox" id="serialChkd" checked={serialNChkd} onChange={handleSerialClick} /><br />

                    <label htmlFor="tituloE">{t('searchMode.AND')}</label>
                    <input name="tituloE" type="checkbox" id="tituloE" checked={title.titleAnd} disabled={title.disabled} onChange={titleAndClick} />
                    <label htmlFor="tituloOU">&nbsp;&nbsp;{t('searchMode.OR')}</label>
                    <input name="tituloOU" type="checkbox" id="tituloOU" checked={title.titleOr} disabled={title.disabled} onChange={titleOrClick} /><br />

                    <label htmlFor="autorE">{t('searchMode.AND')}</label>
                    <input name="autorE" type="checkbox" id="autorE" checked={author.authorAnd} disabled={author.disabled} onChange={authorAndClick} />
                    <label htmlFor="autorOU">&nbsp;&nbsp;{t('searchMode.OR')}</label>
                    <input name="autorOU" type="checkbox" id="autorOU" checked={author.authorOr} disabled={author.disabled} onChange={authorOrClick} /><br />

                    <label htmlFor="pubAnd">{t('searchMode.AND')}</label>
                    <input name="pubAnd" type="checkbox" id="pubAnd" checked={publisher.pubAnd} disabled={publisher.disabled} onChange={publisherAndClick} />
                    <label htmlFor="pubOr">&nbsp;&nbsp;{t('searchMode.OR')}</label>
                    <input name="pub Or" type="checkbox" id="pubOr" checked={publisher.pubOr} disabled={publisher.disabled} onChange={publisherOrClick} /><br />

                    <label htmlFor="dateAnd">{t('searchMode.AND')}</label>
                    <input name="dateAnd" type="checkbox" id="dateAnd" checked={year.yearAnd} disabled={year.disabled} onChange={yearAndClick} />
                    <label htmlFor="dateOr">&nbsp;&nbsp;{t('searchMode.OR')}</label>
                    <input name="dateOr" type="checkbox" id="dateOr" checked={year.yearOr} disabled={year.disabled} onChange={yearOrClick} /><br />

                    <label htmlFor="keyAnd">{t('searchMode.AND')}</label>
                    <input name="keyAnd" type="checkbox" id="keyAnd" checked={keywords.keyAnd} disabled={keywords.disabled} onChange={keyAndClick} />
                    <label htmlFor="keyOr">&nbsp;&nbsp;{t('searchMode.OR')}</label>
                    <input name="keyOr" type="checkbox" id="keyOr" checked={keywords.keyOr} disabled={keywords.disabled} onChange={keyOrClick} />
                </div>
            </div>

            <input type="submit" value="Submit"/>

        </form>
    )
}
