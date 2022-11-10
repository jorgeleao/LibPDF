import React, { useContext } from 'react'
import { SearchModeContext } from './contexts/SearchModeContext'
import { useTranslation } from 'react-i18next';
import './SearchMode.css'

export default function SearchMode(){
    const {chkboxState, serialChange, checkboxANDChange, checkboxORChange } = useContext(SearchModeContext)
    const { t } = useTranslation();

    return(
        <form>
            <div className='SearchMode' style={chkboxState[0]?{color:'lightgray'}:{color:'black'}}>
                <div className='SearchMode-checkboxes'>
                    <label htmlFor="serialChkd" style={{color:"rgb(243, 245, 243)"}}>{t('searchMode.AND')}
                    <input name="serialChkd" type="checkbox" id="serialChkd" checked={chkboxState[0]} onChange={serialChange} />
                    </label>
                    <br />
                    <label htmlFor="titleAnd">{t('searchMode.AND')}</label>
                    <input name="titleAnd" type="checkbox" id="titleAnd" checked={chkboxState[1]} disabled={chkboxState[0]} onChange={()=>checkboxANDChange(1,2)} />
                    <label htmlFor="titleOr">&nbsp;&nbsp;{t('searchMode.OR')}</label>
                    <input name="titleOr" type="checkbox" id="titleOr" checked={chkboxState[2]} disabled={chkboxState[0]} onChange={()=>checkboxORChange(1,2)} />
                    <br />
                    <label htmlFor="authorAnd">{t('searchMode.AND')}</label>
                    <input name="authorAnd" type="checkbox" id="authorAnd" checked={chkboxState[3]} disabled={chkboxState[0]} onChange={()=>checkboxANDChange(3,4)} />
                    <label htmlFor="authorOr">&nbsp;&nbsp;{t('searchMode.OR')}</label>
                    <input name="authorOr" type="checkbox" id="authorOr" checked={chkboxState[4]} disabled={chkboxState[0]} onChange={()=>checkboxORChange(3,4)} />
                    <br />
                    <label htmlFor="publisherAnd">{t('searchMode.AND')}</label>
                    <input name="publisherAnd" type="checkbox" id="publisherAnd" checked={chkboxState[5]} disabled={chkboxState[0]} onChange={()=>checkboxANDChange(5,6)} />
                    <label htmlFor="publisherOr">&nbsp;&nbsp;{t('searchMode.OR')}</label>
                    <input name="pub Or" type="checkbox" id="publisherOr" checked={chkboxState[6]} disabled={chkboxState[0]} onChange={()=>checkboxORChange(5,6)} />
                    <br />
                    <label htmlFor="dateAnd">{t('searchMode.AND')}</label>
                    <input name="dateAnd" type="checkbox" id="dateAnd" checked={chkboxState[7]} disabled={chkboxState[0]} onChange={()=>checkboxANDChange(7,8)} />
                    <label htmlFor="dateOr">&nbsp;&nbsp;{t('searchMode.OR')}</label>
                    <input name="dateOr" type="checkbox" id="dateOr" checked={chkboxState[8]} disabled={chkboxState[0]} onChange={()=>checkboxORChange(7,8)} />
                    <br />
                    <label htmlFor="keywordsAnd">{t('searchMode.AND')}</label>
                    <input name="keywordsAnd" type="checkbox" id="keywordsAnd" checked={chkboxState[9]} disabled={chkboxState[0]} onChange={()=>checkboxANDChange(9,10)} />
                    <label htmlFor="keywordsOr">&nbsp;&nbsp;{t('searchMode.OR')}</label>
                    <input name="keywordsOr" type="checkbox" id="keywordsOr" checked={chkboxState[10]} disabled={chkboxState[0]} onChange={()=>checkboxORChange(9,10)} />
                </div>
            </div>
        </form>
    )
}
