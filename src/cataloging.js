import React from 'react';
import { useTranslation } from 'react-i18next';
import './cataloging.css';

export default function Cataloging(props) {
    const { t } = useTranslation();

    return (
        <div className="cataloging_cardboard">
            <br />
            <br />
            <span className="cataloging_pageTitle">{t('appPageTexts.part6')}</span>
            <br/>
            <div className="cataloging_divcontainer">
                <div className="cataloging_item1"></div>

                <div className="cataloging_item2 cataloging_two-upper-buttons">
                    <div className="cataloging_anterior">{t('cataloging.previous')}</div>
                    <div className="cataloging_proximo">{t('cataloging.next')}</div>
                </div>
                <div className="cataloging_item3"></div>

                <div className="cataloging_item1">{t('cataloging.serial')}</div>
                <div className="cataloging_item2"><input type="text" className="cataloging_largeinput" /></div>
                <div className="cataloging_item3"></div>

                <div className="cataloging_item1">{t('cataloging.title')}</div>
                <div className="cataloging_item2"><input type="text" className="cataloging_largeinput" /></div>
                <div className="cataloging_item3"></div>

                <div className="cataloging_item1">{t('cataloging.author')}</div>
                <div className="cataloging_item2"><input type="text" className="cataloging_largeinput" /></div>
                <div className="cataloging_item3"></div>

                <div className="cataloging_item1">{t('cataloging.vehicle')}</div>
                <div className="cataloging_item2"><input type="text" className="cataloging_largeinput" /></div>
                <div className="cataloging_item3"></div>

                <div className="cataloging_item1">{t('cataloging.pubdate')}</div>
                <div className="cataloging_item2"><input type="text" className="cataloging_largeinput" /></div>
                <div className="cataloging_item3"></div>

                <div className="cataloging_item1">{t('cataloging.keywords')}</div>
                <div className="cataloging_item2"><input type="text" className="cataloging_largeinput" /></div>
                <div className="cataloging_item3"></div>

                <div className="cataloging_item1">{t('cataloging.originalfilename')}</div>
                <div className="cataloging_item2"><input type="text" className="cataloging_largeinput" /></div>
                <div className="cataloging_item3"></div>

                <div className="cataloging_item1">{t('cataloging.fileupload')}</div>
                <div className="cataloging_item2"><input type="file" className="cataloging_largeinput_file" /></div>
                <div className="cataloging_item3"><div className="cataloging_upload">{t('cataloging.upload')}</div></div>

                <div className="cataloging_itemC">{t('cataloging.newcomment')}</div>
                <div className="cataloging_item2"><textarea className="cataloging_newcomment" /></div>
                <div className="cataloging_item3"></div>

                <div className="cataloging_itemC">{t('cataloging.previouscomments')}</div>
                <div className="cataloging_item2"><textarea className="cataloging_newcomment" /></div>
                <div className="cataloging_item3"></div>

                <div className="cataloging_item1"></div>
                <div className="cataloging_item4"><div className="cataloging_botbutton">{t('cataloging.edit')}</div></div>
                <div className="cataloging_item4"><div className="cataloging_botbutton">{t('cataloging.saveascurrent')}</div></div>
                <div className="cataloging_item4"><div className="cataloging_botbutton">{t('cataloging.saveasnew')}</div></div>
                <div className="cataloging_item3"></div>

                <div className="cataloging_item1"></div>
                <div className="cataloging_item4"><div className="cataloging_botbutton">{t('cataloging.download')}</div></div>
                <div className="cataloging_item4"><div className="cataloging_botbutton">{t('cataloging.clear')}</div></div>
                <div className="cataloging_item4"><div className="cataloging_botbutton">{t('cataloging.delete')}</div></div>
                <div className="cataloging_item3"></div>
            </div>
        </div>
    );
}
