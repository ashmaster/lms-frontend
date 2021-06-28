import './searchBox.css'
import SDetail from './sDetail'
import { useState, useEffect } from 'react'
export default function(props){

    const [searchStudent, setSearchStudent] = useState(false)


    return(
        <div className = "SearchBoxRectangle">
            <div className = "SearchBoxTitle">
                Search student
            </div>
            <div className = "SearchBoxContainer">
                <input className = "SearchBoxBar" placeholder = {"Admission No."}/>
                <div className = "SearchBoxButton" onClick = {() => setSearchStudent(true)}>
                    Search
                </div>
            </div>
            {searchStudent ? <SDetail /> : null}
            <div className = "SearchBoxTitle">
                Search student
            </div>
            <div className = "SearchBoxContainer">
                <input className = "SearchBoxBar" placeholder = {"Book ID"}/>
                <div className = "SearchBoxButton">
                    Search
                </div>
            </div>
        </div>
    )
}