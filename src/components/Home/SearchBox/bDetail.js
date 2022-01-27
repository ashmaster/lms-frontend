import { useState, useEffect } from 'react'
import './sDetail.css'
import titleBarIcon from '../../../assets/titleBarIcon.png'
import close_icon from '../../../assets/close_icon.png'
import loading_icon from '../../../assets/loading.gif'
import axios from 'axios';
import { useSnackbar } from 'react-simple-snackbar'
import backend from '../../../const'
import { propTypes } from 'react-bootstrap/esm/Image'

export default function ({ bookId, searchType, closePopup, giveBackDetails, type, data }) {
    const [bookDetails, setBookDetail] = useState({});
    const [loading, setLoading] = useState(true);
    const [openSnack, closeSnack] = useSnackbar({ position: 'top-center' })
    const [bookID, setBookID] = useState('');
    const [sbnList, setSbnList] = useState([]);
    const loc = window.location.href.split('/')[3]
    useEffect(() => {
        setBookID(bookId)
    }, [bookId])
    useEffect(async () => {
        if(bookID !== ''){
            if (data) {
                setBookDetail(data);
                setLoading(false)
            }
    
            else {
                if (!searchType) {
                    console.log(bookID)
                    const res = await axios.get(`${backend}/book/${bookID}`);
                    const result = res.data;
                    if (result.status) {
                        setBookDetail(result.data);
                        setLoading(false);
                        if (loc === "return-book")
                            giveBackDetails(result.data)
                    }
                    else {
                        openSnack('Book not found');
                        closePopup()
                    }
                    console.log(result)
                }
                else {
                    console.log(bookID)
    
                    const res = await axios.get(`${backend}/books/${bookID}`);
                    const result = res.data;
                    if (result.status) {
                        setSbnList(result.data)
                        setLoading(false);
                    }
                    else {
                        openSnack('Book not found');
                        closePopup()
                        closeBookPopup()
                    }
                    console.log(result)
                }
            }
        }
        

    }, [bookID])

    const addBook = () => {
        giveBackDetails(bookDetails)
    }

    const closeBookPopup = () => {
        closePopup()
        setBookID('');
        setSbnList([])
    }
    const isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;

    const returnBook = () => {
        window.location.href = "/return-book/" + bookId
    }
    if (sbnList.length !== 0) {
        return (
            <div style={{ background: '#fff', width: '100%', maxHeight: '300px', overflowY: 'scroll', marginLeft: isMobile ? '-24px' : null, paddingLeft: '24px', paddingRight: '24px', marginTop: '18px', paddingTop: '10px' }}>
                <div onClick={closeBookPopup} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <img src={close_icon} style={{ width: "18px", height: 'auto' }} />
                </div>
                {!loading ? sbnList.map((item, index) => {
                    return (
                        <div className="sDetailRectangle">
                            <div className="sDetailDetails" onClick = {() => {setBookDetail(item); setSbnList([])}}>
                            {index !== 0 ? <div style = {{width: "100%", height: "1px", backgroundColor: '#000', marginTop: '10px', marginBottom: '10px'}}/> : null}
                                <div className="sDetailName">
                                    {item.b_name}
                                </div>
                                <div className="sDetailUnder">
                                    <div>
                                        {item.author}, {item.y_o_publish}
                                    </div>
                                </div>
                                <div className="sDetailUnder">
                                    <div className="sDetailIssued">
                                        Rs {item.price}
                                    </div>
                                    <div className="sDetailIssued">
                                        {item.language || null}
                                    </div>
                                    <div className="sDetailUnreturned" style={{ background: item.bookAvailable ? "#A5FFAE" : "#FFAAA5" }}>
                                        {item.bookAvailable ? "Available" : "Not Available"}
                                    </div>
                                </div>
                                {index !== 0 ? <div style = {{marginBottom: '30px'}}/> : null}
                            </div>
                            
                        </div>
                    )
                })

                    : (
                        <img src={loading_icon} style={{ width: '28px', height: 'auto', alignSelf: 'center', marginLeft: '50%' }} />
                    )}
            </div>
        )
    }
    else {
        return (
            <div style={{ background: '#fff', width: '100%', marginLeft: isMobile ? '-24px' : null, paddingLeft: '24px', paddingRight: '24px', marginTop: '18px', paddingTop: '10px' }}>
                <div onClick={closePopup} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <img src={close_icon} style={{ width: "18px", height: 'auto' }} />
                </div>
                {!loading ?
                    <div className="sDetailRectangle">
                        <div className="sDetailDetails">
                            <div className="sDetailName">
                                {bookDetails.b_name}
                            </div>
                            <div className="sDetailUnder">
                                <div>
                                    {bookDetails.author}, {bookDetails.y_o_publish}
                                </div>
                            </div>
                            <div className="sDetailUnder">
                                <div className="sDetailIssued">
                                    Rs {bookDetails.price}
                                </div>
                                <div className="sDetailUnreturned" style={{ background: bookDetails.bookAvailable ? "#A5FFAE" : "#FFAAA5" }}>
                                    {bookDetails.bookAvailable ? "Available" : "Not Available"}
                                </div>
                            </div>
                        </div>
                        {type !== "book" ? <div className="sDatailBGroup">
                            <div className="sDetailButton">
                                More details
                            </div>
                            {!bookDetails.bookAvailable && <div className="sDetailButton" onClick={() => returnBook()}>
                                Return book
                            </div>}
                        </div> : (bookDetails.bookAvailable && loc !== "return-book") ? (
                            <div className="sDatailBGroup" onClick={() => addBook()}>
                                <div className="sDetailButton">
                                    Add
                                </div>
                            </div>
                        ) : (
                            <div style={{ width: '64px' }} />
                        )}
                    </div>
                    : (
                        <img src={loading_icon} style={{ width: '28px', height: 'auto', alignSelf: 'center', marginLeft: '50%' }} />
                    )}
            </div>
        )
    }

}