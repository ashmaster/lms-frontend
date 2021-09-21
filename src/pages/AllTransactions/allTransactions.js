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


const convertDate = (d, type) => {
    const date = new Date(d);
    const today = new Date();
    const day = date.getDate();
    const dow = date.getDay();
    const month = date.getMonth();
    let retValue
    const year = date.getFullYear();
    var diffDays = parseInt((today - date) / (1000 * 60 * 60 * 24), 10);
    if(type === "date"){
        retValue = day + "  " + MONTHS[month]
    }
    else{
        retValue = diffDays;
    }
    return retValue
}

const Card = (e) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', padding: '12px 24px 12px 24px', background: '#E7E9FF', margin: '24px 0 24px 0' }}>
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%', paddingRight: '6px' }}>
                <div style={{ fontWeight: 'bold' }}>
                    {e.item.b_name} - {e.item.bookId}
                </div>
                <div style={{ fontStyle: 'italic', margin: '12px 0 12px 0' }}>
                    {e.item.s_name} ({e.item.admissionNo})
                </div>
                <div style = {{display: "flex", flexDirection:'row', justifyContent: 'space-between', width:'100%', alignItems:'center', color : e.item.date_of_return  ? "green" : "red"}}>
                    <div style={{ fontSize: '12px', fontWeight:'bold' }}>
                        {convertDate(e.item.date_of_lending, "date")}
                    </div>
                    <div style = {{width: '30%', border:'0.5px solid', background: '#000'}}/>
                    <div style = {{fontWeight:'bold'}}>
                        {convertDate(e.item.date_of_lending, "noOfDays")}
                    </div>
                    <div style = {{width: '30%', height:'1px',border:'0.5px solid', background: '#000'}}/>
                    <div style={{ fontSize: '12px', fontWeight:'bold'}}>
                        {e.item.date_of_return  ? convertDate(e.item.date_of_return, "date") : "?"}
                    </div>
                </div>
                {e.item.remark && e.item.remark !== "" &&
                    <div style = {{fontFamily: "sans-serif", fontSize: "12px", margin: '12px 0 12px 0', fontStyle: 'italic'}}>
                        Remarks: {e.item.remark}
                    </div>
                }
            </div>


        </div>
    )
}
export default function AllTransactions(props) {
    const [bookList, setBookList] = useState([])
    const [openSnack, closeSnack] = useSnackbar({ position: 'top-center' })
    useEffect(async () => {
        const response = await axios.get(`http://localhost:3001/all_transactions`)
        const res = response.data;
        if (res.status) {
            const resArray = res.transactions.slice().reverse()
            console.log(resArray)
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