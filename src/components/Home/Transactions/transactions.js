import './transactions.css'
import issueBook from '../../../assets/issueBook.png'
import returnBook from '../../../assets/return.png'
import allTransactions from '../../../assets/alltransaction.png'
import unreturned from '../../../assets/unreturned.png'
import {
    useHistory,
    useLocation
  } from "react-router-dom";

export default function(props){

    const handlePageChange = (e) => {
        window.location.href = '/' + e ;
    }
    return(
        <div className = "TransactionsRectangle">
            <div className = "TransactionsTitle">
                Transactions
            </div>
            <div className = "TransactionsMenu">
                <div className = "TransactionsItem" onClick = {() => handlePageChange("issue-book")}>
                    <div className = "TransactionsItemImage">
                        <img src = {issueBook} style = {{width : '30px', height : 'auto'}}/>
                    </div>
                    <div className = "TransactionsItemTitle">
                        {"Issue\nbook"}
                    </div>
                </div>
                <div className = "TransactionsItem" onClick = {() => handlePageChange("return-book")}>
                    <div className = "TransactionsItemImage">
                        <img src = {returnBook} style = {{width : '30px', height : 'auto'}}/>
                    </div>
                    <div className = "TransactionsItemTitle">
                        {"Return\nbook"}
                    </div>
                </div>
                <div className = "TransactionsItem" onClick = {() => handlePageChange("pending-return")}>
                    <div className = "TransactionsItemImage">
                        <img src = {unreturned} style = {{width : '30px', height : 'auto'}}/>
                    </div>
                    <div className = "TransactionsItemTitle">
                        {"Unreturned\nbooks"}
                    </div>
                </div>
                <div className = "TransactionsItem" onClick = {() => handlePageChange("all-transactions")}>
                    <div className = "TransactionsItemImage">
                        <img src = {allTransactions}  style = {{width : '30px', height : 'auto'}}/>
                    </div>
                    <div className = "TransactionsItemTitle">
                        {"All\ntransactions"}
                    </div>
                </div>
            </div>
        </div>
    )
}