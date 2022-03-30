import axios from "axios";
import { useState, useEffect } from "react";
import { useSnackbar } from "react-simple-snackbar";
import '../../components/Home/SearchBox/sDetail.css'
import backend from "../../const";

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


const convertDate = (d1, d2, type) => {
    const date = new Date(d1);
    const date2 = new Date(d2);
    const today = new Date();
    const day = date.getDate();
    const dow = date.getDay();
    const month = date.getMonth();
    let retValue
    const year = date.getFullYear();
    var diffDays = d2 ? parseInt((date2 - date) / (1000 * 60 * 60 * 24), 10) :parseInt((today - date) / (1000 * 60 * 60 * 24), 10);
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
        <div style={{ display: 'flex',width: '100%', flexDirection: 'row', padding: '12px 24px 12px 24px', background: '#E7E9FF', margin: '24px 0 24px 0' }}>
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%', paddingRight: '6px' }}>
                <div style={{ fontWeight: 'bold' }}>
                    {e.item.b_name} - {e.item.bookId}
                </div>
                <div style={{ fontStyle: 'italic', margin: '12px 0 12px 0' }}>
                    {e.item.s_name} ({e.item.admissionNo})
                </div>
                <div style = {{display: "flex", flexDirection:'row', justifyContent: 'space-between', width:'100%', alignItems:'center', color : e.item.date_of_return  ? "#2374e1" : "red"}}>
                    <div style={{ fontSize: '12px', fontWeight:'bold' }}>
                        {convertDate(e.item.date_of_lending, e.item.date_of_return, "date")}
                    </div>
                    <div style = {{width: '30%', border:'0.5px solid', background: '#000'}}/>
                    <div style = {{fontWeight:'bold'}}>
                        {convertDate(e.item.date_of_lending, e.item.date_of_return, "noOfDays")}
                    </div>
                    <div style = {{width: '30%', height:'1px',border:'0.5px solid', background: '#000'}}/>
                    <div style={{ fontSize: '12px', fontWeight:'bold'}}>
                        {e.item.date_of_return  ? convertDate(e.item.date_of_return, e.item.date_of_return, "date") : "?"}
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
        const response = await axios.get(`${backend}/all_transactions`)
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
        <div style={{width: '100%'}}>
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