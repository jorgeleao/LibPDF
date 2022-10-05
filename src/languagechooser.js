import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import './languagechooser.css'

export default function LanguageChooser(props) {
    const { t, i18n } = useTranslation();

    return (
        <div
            className="languagechooser"
            onClick={() => props.clickHandler()}>
            {t('appPageTexts.part1')}
        </div>
    );
}
