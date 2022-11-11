import './alert.css'

export default function Alert(props){
    return(
        <div className={props.loggerMessage[1]?"alert alert-info":"alert alert-fail"}>
            <span className="alert-message">{props.loggerMessage[0]}</span>
        </div>
    )
}