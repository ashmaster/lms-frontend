import './topBar.css'
import titleBarIcon from '../../assets/titleBarIcon.png'
import back from '../../assets/back.png'
import { useEffect } from 'react'

export default function (props) {
    useEffect(() => {
        console.log(loc)
    }, [])
    const headerTitle = {
        "issue-book": "Issue Book",
        "home": "FGMHS",
        "login": "FGMHS",
        "return-book": "Return Book",
        "pending-return": "Unreturned Books",
        "all-transactions": "All Transactions"
    }
    const loc = window.location.href.split('/')[3]
    return (
        <div className="topBarRow">
            <div className="topBarTitle">
                {(loc === "login" || loc === "home") ? null :
                    <img src={back} className="titleBarIcon" alt="logo" style={{ marginRight: '12px' }} onClick = {() => {window.history.back()}}/>}
                {headerTitle[loc]}
            </div>
            {(loc === "login" || loc === "home") ? <div className="titleBarIcon">
                <img src={titleBarIcon} className="titleBarIcon" alt="logo" />
            </div> : <div style={{ width: "36px" }} />}
        </div>
    )
}