import './adminActions.css'
import addBook from '../../../assets/addb.png'
import addStudent from '../../../assets/adds.png'
import allTransactions from '../../../assets/alltransaction.png'
import unreturned from '../../../assets/unreturned.png'

export default function(props){
    const handlePageChange = (e) => {
        window.location.href = '/' + e ;
    }
    return(
        <div className = "AdminActionsRectangle">
            <div className = "AdminActionsTitle">
                Admin actions
            </div>
            <div className = "AdminActionsMenu">
                <div className = "AdminActionsItem" onClick = {() => handlePageChange("add-book")}>
                    <div className = "AdminActionsItemImage">
                        <img src = {addBook} style = {{width : '30px', height : 'auto'}}/>
                    </div>
                    <div className = "AdminActionsItemTitle">
                        {"Add\nbook"}
                    </div>
                </div>
                {/* <div className = "AdminActionsItem">
                    <div className = "AdminActionsItemImage">
                        <img src = {unreturned} style = {{width : '30px', height : 'auto'}}/>
                    </div>
                    <div className = "AdminActionsItemTitle">
                        {"List\nbooks"}
                    </div>
                </div> */}
                <div className = "AdminActionsItem" onClick = {() => handlePageChange("add-student")}>
                    <div className = "AdminActionsItemImage">
                        <img src = {addStudent}  style = {{width : '30px', height : 'auto'}}/>
                    </div>
                    <div className = "AdminActionsItemTitle">
                        {"Add\nstudent"}
                    </div>
                </div>
                {/* <div className = "AdminActionsItem">
                    <div className = "AdminActionsItemImage">
                        <img src = {allTransactions}  style = {{width : '30px', height : 'auto'}}/>
                    </div>
                    <div className = "AdminActionsItemTitle">
                        {"List\nstudents"}
                    </div>
                </div> */}
            </div>
        </div>
    )
}