import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import './BibliForm.css'
import { BibliformContext } from './contexts/BibliformContext.js'
import { useForm } from "react-hook-form";


export default function BibliForm(){
    const { t } = useTranslation();
    //const { register, handleSubmit, onSubmit} = useContext(BibliformContext)

    function submitClick(){
        document.getElementById("form01").submit()
    }

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);

    return(
        <form id="form01" onSubmit = { handleSubmit(onSubmit) } >
            <div className="bibliform-parent">
                <div>{t('bibliform.serial')}</div>
                <div className="bibliform-twosix"><input name="serial" {...register("serial", {required:  false})} type="text" className="bibliform-intext" /></div>

                <div>{t('bibliform.title')}</div>
                <div className="bibliform-twosix"><input name="title" {...register("title", {required:  false})} type="text" className="bibliform-intext" /></div>
                
                <div>{t('bibliform.author')}</div>
                <div className="bibliform-twosix"><input name="author" {...register("author", {required:  false})} type="text" className="bibliform-intext" /></div>
                
                <div>{t('bibliform.publisher')}</div>
                <div className="bibliform-twosix"><input name="publisher" {...register("publisher", {required:  false})} type="text" className="bibliform-intext" /></div>
                
                <div>{t('bibliform.pubdate')}</div>
                <div>{t('bibliform.from')}</div>
                <div><input name="from" {...register("from", {required:  false})} type="text" className="bibliform-intextSmall" /></div>
                <div>{t('bibliform.to')}</div>
                <div><input name="to" {...register("to", {required:  false})} type="text" className="bibliform-intextSmall" /></div>

                <div>{t('bibliform.keywords')}</div>
                <div className="bibliform-twosix"><input name="keywords" {...register("keywords", {required:  false})} type="text" className="bibliform-intext" /></div>
            </div>
            <button onClick={submitClick}>SUBMIT</button>
        </form>
    )
}
