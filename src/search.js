import React from 'react';
import { useTranslation } from 'react-i18next';
import './search.css'

export default function Search(props) {
    const { t, i18n } = useTranslation();

    return (
        <div onClick={() => props.clickHandler()} className="search_cardboard" style={{ zIndex: "50" }}>
            <br />
            <br />
            <span style={{ fontSize: "2.5em" }}>{t('appPageTexts.part5')}</span>
            <br />
            <div>
                <div className="search_grid-container">
                    <div className="search_item1 item"><span>Patrimônio</span></div>
                    <div className="search_item2 item"><input type="text" className="intext" /></div>
                    <div className="search_item4 item" style={{ textAlign: "left" }}><input type="checkbox" className="checkboxstyle" /></div>
                    <div className="search_item4 item"></div>

                    <div className="search_item1 item"><span>Título</span></div>
                    <div className="search_item2 item"><input type="text" className="intext" /></div>
                    <div className="search_item4 item" style={{ textAlign: "left", color:"lightgray" }}><input type="checkbox" className="checkboxstyle" disabled/> OU</div>
                    <div className="search_item4 item" style={{ textAlign: "left" }}><input type="checkbox" className="checkboxstyle" /> E</div>

                    <div className="search_item1 item"><span>Autoria</span></div>
                    <div className="search_item2 item"><input type="text" className="intext" /></div>
                    <div className="search_item4 item" style={{ textAlign: "left" }}><input type="checkbox" className="checkboxstyle" /> OU</div>
                    <div className="search_item4 item" style={{ textAlign: "left" }}><input type="checkbox" className="checkboxstyle" /> E</div>

                    <div className="search_item1 item"><span>Veículo</span></div>
                    <div className="search_item2 item"><input type="text" className="intext" /></div>
                    <div className="search_item4 item" style={{ textAlign: "left" }}><input type="checkbox" className="checkboxstyle" /> OU</div>
                    <div className="search_item4 item" style={{ textAlign: "left" }}><input type="checkbox" className="checkboxstyle" /> E</div>

                    <div className="search_item6 item"><span>Data de publicação</span></div>
                    <div className="search_item7 item">de: <input type="text" className="intext" style={{ width: "232px", marginLeft: "1px" }} /></div>
                    <div className="search_item8 item">até: <input type="text" className="intext" style={{ width: "232px", marginLeft: "1px" }} /></div>
                    <div className="search_item4 item" style={{ textAlign: "left" }}><input type="checkbox" className="checkboxstyle" /> OU</div>
                    <div className="search_item4 item" style={{ textAlign: "left" }}><input type="checkbox" className="checkboxstyle" /> E</div>

                    <div className="search_item1 item"><span>Palavras-chave</span></div>
                    <div className="search_item2 item"><input type="text" className="intext" /></div>
                    <div className="search_item4 item" style={{ textAlign: "left" }}><input type="checkbox" className="checkboxstyle" /> OU</div>
                    <div className="search_item4 item" style={{ textAlign: "left" }}><input type="checkbox" className="checkboxstyle" /> E</div>
                </div>

                <div className="next_previous_buttons">
                    <div className="left_button1 buttondiv" style={{ backgroundColor: "rgb(243, 245, 243)", border: "none" }}></div>
                    <div className="center_button1 buttondiv" style={{ backgroundColor: "rgb(243, 245, 243)", border: "none", color: "black" }}>Página atual</div>
                    <div className="right_button1 buttondiv" style={{ backgroundColor: "rgb(243, 245, 243)", border: "none" }}></div>
                    <div className="left_button2 buttondiv">&lt; Página anterior</div>
                    <div className="center_button2 buttondiv" style={{ backgroundColor: "white", color: "black" }}><input type="text" className="paginaAtualInput" /></div>
                    <div className="right_button2 buttondiv">Próxima página &gt;</div>
                    <div className="left_button3 buttondiv">Buscar</div>
                    <div className="center_button3 buttondiv">Editar</div>
                    <div className="right_button3 buttondiv" onClick="">Limpar</div>
                </div>

                <div className="numberOfResults">
                    <span style={{fontSize:"1.6em"}}>Resultados</span><br />
                    Nro. de registros encontrados: 33 <span id="idNroRows"></span>
                </div>

                <textarea className="resultsTextArea">

                </textarea>
            </div>
        </div>
    );
}
