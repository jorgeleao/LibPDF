import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import './SearchMode.css'

export default function SearchMode(){
    const { t } = useTranslation();

    // partial state: Serialno checked
    const [serialnoChkd, setSerialnoChkd] = useState(false)
    // partial state: title, author, ano
    const [title, setTitle] = useState({disabled:false, titleAnd:false, titleOr:false})
    const [author, setAuthor] = useState({disabled:false, authorAnd:false, authorOr:false})
    const [year, setYear] = useState({disabled:false, yearAnd:false, yearOr:false})

    function handleSerialnoClick(evt){
        setSerialnoChkd( !serialnoChkd)
        setTitle({...title, disabled:!serialnoChkd})
        setAuthor({...author, disabled:!serialnoChkd})
        setYear({...year, disabled:!serialnoChkd})
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

    function yearAndClick(evt){
        setYear({ disabled:false, yearAnd:!year.yearAnd, yearOr:false})
    }
    function yearOrClick(evt){
        setYear({ disabled:false, yearAnd:false, yearOr:!year.yearOr})
    }

    return(
        <div className='SearchMode'>
            <div className='SearchMode-checkboxes'>
                <label htmlFor="tituloE" style={{color:"rgb(243, 245, 243)"}}>{t('searchMode.AND')}</label>
                <input type="checkbox" checked={serialnoChkd} onChange={handleSerialnoClick} /><br />

                <label htmlFor="tituloE">{t('searchMode.AND')}</label>
                <input type="checkbox" id="tituloE" checked={title.titleAnd} disabled={title.disabled} onChange={titleAndClick} />
                <label htmlFor="tituloOU">&nbsp;&nbsp;{t('searchMode.OR')}</label>
                <input type="checkbox" id="tituloOU" checked={title.titleOr} disabled={title.disabled} onChange={titleOrClick} /><br />

                <label htmlFor="autorE">{t('searchMode.AND')}</label>
                <input type="checkbox" id="autorE" checked={author.authorAnd} disabled={author.disabled} onChange={authorAndClick} />
                <label htmlFor="autorOU">&nbsp;&nbsp;{t('searchMode.OR')}</label>
                <input type="checkbox" id="autorOU" checked={author.authorOr} disabled={author.disabled} onChange={authorOrClick} /><br />

                <label htmlFor="pubAnd">{t('searchMode.AND')}</label>
                <input type="checkbox" id="pubAnd" checked={year.yearAnd} disabled={year.disabled} onChange={yearAndClick} />
                <label htmlFor="pubOr">&nbsp;&nbsp;{t('searchMode.OR')}</label>
                <input type="checkbox" id="pubOr" checked={year.yearOr} disabled={year.disabled} onChange={yearOrClick} /><br />

                <label htmlFor="dateAnd">{t('searchMode.AND')}</label>
                <input type="checkbox" id="dateAnd" checked={author.authorAnd} disabled={author.disabled} onChange={authorAndClick} />
                <label htmlFor="dateOr">&nbsp;&nbsp;{t('searchMode.OR')}</label>
                <input type="checkbox" id="dateOr" checked={author.authorOr} disabled={author.disabled} onChange={authorOrClick} /><br />

                <label htmlFor="keyAnd">{t('searchMode.AND')}</label>
                <input type="checkbox" id="keyAnd" checked={year.yearAnd} disabled={year.disabled} onChange={yearAndClick} />
                <label htmlFor="keyOr">&nbsp;&nbsp;{t('searchMode.OR')}</label>
                <input type="checkbox" id="keOr" checked={year.yearOr} disabled={year.disabled} onChange={yearOrClick} />
            </div>
        </div>
    )
}
