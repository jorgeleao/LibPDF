import React from 'react';
import { useTranslation } from 'react-i18next';
import './cataloging.css';

export default function Cataloging(props) {
    const { t } = useTranslation();

    return (
        <div onClick={() => props.clickHandler()} className="cataloging_cardboard">
            <br />
            <br />
            <span style={{ fontSize: "2.5em" }}>{t('appPageTexts.part6')}</span>
            <br/>
            <div className="catal_divcontainer">
                <div className="item1"><div className="catal_anterior">{t('Anterior')}</div> {t('Patrimonio')}</div>
                <div className="item2"><input type="text" className="catal_largeinput" /></div>
                <div className="item3"><div className="catal_proximo">{t('Proximo')}</div></div>

                <div className="item1">{t('Título')}</div>
                <div className="item2"><input type="text" className="catal_largeinput" /></div>
                <div className="item3"></div>

                <div className="item1">{t('Autoria')}</div>
                <div className="item2"><input type="text" className="catal_largeinput" /></div>
                <div className="item3"></div>

                <div className="item1">{t('Veículo')}</div>
                <div className="item2"><input type="text" className="catal_largeinput" /></div>
                <div className="item3"></div>

                <div className="item1">{t('Data da publicação')}</div>
                <div className="item2"><input type="text" className="catal_largeinput" /></div>
                <div className="item3"></div>

                <div className="item1">{t('Palavras-chave')}</div>
                <div className="item2"><input type="text" className="catal_largeinput" /></div>
                <div className="item3"></div>

                <div className="item1">{t('Nome original do arquivo')}</div>
                <div className="item2"><input type="text" className="catal_largeinput" /></div>
                <div className="item3"></div>

                <div className="item1">{t('Subir arquivo')}</div>
                <div className="item2"><input type="file" className="catal_largeinput_file" /></div>
                <div className="item3"><div className="catal_proximo">{t('Upload')}</div></div>

                <div className="itemC">{t('Novo comentário')}</div>
                <div className="item2"><textarea className="catal_newcomment" /></div>
                <div className="item3"></div>

                <div className="itemC">{t('Comentários anteriores')}</div>
                <div className="item2"><textarea className="catal_newcomment" /></div>
                <div className="item3"></div>

                <div className="item1"></div>
                <div className="item4"><div className="catal_botbutton">{t('Editar')}</div></div>
                <div className="item4"><div className="catal_botbutton">{t('Salvar no atual')}</div></div>
                <div className="item4"><div className="catal_botbutton">{t('Salvar como novo')}</div></div>
                <div className="item3"></div>

                <div className="item1"></div>
                <div className="item4"><div className="catal_botbutton">{t('Download')}</div></div>
                <div className="item4"><div className="catal_botbutton">{t('Limpar')}</div></div>
                <div className="item4"><div className="catal_botbutton">{t('Excluir')}</div></div>
                <div className="item3"></div>
            </div>
        </div>
    );
}
