import './adminActions.css'
import issueBook from '../../../assets/issueBook.png'
import returnBook from '../../../assets/return.png'
import allTransactions from '../../../assets/alltransaction.png'
import unreturned from '../../../assets/unreturned.png'

export default function(props){
    return(
        <div className = "AdminActionsRectangle">
            <div className = "AdminActionsTitle">
                Admin actions
            </div>
            <div className = "AdminActionsMenu">
                <div className = "AdminActionsItem">
                    <div className = "AdminActionsItemImage">
                        <img src = {issueBook} style = {{width : '30px', height : 'auto'}}/>
                    </div>
                    <div className = "AdminActionsItemTitle">
                        {"Add\nbook"}
                    </div>
                </div>
                <div className = "AdminActionsItem">
                    <div className = "AdminActionsItemImage">
                        <img src = {returnBook} style = {{width : '30px', height : 'auto'}}/>
                    </div>
                    <div className = "AdminActionsItemTitle">
                        {"Search\nbook"}
                    </div>
                </div>
                <div className = "AdminActionsItem">
                    <div className = "AdminActionsItemImage">
                        <img src = {unreturned} style = {{width : '30px', height : 'auto'}}/>
                    </div>
                    <div className = "AdminActionsItemTitle">
                        {"List\nbooks"}
                    </div>
                </div>
                <div className = "AdminActionsItem">
                    <div className = "AdminActionsItemImage">
                        <img src = {allTransactions}  style = {{width : '30px', height : 'auto'}}/>
                    </div>
                    <div className = "AdminActionsItemTitle">
                        {"Add\nstudent"}
                    </div>
                </div>
                <div className = "AdminActionsItem">
                    <div className = "AdminActionsItemImage">
                        <img src = {allTransactions}  style = {{width : '30px', height : 'auto'}}/>
                    </div>
                    <div className = "AdminActionsItemTitle">
                        {"Search\nstudent"}
                    </div>
                </div>
                <div className = "AdminActionsItem">
                    <div className = "AdminActionsItemImage">
                        <img src = {allTransactions}  style = {{width : '30px', height : 'auto'}}/>
                    </div>
                    <div className = "AdminActionsItemTitle">
                        {"List\nstudents"}
                    </div>
                </div>
            </div>
        </div>
    )
}