import './topBar.css'
import titleBarIcon from '../../assets/titleBarIcon.png'

export default function(props){
    return(
        <div className = "topBarRow">
            <div className= "topBarTitle">
                FGMHS
            </div>
            <div className = "titleBarIcon">
                <img src = {titleBarIcon} className="titleBarIcon" alt="logo"/>
            </div>
        </div>
    )
}