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
        "": "FGMHS",
        "return-book": "Return Book",
        "pending-return": "Unreturned Books",
        "all-transactions": "All Transactions",
        "add-book": "Add Book",
        "add-student": "Add Student"
    }
    const handleLogout = () => {
        window.localStorage.removeItem('Admin');
        setTimeout(() => {
            window.location.href = "login";
        }, 500)
    }
    const loc = window.location.href.split('/')[3]
    return (
        <div className="topBarRow">
            <div className="topBarTitle">
                {(loc === "login" || loc === "home" || loc === "") ? null :
                    <img src={back} className="titleBarIcon" alt="logo" style={{ marginRight: '12px' }} onClick = {() => {window.history.back()}}/>}
                {headerTitle[loc]}
            </div>
            {(loc === "home" || loc === "") ? <div className="titleBarIcon" onClick={() => handleLogout()}>
                <p>Logout</p>
            </div> : <div style={{ width: "36px" }} />}
        </div>
    )
}