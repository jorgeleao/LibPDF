import React from 'react';
import { useTranslation } from 'react-i18next';
import './logout.css'
import SearchMode from './SearchMode'

export default function Logout(props) {
    const { t } = useTranslation();

    return (
        <div onClick={() => props.clickHandler()} className="logout_cardboard">
            <br />
            <br />
            <span style={{ fontSize: "2.5em" }}>Logout</span>
            <br />
            <div>

            </div>
        </div>
    );
}
