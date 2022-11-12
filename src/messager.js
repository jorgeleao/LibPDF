
import './messager.css'


export default function Messager(props){
    return(
        <div className="messager messager-colorsInfo">
            <span>{props.message}</span>
        </div>
    )
}