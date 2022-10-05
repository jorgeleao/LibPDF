import { t }  from 'i18next';
import './logout.css';

export default function Logout(props) {
    let url = "#";

    function clicou(e){
        console.log('======= OK =======');
    }
    

    return (
        <div>  {/* onClick={() => props.clicou()}> */}
            <br/>
            <br/>
            <span style={{fontSize:"2.5em"}}>{t('appPageTexts.part4')}</span>
        </div>
    );
}
