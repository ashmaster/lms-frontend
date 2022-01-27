import './m_login.css'
import { useEffect, useState } from 'react';
import { useSnackbar } from 'react-simple-snackbar';
import axios from 'axios';
import backend from '../../const';
import logo from '../../assets/logoimg.jpeg'

export default function MLogin({view}) {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [openSnack, closeSnack] = useSnackbar({ position: 'top-center' })

    useEffect(() => {
        let i = window.localStorage.getItem('Admin');
        console.log(i)
        if(i){
            window.location.href = "/home"
        }
    },[])

    const handleSubmit = () => {
            const reqData = {
                "adminID" : email,
                "password" : pass
            }

            console.log(reqData)

            var config = {
                method: 'post',
                url: `${backend}/admin_login`,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: reqData
            };

            axios(config)
                .then(function (response) {
                    if (response.data.status === true) {

                        openSnack("Login successfull")
                        window.localStorage.setItem('Admin', 'true');
                        setTimeout(() => {
                            window.location.href = "/home"
                        }, 500)
                        

                    }
                    else {
                        openSnack("Wrong credentials")
                    }
                })
                .catch(function (error) {
                    openSnack("Wrong credentials")
                });

    }
    return (
        <div className="addStudent">
            <div className="entryFields" style = { {display: 'flex', height: '100vh', justifyContent: 'center'} }>
                <img src={logo} width = "100px" style={{alignSelf:'center', marginTop: '-20%'}}/>
                <div style={{ display: 'flex', flexDirection: 'column', marginTop: view === 'd'? null : '6%' }}>
                    Username
                    <input value={email} className="inputField" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', marginTop: '6%' }}>
                    Password
                    <input value={pass} type='password' className="inputField" onChange={(e) => setPass(e.target.value)} />
                </div>
                <div onClick={() => handleSubmit()} className="submit" style={{borderRadius: '6px' ,width: '50%', paddingTop: '10px', paddingBottom: '10px', textAlign: 'center', verticalAlign: 'middle', background: '#2374e1', fontSize: '22px', fontWeight: 'bold', color: '#fff', alignSelf: 'center', marginTop: '10%'}}>
                Login
            </div>
            </div>

            
        </div>
    )
}