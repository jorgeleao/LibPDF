import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import './SearchMode.css'

export default function SearchMode(){
    const { t } = useTranslation();

    const onSubmit= (evt) => {
        evt.preventDefault();
        console.log("===         serial: "+serialNChkd+"\n"+
                    "    title.titleAndChkd: "+title.titleAndChkd+"\n"+
                    "     title.titleOrChkd: "+title.titleOrChkd+"\n"+
                    "                    "+evt.target.titleAnd.checked
        )
    }

    const [serialNChkd, setSerialNChkd] = useState(false)
    const [title, setTitle] = useState({disabled:false, titleAndChkd:false, titleOrChkd:false})
    const [author, setAuthor] = useState({disabled:false, authorAnd:false, authorOr:false})
    const [publisher, setPublisher] = useState({disabled:false, publisherAnd:false, publisherOr:false})
    const [pubDate, setpubDate] = useState({disabled:false, pubDateAnd:false, pubDateOr:false})
    const [keywords, setKeywords] = useState({disabled:false, keywordsAnd:false, keywordsOr:false})


        

    function serialClick(){
        setSerialNChkd(!serialNChkd)
        setTitle({...title, disabled:!serialNChkd})
        setAuthor({...author, disabled:!serialNChkd})
        setPublisher({...publisher, disabled:!serialNChkd})
        setpubDate({...pubDate, disabled:!serialNChkd})
        setKeywords({...keywords, disabled:!serialNChkd})
    }

    function titleAndClick(evt){
        const checked = document.querySelectorAll('input[type="checkbox"]:checked');
        console.log([...checked].map(c => c.value))

        const chk = document.getElementById('titleAnd').checked
        setTitle({ disabled:false, titleAndChkd:chk, titleOrChkd:false})
    }
    function titleOrClick(evt){
        setTitle({ disabled:false, titleAndChkd:false, titleOrChkd:!title.titleOrChkd})
    }

    function authorAndClick(evt){
        setAuthor({ disabled:false, authorAnd:!author.authorAnd, authorOr:false})
    }
    function authorOrClick(evt){
        setAuthor({ disabled:false, authorAnd:false, authorOr:!author.authorOr})
    }

    function publisherAndClick(evt){
        setPublisher({ disabled:false, publisherAnd:!publisher.publisherAnd, publisherOr:false})
    }
    function publisherOrClick(evt){
        setPublisher({ disabled:false, publisherAnd:false, publisherOr:!publisher.publisherOr})
    }

    function pubDateAndClick(evt){
        setpubDate({ disabled:false, pubDateAnd:!pubDate.pubDateAnd, pubDateOr:false})
    }
    function pubDateOrClick(evt){
        setpubDate({ disabled:false, pubDateAnd:false, pubDateOr:!pubDate.pubDateOr})
    }

    function keywordsAndClick(evt){
        setKeywords({ disabled:false, keywordsAnd:!keywords.keywordsAnd, keywordsOr:false})
    }
    function keywordsOrClick(evt){
        setKeywords({ disabled:false, keywordsAnd:false, keywordsOr:!keywords.keywordsOr})
    }

    return(
        <form onSubmit={onSubmit}>
            <div className='SearchMode'>
                <div className='SearchMode-checkboxes'>
                    <label htmlFor="serialChkd" style={{color:"rgb(243, 245, 243)"}}>{t('searchMode.AND')}</label>

                    <input name="serialChkd" type="checkbox" id="serialChkd" checked={serialNChkd} onChange={serialClick} /><br />

                    <label htmlFor="titleAnd">{t('searchMode.AND')}</label>
                    <input name="titleAnd" type="checkbox" id="titleAnd" checked={title.titleAndChkd} disabled={title.disabled} onChange={titleAndClick} />
                    <label htmlFor="titleOr">&nbsp;&nbsp;{t('searchMode.OR')}</label>
                    <input name="titleOr" type="checkbox" id="titleOr" checked={title.titleOrChkd} disabled={title.disabled} onChange={titleOrClick} /><br />

                    <label htmlFor="authorAnd">{t('searchMode.AND')}</label>
                    <input name="authorAnd" type="checkbox" id="authorAnd" checked={author.authorAnd} disabled={author.disabled} onChange={authorAndClick} />
                    <label htmlFor="authorOr">&nbsp;&nbsp;{t('searchMode.OR')}</label>
                    <input name="authorOr" type="checkbox" id="authorOr" checked={author.authorOr} disabled={author.disabled} onChange={authorOrClick} /><br />

                    <label htmlFor="publisherAnd">{t('searchMode.AND')}</label>
                    <input name="publisherAnd" type="checkbox" id="publisherAnd" checked={publisher.publisherAnd} disabled={publisher.disabled} onChange={publisherAndClick} />
                    <label htmlFor="publisherOr">&nbsp;&nbsp;{t('searchMode.OR')}</label>
                    <input name="pub Or" type="checkbox" id="publisherOr" checked={publisher.publisherOr} disabled={publisher.disabled} onChange={publisherOrClick} /><br />

                    <label htmlFor="dateAnd">{t('searchMode.AND')}</label>
                    <input name="dateAnd" type="checkbox" id="dateAnd" checked={pubDate.pubDateAnd} disabled={pubDate.disabled} onChange={pubDateAndClick} />
                    <label htmlFor="dateOr">&nbsp;&nbsp;{t('searchMode.OR')}</label>
                    <input name="dateOr" type="checkbox" id="dateOr" checked={pubDate.pubDateOr} disabled={pubDate.disabled} onChange={pubDateOrClick} /><br />

                    <label htmlFor="keywordsAnd">{t('searchMode.AND')}</label>
                    <input name="keywordsAnd" type="checkbox" id="keywordsAnd" checked={keywords.keywordsAnd} disabled={keywords.disabled} onChange={keywordsAndClick} />
                    <label htmlFor="keywordsOr">&nbsp;&nbsp;{t('searchMode.OR')}</label>
                    <input name="keywordsOr" type="checkbox" id="keywordsOr" checked={keywords.keywordsOr} disabled={keywords.disabled} onChange={keywordsOrClick} />
                </div>
            </div>

            <input type="submit" value="Submit"/>

        </form>
    )
}
