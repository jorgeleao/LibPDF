import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import './BibliForm.css'
import { BibliformContext } from './contexts/BibliformContext.js'


export default function BibliForm(){
    const {serial, title, author, publisher, from, to, keywords, handleChangeSerial, handleChangeTitle } = useContext(BibliformContext)
    const { t } = useTranslation();

    return(
        <form>
            <div className="bibliform-parent">
                <div>{t('bibliform.serial')}</div>
                <div className="bibliform-twosix"><input name="serial" type="text" className="bibliform-intext" value={serial} onChange={e=>handleChangeSerial(e.target.value)}/></div>

                <div>{t('bibliform.title')}</div>
                <div className="bibliform-twosix"><input name="title" type="text" className="bibliform-intext" value={title} onChange={e=>handleChangeTitle(e.target.value)}/></div>
                
                <div>{t('bibliform.author')}</div>
                <div className="bibliform-twosix"><input name="author" type="text" className="bibliform-intext" value={author}/></div>
                
                <div>{t('bibliform.publisher')}</div>
                <div className="bibliform-twosix"><input name="publisher" type="text" className="bibliform-intext" value={publisher}/></div>
                
                <div>{t('bibliform.pubdate')}</div>
                <div>{t('bibliform.from')}</div>
                <div><input name="from" type="text" className="bibliform-intextSmall" value={from}/></div>
                <div>{t('bibliform.to')}</div>
                <div><input name="to" type="text" className="bibliform-intextSmall" value={to}/></div>

                <div>{t('bibliform.keywords')}</div>
                <div className="bibliform-twosix"><input name="keywords" type="text" className="bibliform-intext" value={keywords}/></div>
            </div>
        </form>
    )
}
