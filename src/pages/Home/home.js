import {useState, useEffect} from 'react';
import "./home.css"
import InfoBar from '../../components/Home/InfoBar/infoBar';
import SearchBox from '../../components/Home/SearchBox/searchBox';
import Transactions from '../../components/Home/Transactions/transactions';
import AdminActions from '../../components/Home/AdminActions/adminActions';

export default function(props){
    return(
        <div className= "Home">
            <InfoBar/>
            <SearchBox type = "both"/>
            <Transactions/>
            <AdminActions/>
        </div>
    )
}

