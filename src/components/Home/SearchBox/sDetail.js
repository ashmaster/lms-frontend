import { useState, useEffect } from 'react'
import './sDetail.css'
import titleBarIcon from '../../../assets/titleBarIcon.png'
import close_icon from '../../../assets/close_icon.png'
import loading_icon from '../../../assets/loading.gif'
import axios from 'axios';
import { useSnackbar } from 'react-simple-snackbar'
import backend from '../../../const'

export default function ({studentId, closePopup, giveBackDetails, type, data}) {
    const [studentDetails, setStudentDetails] = useState({});
    const [loading, setLoading] = useState(true);
    const [openSnack, closeSnack] = useSnackbar({position : 'top-center'})

    useEffect(async () => {
        if(data){
            setStudentDetails(data);
            setLoading(false)
        }
            
        else{
            const res = await axios.get(`${backend}/student/${studentId}`);
            const result = res.data;
            if(result.status){
                setStudentDetails(result.data);
                setLoading(false);
                giveBackDetails(result.data);
            }
            else{
                openSnack(result.msg);
                closePopup()
            }
            console.log(result)
        }
        
    },[studentId])

    const issueBook = () => {
        window.location.href = "/issue-book/" + studentId
    }
    const isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;


    return (
        <div style = {{background:'#fff', width:'100%', marginLeft: isMobile ? '-24px' : null, paddingLeft:'24px', paddingRight:'24px', marginTop:'18px', paddingTop:'10px'}}>
            <div onClick = {closePopup} style= {{display:'flex', justifyContent:'flex-end'}}>
                <img src={close_icon} style = {{width : "18px", height: 'auto'}} />
            </div>
            {!loading ? 
                <div className="sDetailRectangle">
                    <div style={{display: 'flex', flexDirection: 'row', width: '50%'}}>
                    <div className="sDetailImage">
                        <img src={titleBarIcon} style={{ width: "42px", height: 'auto' }} />
                    </div>
                    <div className="sDetailDetails">
                        <div className="sDetailName">
                            {studentDetails.student.s_name}
                        </div>
                        <div className="sDetailUnder">
                            <div style={{ marginRight: '10px', fontWeight: 'bold' }}>
                                {studentId},
                            </div>
                            <div>{studentDetails.student.division}
                            </div>
                        </div>
                        <div className="sDetailUnder">
                            <div className="sDetailIssued">
                                {studentDetails.no_of_transactions} issued
                            </div>
                            <div className="sDetailUnreturned">
                                {studentDetails.no_of_unreturned} unreturned
                            </div>
                        </div>
                    </div>
                    </div>
                    {type !== "student" ? <div className="sDatailBGroup">
                        <div className="sDetailButton">
                            More details
                        </div>
                        <div className="sDetailButton" onClick = {() => issueBook()}>
                            Issue book
                        </div>
                    </div> : <div style = {{width : "64px"}}/>}

                </div>
            : (
                <img src = {loading_icon} style = {{width : '28px', height : 'auto', alignSelf:'center', marginLeft:'50%'}} />
            )}
        </div>
    )
}