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
                <div className="item1"><div className="catal_anterior">{t('cataloging.previous')}</div> {t('cataloging.serial')}</div>
                <div className="item2"><input type="text" className="catal_largeinput" /></div>
                <div className="item3"><div className="catal_proximo">{t('cataloging.next')}</div></div>

                <div className="item1">{t('cataloging.title')}</div>
                <div className="item2"><input type="text" className="catal_largeinput" /></div>
                <div className="item3"></div>

                <div className="item1">{t('cataloging.author')}</div>
                <div className="item2"><input type="text" className="catal_largeinput" /></div>
                <div className="item3"></div>

                <div className="item1">{t('cataloging.vehicle')}</div>
                <div className="item2"><input type="text" className="catal_largeinput" /></div>
                <div className="item3"></div>

                <div className="item1">{t('cataloging.pubdate')}</div>
                <div className="item2"><input type="text" className="catal_largeinput" /></div>
                <div className="item3"></div>

                <div className="item1">{t('cataloging.keywords')}</div>
                <div className="item2"><input type="text" className="catal_largeinput" /></div>
                <div className="item3"></div>

                <div className="item1">{t('cataloging.originalfilename')}</div>
                <div className="item2"><input type="text" className="catal_largeinput" /></div>
                <div className="item3"></div>

                <div className="item1">{t('cataloging.fileupload')}</div>
                <div className="item2"><input type="file" className="catal_largeinput_file" /></div>
                <div className="item3"><div className="catal_upload">{t('cataloging.upload')}</div></div>

                <div className="itemC">{t('cataloging.newcomment')}</div>
                <div className="item2"><textarea className="catal_newcomment" /></div>
                <div className="item3"></div>

                <div className="itemC">{t('cataloging.previouscomments')}</div>
                <div className="item2"><textarea className="catal_newcomment" /></div>
                <div className="item3"></div>

                <div className="item1"></div>
                <div className="item4"><div className="catal_botbutton">{t('cataloging.edit')}</div></div>
                <div className="item4"><div className="catal_botbutton">{t('cataloging.saveascurrent')}</div></div>
                <div className="item4"><div className="catal_botbutton">{t('cataloging.saveasnew')}</div></div>
                <div className="item3"></div>

                <div className="item1"></div>
                <div className="item4"><div className="catal_botbutton">{t('cataloging.download')}</div></div>
                <div className="item4"><div className="catal_botbutton">{t('cataloging.clear')}</div></div>
                <div className="item4"><div className="catal_botbutton">{t('cataloging.delete')}</div></div>
                <div className="item3"></div>
            </div>
        </div>
    );
}
