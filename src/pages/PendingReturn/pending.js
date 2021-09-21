import axios from "axios";
import { useState, useEffect } from "react";
import { useSnackbar } from "react-simple-snackbar";
import '../../components/Home/SearchBox/sDetail.css'

const MONTHS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
]

const DAY = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun"
]


const convertDate = d => {
    const date = new Date(d);
    const today = new Date();
    const day = date.getDate();
    const dow = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
    var diffDays = parseInt((today - date) / (1000 * 60 * 60 * 24), 10);
    const retValue = day + "  " + MONTHS[month] + "  " + year + " | " + DAY[dow] + " | " + diffDays + " days ago";
    return retValue
}

const Card = (e) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', padding: '12px 24px 12px 24px', background: '#E7E9FF', margin: '24px 0 24px 0' }}>
            <div style={{ display: 'flex', flexDirection: 'column', width: '70%', paddingRight: '6px' }}>
                <div style={{ fontWeight: 'bold' }}>
                    {e.item.b_name} - {e.item.bookId}
                </div>
                <div style={{ fontStyle: 'italic', margin: '12px 0 12px 0' }}>
                    {e.item.s_name} ({e.item.admissionNo})
                </div>
                <div style={{ fontSize: '12px' }}>
                    {convertDate(e.item.date_of_lending)}
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', width: '30%' }}>
                <div className="sDetailButton" onClick={() => {window.location.href = 'return-book/' + e.item.bookId}}>
                    Return book
                </div>
            </div>

        </div>
    )
}
export default function PendingReturn(props) {
    const [bookList, setBookList] = useState([])
    const [openSnack, closeSnack] = useSnackbar({ position: 'top-center' })
    useEffect(async () => {
        const response = await axios.get(`http://localhost:3001/pending_return`)
        const res = response.data;
        if (res.status) {
            const resArray = res.transactions
            setBookList(resArray);
        }
        else {
            openSnack('Sorry could not retrieve list')
        }

    }, [])
    return (
        <div>
            {
                bookList.map((item) => {
                    return (
                        <Card item={item} />
                    )

                })
            }
        </div>
    )
}