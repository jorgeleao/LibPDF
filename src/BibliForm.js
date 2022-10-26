import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import './BibliForm.css'
import { BibliformContext } from './contexts/BibliformContext.js'


export default function BibliForm(){
    const {fields, handleChangeReducer} = useContext(BibliformContext)
    const { t } = useTranslation();

    return(
        <form>
            <div className="bibliform-parent">
                <div>{t('bibliform.serial')}</div>
                <div className="bibliform-twosix"><input name="serial" type="text" className="bibliform-intext" value={fields.serial} 
                    onChange={e=>handleChangeReducer('serial', e.target.value)}/></div>

                <div>{t('bibliform.title')}</div>
                <div className="bibliform-twosix"><input name="title" type="text" className="bibliform-intext" value={fields.title} 
                    onChange={e=>handleChangeReducer('title', e.target.value)} autoComplete="true"/></div>
                
                <div>{t('bibliform.author')}</div>
                <div className="bibliform-twosix"><input name="author" type="text" className="bibliform-intext" value={fields.author} 
                    onChange={e=>handleChangeReducer('author', e.target.value)}/></div>
                
                <div>{t('bibliform.publisher')}</div>
                <div className="bibliform-twosix"><input name="publisher" type="text" className="bibliform-intext" value={fields.publisher} 
                    onChange={e=>handleChangeReducer('publisher', e.target.value)}/></div>
                
                <div>{t('bibliform.pubdate')}</div>
                <div>{t('bibliform.from')}</div>
                <div><input name="from" type="text" className="bibliform-intextSmall" value={fields.from} 
                    onChange={e=>handleChangeReducer('from', e.target.value)}/></div>

                <div>{t('bibliform.to')}</div>
                <div><input name="to" type="text" className="bibliform-intextSmall" value={fields.to} 
                    onChange={e=>handleChangeReducer('to', e.target.value)}/></div>

                <div>{t('bibliform.keywords')}</div>
                <div className="bibliform-twosix"><input name="keywords" type="text" className="bibliform-intext" value={fields.keywords} 
                    onChange={e=>handleChangeReducer('keywords', e.target.value)}/></div>
            </div>
        </form>
    )
}
