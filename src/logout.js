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
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <a href={url} className="logout_anchor">{t('appPageTexts.part4')}</a>
            <h2>Teste</h2>
        </div>
    );
}
