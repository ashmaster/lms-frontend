import './searchBox.css'
import SDetail from './sDetail'
import { useState, useEffect } from 'react'
import BDetail from './bDetail'
export default function (props) {

    const [searchStudent, setSearchStudent] = useState(false)
    const [studentId, setStudentId] = useState('');
    const [searchBook, setSearchBook] = useState(false)
    const [bookId, setBookId] = useState('');


    useEffect(() => {
        if(props.type === "student" && props.id){
            setStudentId(props.id);
            setSearchStudent(true)
        }
        if(props.type === "book" && props.id){
            setBookId(props.id);
            setSearchBook(true)
        }
    },[])

    const closePopup = () => {
        setSearchStudent(false)
        setSearchBook(false)
        if(props.type === "student")
            props.giveBackDetails(null)
        if(props.type === "book")
            props.giveBackDetails(null)
    };

    const giveBackDetails = (e) => {
        if(props.type === "student" || props.type === "book")
            props.giveBackDetails(e)

    }

    const handleSInput = e => {
        setSearchStudent(false)
        setStudentId(e.target.value)
    }

    const handleBInput = e => {
        setSearchBook(false);
        setBookId(e.target.value)
    }
    return (
        <div className="SearchBoxRectangle">
            {(props.type === "student" || props.type === "both") && (
                <div>
                    <div className="SearchBoxTitle">
                        Search student
                    </div>
                    <div className="SearchBoxContainer">
                        <input value = {studentId} onChange={(e) => handleSInput(e)} className="SearchBoxBar" placeholder={"Admission No."} />
                        <div className="SearchBoxButton" onClick={() => setSearchStudent(true)}>
                            Search
                        </div>
                    </div>
                    {searchStudent ? <SDetail studentId={studentId} closePopup={closePopup} giveBackDetails = { giveBackDetails } type = {props.type}/> : null}
                </div>
            )}
            {(props.type === "book" || props.type === "both") && (
                <div>
                    <div className="SearchBoxTitle">
                        Search book
                    </div>
                    <div className="SearchBoxContainer">
                        <input value = {bookId} onChange = {e => handleBInput(e)} className="SearchBoxBar" placeholder={"Book ID"} />
                        <div className="SearchBoxButton" onClick={() => setSearchBook(true)}>
                            Search
                        </div>
                    </div>
                    {searchBook ? <BDetail bookId={bookId} closePopup= {closePopup} giveBackDetails = { giveBackDetails } type = {props.type} /> : null}
                </div>
            )}

        </div>
    )
}