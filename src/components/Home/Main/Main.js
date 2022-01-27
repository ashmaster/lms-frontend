import { useEffect, useState } from "react"
import AddBook from "../../../pages/AddBook/AddBook";
import AddStudent from "../../../pages/AddStudent/AddStudent";
import AllTransactions from "../../../pages/AllTransactions/allTransactions";
import IssueBook from "../../../pages/IssueBook/issueBook";
import PendingReturn from "../../../pages/PendingReturn/pending";
import ReturnBook from "../../../pages/ReturnBook/returnBook";
import InfoBar from "../InfoBar/infoBar";
import SearchBox from "../SearchBox/searchBox";

export default function() {
    const [view, setView] = useState('home');
    useEffect(() => {
        let p = window.location.pathname.split('/')[1];
        setView(p);
    },[])

    const retView = () => {
        switch(view){
            case 'home' : {
                return(<div style = {{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%'}}>
                        <InfoBar/>
                        <SearchBox type = "both"/>
                    </div>)
            }
            case 'issue-book' : {
                return(<div style = {{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%'}}>
                <IssueBook />
            </div>)
            }
            case 'return-book' : {
                return(<div style = {{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%'}}>
                <ReturnBook />
            </div>)
            }
            case 'pending-return' : {
                return(<div style = {{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%'}}>
                <PendingReturn />
            </div>)
            }
            case 'all-transactions' : {
                return(<div style = {{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%'}}>
                <AllTransactions />
            </div>)
            }
            case 'add-book' : {
                return(<div style = {{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%'}}>
                <AddBook />
            </div>)
            }

            case 'add-student' : {
                return(<div style = {{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%'}}>
                <AddStudent />
            </div>)
            }

            default : {
                return(<div style = {{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%'}}>
                        <InfoBar/>
                        <SearchBox type = "both"/>
                    </div>)
            }
        }
    }
    return(
        <>
            {retView()}
        </>
    )
}