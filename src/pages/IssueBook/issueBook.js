import { useEffect, useState } from "react"
import { useParams } from "react-router"
import close_icon from "../../assets/close_icon.png"
import SearchBox from "../../components/Home/SearchBox/searchBox"
import SDetail from "../../components/Home/SearchBox/sDetail";
import { useSnackbar } from 'react-simple-snackbar'
import loading_gif from '../../assets/loading.gif'
import axios from 'axios';

export default function IssueBook(props) {
    const [student, setStudent] = useState(null);
    const [bookList, setBookList] = useState([])
    const [showSearchBook, setShowSearchBook] = useState(false)
    const [openSnack, closeSnack] = useSnackbar({ position: 'top-center' })
    const [loading, setLoading] = useState()
    const { id } = useParams()

    const giveBackSDetails = e => {
        setStudent(e)
    }
    const giveBackBDetails = e => {
        if(!e)
            removeBook(e.id)
        else{
            const find = bookList.find(item => {
                if(item.bookId == e.bookId)
                    return true
            })
    
            console.log(find)
            if (find){
                setShowSearchBook(false);
                openSnack('Book already added');
            }
            else {
                setBookList(prevState => [...prevState, e])
                setShowSearchBook(false);
            }
        }
        
    };

    const closePopup = () => {
        setBookList([]);
        setShowSearchBook(false);
    }

    const removeBook = id => {
        const newBookList = bookList.filter(item => {
            if(item.bookId !== id)
                return true;
        })
        setBookList(newBookList)
    }

    const issueBooks = async () => {
        let params = {};
        params.bookList = bookList;
        params.student = student.student;
        setLoading(true)
        let res = await axios.post(`http://localhost:3001/lend_book`, params);
        const response = res.data
        if(response.status){
            setLoading(false)
            openSnack("Book issued successfully")
            setTimeout(() => {
                window.location.href = "/home"
            }, 1000)
        }
        else{
            setLoading(false)
            openSnack("Book could not be issued")
        }
        
    }
    return (
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', position: 'relative' }}>
            {bookList.length > 0 || showSearchBook ? null : <SearchBox type="student" id={id || null} giveBackDetails={giveBackSDetails} />}
            {bookList.length > 0 || showSearchBook ? <div style = {{marginLeft:'12px', marginRight:'12px'}}><SDetail studentId={student.student.admissionNo} closePopup={() => closePopup()} type="student" data={student} /></div> : null}
            {bookList.length > 0 && <div style = {{display : 'flex', flexDirection : 'column', width : '95%', borderTop : 'solid 0.5px', alignItems:'center'}}>
                { bookList.map((item, index) => {
                    return (
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between',alignItems:'center',  padding: '12px 24px 12px 24px', marginTop: '10px', border: 'solid 1px', fontSize: '18px', fontWeight: 'bold', width: '100%', borderRadius: '6px' }}>
                            {item.b_name}
                            <img onClick = {() => removeBook(item.bookId)} src={close_icon} style = {{width : "18px", height: '18px'}} />
                        </div>
                    )
                })}
            </div>
            }
            {showSearchBook ? <SearchBox type="book" giveBackDetails={giveBackBDetails} /> : null}
            {
                student && !showSearchBook ? (
                    <div>
                        <div style={{ fontWeight: 'bold', fontSize: '18px', marginTop: '10px' }} onClick={() => setShowSearchBook(true)}>Add Book</div>
                    </div>
                ) : null
            }
            {bookList.length > 0 && <div onClick={() => loading ? null : issueBooks()} style={{ position: 'absolute', bottom: 0, width: '100%', paddingTop: '10px', paddingBottom: '10px', textAlign: 'center', verticalAlign: 'middle', background: 'green', fontSize: '22px', fontWeight: 'bold', color: '#fff' }}>
                        {loading ? <img src = {loading_gif} width = {"26px"} height = {"auto"}></img> :"Issue Book"}
                    </div>}
        </div>
    )
}