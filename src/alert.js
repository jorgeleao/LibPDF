import './alert.css'

export default function Alert(props){
    return(
        <div className="alert">
            <span className="alert-message">{props.loggerMessage}</span>
        </div>
    )
}