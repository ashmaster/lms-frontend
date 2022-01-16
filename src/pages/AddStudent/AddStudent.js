import './AddStudent.css'
import { useState } from 'react';
import { useSnackbar } from 'react-simple-snackbar';
import axios from 'axios';
import backend from '../../const';

export default function AddStudent() {
    const [name, setName] = useState('');
    const [clas, setClas] = useState('');
    const [admissionNo, setAdmissionNo] = useState('');
    const [division, setDivision] = useState(0);
    const [openSnack, closeSnack] = useSnackbar({ position: 'top-center' })

    const handleSubmit = () => {
        if (name === '' || clas === '', admissionNo === '' || division === '') {
            openSnack("Please fill all the details")
        }
        else {
            const reqData = {
                "s_name": name,
                "admissionNo": admissionNo,
                "class": clas,
                "division": division,
            }

            console.log(reqData)

            var config = {
                method: 'post',
                url: `${backend}/create_student`,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: reqData
            };

            axios(config)
                .then(function (response) {
                    if (response.data.status === true) {

                        openSnack("Student added successfully")
                        setName('');
                        setClas('');
                        setDivision('');
                        setAdmissionNo('');
                    }
                    else {
                        openSnack("Could not add student")
                    }
                })
                .catch(function (error) {
                    openSnack("Could not add student")
                });
        }

    }
    return (
        <div className="addAddStudent">
            <div className="entryFields">
                <div style={{ display: 'flex', flexDirection: 'column', marginTop: '6%' }}>
                    Admission No
                    <input value={admissionNo} className="inputField" onChange={(e) => setAdmissionNo(e.target.value)} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', marginTop: '6%' }}>
                    Name
                    <input value={name} className="inputField" onChange={(e) => setName(e.target.value)} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', marginTop: '6%', width: '45%', marginRight: '4%' }}>
                        Class

                        <select value={clas} className="inputField" onChange={(e) => setClas(e.target.value)}>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </select>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', marginTop: '6%', width: '45%', marginLeft: '5%' }}>
                        Division
                        <select value={division} className="inputField" onChange={(e) => setDivision(e.target.value)}>
                            <option>A</option>
                            <option>B</option>
                            <option>C</option>
                            <option>D</option>
                        </select>
                    </div>
                </div>
            </div>

            <div onClick={() => handleSubmit()} className="submit" style={{ width: '100%', paddingTop: '10px', paddingBottom: '10px', textAlign: 'center', verticalAlign: 'middle', background: 'green', fontSize: '22px', fontWeight: 'bold', color: '#fff' }}>
                Add Student
            </div>
        </div>
    )
}