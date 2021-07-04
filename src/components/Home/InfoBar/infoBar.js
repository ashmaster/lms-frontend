import "./infoBar.css"
import axios from 'axios';
import { useSnackbar } from "react-simple-snackbar";
import { useState, useEffect } from "react";
import loading_icon from '../../../assets/loading.gif'
export default function(props){
    const [loading, setLoading] = useState(true);
    const [homePageData, setHomePageData] = useState({})
    const [openSnack, closeSnack] = useSnackbar({position : 'top-center'});

    useEffect(async() => {
        const res = await axios.get(`http://localhost:3001/homepage_data`);
        const result = res.data;
        if(result.status){
            setHomePageData(result.data);
            setLoading(false);
        }
        else{
            openSnack(`Could not get details`);
        }
    })
    if(!loading)
    return(
        <div className = "InfoBarRectangle">
            <div className = "InfoBarColumn">
                <div className = "InfoBarNumbers">
                    {homePageData.student_count}
                </div>
                <div className = "InfoBarTitle">
                    students
                </div>
            </div>
            <div className = "InfoBarColumn">
                <div className = "InfoBarNumbers">
                    {homePageData.book_count}
                </div>
                <div className = "InfoBarTitle">
                    books
                </div>
            </div>
            <div className = "InfoBarColumn">
                <div className = "InfoBarNumbers">
                    {homePageData.no_of_transactions}
                </div>
                <div className = "InfoBarTitle">
                    transactions
                </div>
            </div>
            <div className = "InfoBarColumn">
                <div className = "InfoBarNumbers">
                    {homePageData.no_of_unreturned}
                </div>
                <div className = "InfoBarTitle">
                    unreturned
                </div>
            </div>
        </div>
    )
    else
        return(
            <div className = "InfoBarRectangle">
                 <img src = {loading_icon} style = {{width : '28px', height : 'auto', alignSelf:'center'}} />
            </div>
        )
}