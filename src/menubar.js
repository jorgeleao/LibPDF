import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageChooser from './languagechooser.js'
//import Logout from './logout.js';
import './menubar.css'
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom"


export default function Menubar() {
    const location = useLocation();
    const { t, i18n } = useTranslation();

    function changeLang() {
        i18n.resolvedLanguage === "en" ? i18n.changeLanguage("pt") : i18n.changeLanguage("en")
    }

    // function logOut() {
    //     console.log("=== LogOut ===");
    // }

    return (
        <div className="menubar">
            <div className="titletext">LibPDF</div>

            <div className="language">
                <LanguageChooser clickHandler={() => changeLang()} />
            </div>

            <div className="menuitems">
                <div className="search-catalog">
                    <Link to="/" className={location.pathname === "/" ?
                        "spacer menuitemselected" : "spacer menuitemNOTselected"}>{t('appPageTexts.part3')}</Link>

                    <Link to="/catalog" className={location.pathname === "/catalog" ?
                        "spacer menuitemselected" : "spacer menuitemNOTselected"}>{t('appPageTexts.part6')}</Link>

                    <Link to="/about" className={location.pathname === "/about" ?
                        "spacer menuitemselected" : "spacer menuitemNOTselected"}>{t('appPageTexts.part7')}</Link>

                    <a href="https://www.jleao.com" className={"spacer menuitemNOTselected"}>Back to www.jleao.com</a>
                </div>
            </div>
        </div >
    );
}
