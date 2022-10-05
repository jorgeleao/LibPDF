import React from 'react';
import { useTranslation } from 'react-i18next';
import './cataloging.css';

export default function Cataloging(props) {
    const { t, i18n } = useTranslation();
    let url = "#";

    return (
        <div onClick={() => props.clickHandler()} className="cataloging_cardboard">
            <br />
            <br />
            <span style={{ fontSize: "2.5em" }}>{t('appPageTexts.part6')}</span>
            <br/>
            <div className="catal_divcontainer">
                <div className="item1"><div className="catal_anterior">Anterior</div> Patrimonio</div>
                <div className="item2"><input type="text" className="catal_largeinput" /></div>
                <div className="item3"><div className="catal_proximo">Proximo</div></div>

                <div className="item1">Título</div>
                <div className="item2"><input type="text" className="catal_largeinput" /></div>
                <div className="item3"></div>

                <div className="item1">Autoria</div>
                <div className="item2"><input type="text" className="catal_largeinput" /></div>
                <div className="item3"></div>

                <div className="item1">Veículo</div>
                <div className="item2"><input type="text" className="catal_largeinput" /></div>
                <div className="item3"></div>

                <div className="item1">Data da publicação</div>
                <div className="item2"><input type="text" className="catal_largeinput" /></div>
                <div className="item3"></div>

                <div className="item1">Palavras-chave</div>
                <div className="item2"><input type="text" className="catal_largeinput" /></div>
                <div className="item3"></div>

                <div className="item1">Nome original do arquivo</div>
                <div className="item2"><input type="text" className="catal_largeinput" /></div>
                <div className="item3"></div>

                <div className="item1">Subir arquivo</div>
                <div className="item2"><input type="file" className="catal_largeinput_file" /></div>
                <div className="item3"><div className="catal_proximo">Upload</div></div>

                <div className="itemC">Novo comentário</div>
                <div className="item2"><textarea className="catal_newcomment" /></div>
                <div className="item3"></div>

                <div className="itemC">Comentários anteriores</div>
                <div className="item2"><textarea className="catal_newcomment" /></div>
                <div className="item3"></div>

                <div className="item1"></div>
                <div className="item4"><div className="catal_botbutton">Editar</div></div>
                <div className="item4"><div className="catal_botbutton">Salvar atual</div></div>
                <div className="item4"><div className="catal_botbutton">Salvar novo</div></div>
                <div className="item3"></div>

                <div className="item1"></div>
                <div className="item4"><div className="catal_botbutton">Download</div></div>
                <div className="item4"><div className="catal_botbutton">Limpar</div></div>
                <div className="item4"><div className="catal_botbutton">Excluir</div></div>
                <div className="item3"></div>
            </div>
        </div>
    );
}
