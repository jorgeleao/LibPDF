import React from 'react';
import { useTranslation } from 'react-i18next';
import './about.css'

export default function About(props) {
    const { t } = useTranslation();

    return (
        <div onClick={() => props.clickHandler()} className="about_cardboard">
            <br />
            <br />
            <span style={{fontSize:"2.5em"}}>{t('appPageTexts.part7')}</span>

            <span style={{fontSize:"1.1em", textAlign:"center"}}>
                <p>{t('about.paragraph01')}</p>
                <p>{t('about.paragraph02')}</p>
                <p>{t('about.paragraph03')}</p>
                <p>{t('about.paragraph04')}</p>
                <p>{t('about.paragraph05')}</p>
                <p>{t('about.paragraph06')}</p>
                <p>{t('about.paragraph07a')}<i>Foss</i>{t('about.paragraph07b')}</p>
                <p>{t('about.paragraph08')}</p>
            </span>
        </div>
    );
}
