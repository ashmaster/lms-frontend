import SearchBox from "../../components/Home/SearchBox/searchBox"
import { useParams } from "react-router"
import { useEffect, useState } from "react";
import loading_gif from '../../assets/loading.gif'
import { useSnackbar } from "react-simple-snackbar";
import axios from 'axios'
const MONTHS = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC"
]

const DAY = [
    "MON",
    "TUE",
    "WED",
    "THU",
    "FRI",
    "SAT",
    "SUN"
]
export default function ReturnBook(props) {
    const { id } = useParams();
    const [openSnack, closeSnack] = useSnackbar({ position: 'top-center' })
    const [lastTransaction, setLastTransation] = useState(null);
    const [bookDetails, setBookDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    
    const giveBackDetails = (e) => {
        if (e) {
            setBookDetails(e);
            console.log(e)
            let lastTransaction = e.transactions.find(item => {
                if (item.date_of_return === null)
                    return true
            })
            setLastTransation(lastTransaction)
        }
        else {
            setBookDetails(e);
            setLastTransation(e)
        }
    }

    const convertDate = d => {
        const date = new Date(d);
        const today = new Date();
        const day = date.getDate();
        const dow = date.getDay();
        const month = date.getMonth();
        const year = date.getFullYear();
        var diffDays = parseInt((date - today) / (1000 * 60 * 60 * 24), 10);
        const retValue = day + "  " + MONTHS[month] + "  " + year + " | " + DAY[dow] + " | "  + diffDays + " days ago";
        return retValue
    }

    const returnBooks = async () => {
        let params = {};
        params.bookList = new Array(bookDetails);
        params.student = lastTransaction;
        setLoading(true)
        let res = await axios.post(`http://localhost:3001/return_book`, params);
        let response = res.data;
        if(response.status){
            setLoading(false)
            openSnack("Book returned successfully")
            setTimeout(() => {
                window.location.href = "/home"
            }, 1000)
        }
        else{
            setLoading(false)
            openSnack("Book could not be returned")
        }
    }
    return (
        <div>
            {<SearchBox type="book" id={id || null} giveBackDetails={giveBackDetails} />}
            {lastTransaction && (
                <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '24px', paddingRight: '24px', background: '#E7E9FF', paddingBottom: '10px' }}>
                    <p style={{ fontWeight: 'bold', fontSize: '18px', fontFamily: 'Roboto', marginBottom: '0px' }}>Student Details</p>
                    <div style={{}}>
                        <div style={{ fontStyle: 'italic', fontSize: '18px', fontFamily: 'Roboto' }}>
                            {lastTransaction.s_name} {"("}{lastTransaction.admissionNo}{")"}
                        </div>
                        <div>
                            <p style={{ fontWeight: 'bold', fontSize: '18px', fontFamily: 'Roboto', marginBottom: '0px' }}>Issued on </p>
                            <div style={{ fontStyle: 'italic', fontSize: '18px', fontFamily: 'Roboto' }}>
                                {convertDate(lastTransaction.date_of_lending)}
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {
                lastTransaction && (
                    <div onClick={() => loading ? null : returnBooks()} style={{ position: 'absolute', bottom: 0, width: '100%', paddingTop: '10px', paddingBottom: '10px', textAlign: 'center', verticalAlign: 'middle', background: 'green', fontSize: '22px', fontWeight: 'bold', color: '#fff' }}>
                        {loading ? <img src = {loading_gif} width = {"26px"} height = {"auto"}></img> :"Return Book"}
                    </div>
                )
            }
        </div>
    )
}