import React from 'react';
import { useTranslation } from 'react-i18next';
import './logout.css'
import './common.css';
import './cataloging.css';
import SearchMode from './SearchMode'

import App from './messager/mainprogressbar'
import Messager from './messager/messager.js'




export default function Logout(props) {
    const { t } = useTranslation();

    

    return (
        <div className="common_cardboard">
            <br />
            <br />
            <br/>
            {/*<App />*/}
            <br />
            <br/>
            <Messager isActive = {props.isActive} message={props.message}/>
            <br />
            <br/>
            <div className="common_divcontainer">
                <div className="common_pageTitle"><span>{t('appPageTexts.part6')}</span></div>
                <div className="common_message"></div>
                <div></div>

                <div></div>
                <div className="common_2buttons">2 buttons</div>
                <div></div>

                <div className="common_item1">{t('cataloging.serial')}</div>
                <div className="common_item2"><input type="text" className="common_largeinput"/></div>

                <div className="common_item1">{t('cataloging.title')}</div>
                <div className="common_item2"><input type="text" className="common_largeinput"/></div>

                <div className="common_item1">Dates</div>
                <div className="common_item3">From</div>
                <div className="common_item3b"><input type="text" className="shorttext"/></div>
                <div className="common_item4">To</div>
                <div className="common_item4b"><input type="text" className="shorttext"/></div>

                <div className="common_item1">{t('cataloging.title')}</div>
                <div className="common_item2"><input type="text" className="common_largeinput"/></div>

                <div className="common_item1">{t('cataloging.title')}</div>
                <div className="common_item2"><input type="text" className="common_largeinput"/></div>

                <div className="common_item1">{t('cataloging.title')}</div>
                <div className="common_item2"><input type="text" className="common_largeinput"/></div>


                <div className="common-mode-grid">
                    <SearchMode />
                </div>
            </div>
        </div>
    );
}
