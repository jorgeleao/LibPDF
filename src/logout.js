import React from 'react';
import { useTranslation } from 'react-i18next';
import './logout.css'
import SearchMode from './SearchMode'

export default function Logout(props) {
    const { t } = useTranslation();

    return (
        <div onClick={() => props.clickHandler()} className="search_cardboard">
            <br />
            <br />
            <span style={{ fontSize: "2.5em" }}>{t('appPageTexts.part5')}</span>
            <br />
            <div>


                <div class="parent" style={{width:"888px",marginLeft:"auto",marginRight:"auto"}}>
                    <div style={{border:"0px solid black"}}></div>
                    <div style={{border:"0px solid black",gridColumn: "2 / 6",textAlign:"right", 
                                    paddingLeft:"7px",display:"flex",justifyContent: "space-between"}}>
                        <div className="search_but_top">Anterior</div>
                        <div className="search_but_top">Próximo</div>
                    </div>
                    <div style={{border:"0px solid black"}}></div>

                    <div style={{border:"0px solid black",textAlign:"right"}}>serial</div>
                    <div style={{border:"0px solid black",gridColumn: "2 / 6",textAlign:"right"}}><input type="text" className="intext" /></div>

                    <div style={{border:"0px solid black",textAlign:"right"}}>title</div>
                    <div style={{border:"0px solid black",gridColumn: "2 / 6",textAlign:"right"}}><input type="text" className="intext" /></div>
                    
                    <div style={{border:"0px solid black",textAlign:"right"}}>authority</div>
                    <div style={{border:"0px solid black",gridColumn: "2 / 6",textAlign:"right"}}><input type="text" className="intext" /></div>
                    
                    <div style={{border:"0px solid black",textAlign:"right"}}>type</div>
                    <div style={{border:"0px solid black",gridColumn: "2 / 6",textAlign:"right"}}><input type="text" className="intext" /></div>
                    
                    <div style={{border:"0px solid black",textAlign:"right"}}>pubdate</div>
                    <div style={{border:"0px solid black",textAlign:"right"}}>From</div>
                    <div style={{border:"0px solid black",textAlign:"right"}}><input type="text" className="intextSmall" /></div>
                    <div style={{border:"0px solid black",textAlign:"right"}}>To</div>
                    <div style={{border:"0px solid black",textAlign:"right"}}><input type="text" className="intextSmall" /></div>

                    <div style={{border:"0px solid black",textAlign:"right"}}>keywords</div>
                    <div style={{border:"0px solid black",gridColumn: "2 / 6",textAlign:"right"}}><input type="text" className="intext" /></div>
                    
                    <div style={{border:"0px solid black",gridColumn:"6",gridRow:"2/8"}}>
                        <SearchMode />
                    </div>
                </div>




            </div>
        </div>
    );
}
