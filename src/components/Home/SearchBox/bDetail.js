import { useState, useEffect } from 'react'
import './sDetail.css'
import titleBarIcon from '../../../assets/titleBarIcon.png'
import close_icon from '../../../assets/close_icon.png'
import loading_icon from '../../../assets/loading.gif'
import axios from 'axios';
import { useSnackbar } from 'react-simple-snackbar'
import { propTypes } from 'react-bootstrap/esm/Image'

export default function ({ bookId, closePopup, giveBackDetails, type, data }) {
    const [bookDetails, setBookDetail] = useState({});
    const [loading, setLoading] = useState(true);
    const [openSnack, closeSnack] = useSnackbar({ position: 'top-center' })
    const loc = window.location.href.split('/')[3]
    useEffect(async () => {
        if (data) {
            setBookDetail(data);
            setLoading(false)
        }

        else {
            const res = await axios.get(`http://localhost:3001/book/${bookId}`);
            const result = res.data;
            if (result.status) {
                setBookDetail(result.data);
                setLoading(false);
                if(loc === "return-book")
                    giveBackDetails(result.data)
            }
            else {
                openSnack('Book not found');
                closePopup()
            }
            console.log(result)
        }

    }, [bookId])

    const addBook = () => {
        giveBackDetails(bookDetails)
    }

    const returnBook = () => {
        window.location.href = "/return-book/" + bookId
    }

    return (
        <div style={{ background: '#fff', width: '100vw', marginLeft: '-24px', paddingLeft: '24px', paddingRight: '24px', marginTop: '18px', paddingTop: '10px' }}>
            <div onClick={closePopup} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <img src={close_icon} style={{ width: "18px", height: 'auto' }} />
            </div>
            {!loading ?
                <div className="sDetailRectangle">
                    <div className="sDetailImage">
                        <img src={titleBarIcon} style={{ width: "42px", height: 'auto' }} />
                    </div>
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
                        <div className="sDatailBGroup" onClick = {() => addBook()}>
                            <div className="sDetailButton">
                                Add book
                            </div>
                        </div>
                    ) : (
                        <div style = {{width : '64px'}}/>
                    )}
                </div>
                : (
                    <img src={loading_icon} style={{ width: '28px', height: 'auto', alignSelf: 'center', marginLeft: '50%' }} />
                )}
        </div>
    )
}