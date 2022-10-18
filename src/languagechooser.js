import React from 'react';
import { useTranslation } from 'react-i18next';
import './languagechooser.css'

export default function LanguageChooser(props) {
    const { t } = useTranslation();

    return (
        <div className="languagechooser" onClick={() => props.clickHandler()}>

            {t('appPageTexts.part1')}

        </div>
    );
}
