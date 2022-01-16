import './login.css'
import { useEffect, useState } from 'react';
import { useSnackbar } from 'react-simple-snackbar';
import axios from 'axios';
import backend from '../../const';

export default function Login() {
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
        <div className="addAddStudent">
            <div className="entryFields">
                <div style={{ display: 'flex', flexDirection: 'column', marginTop: '6%' }}>
                    Email
                    <input value={email} className="inputField" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', marginTop: '6%' }}>
                    Password
                    <input value={pass} className="inputField" onChange={(e) => setPass(e.target.value)} />
                </div>
                
            </div>

            <div onClick={() => handleSubmit()} className="submit" style={{ width: '100%', paddingTop: '10px', paddingBottom: '10px', textAlign: 'center', verticalAlign: 'middle', background: 'green', fontSize: '22px', fontWeight: 'bold', color: '#fff' }}>
                Login
            </div>
        </div>
    )
}