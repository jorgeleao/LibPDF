import React from 'react'
import { useTranslation } from 'react-i18next';
import './BibliForm.css'

export default function BibliForm(){
    const { t } = useTranslation();
    const onSubmit= (evt) => {
        evt.preventDefault();
        console.log("===> "+evt.target.title.value)
    }

    return(
        <form onSubmit={onSubmit}>
            <div className="bibliform-parent">
                <div>{t('bibliform.serial')}</div>
                <div className="bibliform-twosix"><input name="serial" type="text" className="bibliform-intext" /></div>

                <div>{t('bibliform.title')}</div>
                <div className="bibliform-twosix"><input name="title" type="text" className="bibliform-intext" /></div>
                
                <div>{t('bibliform.author')}</div>
                <div className="bibliform-twosix"><input name="author" type="text" className="bibliform-intext" /></div>
                
                <div>{t('bibliform.vehicle')}</div>
                <div className="bibliform-twosix"><input name="vehicle" type="text" className="bibliform-intext" /></div>
                
                <div>{t('bibliform.pubdate')}</div>
                <div>{t('bibliform.from')}</div>
                <div><input name="from" type="text" className="bibliform-intextSmall" /></div>
                <div>{t('bibliform.to')}</div>
                <div><input name="to" type="text" className="bibliform-intextSmall" /></div>

                <div>{t('bibliform.keywords')}</div>
                <div className="bibliform-twosix"><input name="keywords" type="text" className="bibliform-intext" /></div>
            </div>

            <input type="submit" value="Submit"/>

        </form>
    )
}
