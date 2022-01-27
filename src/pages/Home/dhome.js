import './dhome.css'
import InfoBar from '../../components/Home/InfoBar/infoBar'
import SearchBox from '../../components/Home/SearchBox/searchBox'
import Main from '../../components/Home/Main/Main'
import { useState, useEffect} from 'react'
import Sidebar from '../../components/Home/Sidebar/Sidebar'
export default function(props){
    useEffect(() => {
        let i = window.localStorage.getItem('Admin');
        console.log(i)
        if(!i){
            window.location.href = "/login"
        }
    },[])
    return(
        <div className="home">
            <div className='sidebar'>
                <Sidebar />
            </div>
            <div className='main'>
                <Main />
            </div>
        </div>
    )
}