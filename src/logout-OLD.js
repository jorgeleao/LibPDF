import { t }  from 'i18next';
import './logout.css';

export default function Logout() {

    return (
        <div style={{textAlign:"center"}}>
            <br/>
            <br/>
            <br/>
            <span style={{fontSize:"2.5em",textAlign:"center"}}>{t('appPageTexts.part4')}</span>
        </div>
    );
}
