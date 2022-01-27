import './topBar.css'
import titleBarIcon from '../../assets/titleBarIcon.png'
import back from '../../assets/back.png'
import { useEffect } from 'react'
import Logo from '../../assets/logoimg.jpeg'

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
    if(window.location.pathname == "/login"){
        return <></>
    }
    else{
        return (
            <div className="topBarRow" style={(window.location.pathname == "/login" && !window.matchMedia("only screen and (max-width: 760px)").matches) ? {maxHeight: '10vh'} : {}}>
                <div className="topBarTitle">
                    {(loc === "login" || loc === "home" || loc === "" || !window.matchMedia("only screen and (max-width: 760px)").matches) ? <img src={Logo} className="titleBarIcon" alt="logo" style={{ marginRight: '12px' }} />:
                        <img src={back} className="titleBarIcon" alt="logo" style={{ marginRight: '12px' }} onClick = {() => {window.history.back()}}/>}
                    {window.matchMedia("only screen and (max-width: 760px)").matches ? headerTitle[loc] : "FGMHS"}
                </div>
                {(loc === "home" || loc === "" || !window.matchMedia("only screen and (max-width: 760px)").matches) ? <div className="titleBarIcon" onClick={() => handleLogout()}>
                    <p>Logout</p>
                </div> : <div style={{ width: "36px" }} />}
            </div>
        )
    }
    
}