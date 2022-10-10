import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import './BibliForm.css'

export default function BibliForm(){
    const { t } = useTranslation();

    return(
        <div class="bibliform-parent">
            <div>{t('bibliform.serial')}</div>
            <div className="bibliform-twosix"><input type="text" className="bibliform-intext" /></div>

            <div>{t('bibliform.title')}</div>
            <div className="bibliform-twosix"><input type="text" className="bibliform-intext" /></div>
            
            <div>{t('bibliform.author')}</div>
            <div className="bibliform-twosix"><input type="text" className="bibliform-intext" /></div>
            
            <div>{t('bibliform.vehicle')}</div>
            <div className="bibliform-twosix"><input type="text" className="bibliform-intext" /></div>
            
            <div>{t('bibliform.pubdate')}</div>
            <div>{t('bibliform.from')}</div>
            <div><input type="text" className="bibliform-intextSmall" /></div>
            <div>{t('bibliform.to')}</div>
            <div><input type="text" className="bibliform-intextSmall" /></div>

            <div>{t('bibliform.keywords')}</div>
            <div className="bibliform-twosix"><input type="text" className="bibliform-intext" /></div>
        </div>
    )
}
