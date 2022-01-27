import { useEffect, useState } from "react"

export default function () {
    const [page, setPage] = useState('home');

    useEffect(() => {
        let p = window.location.pathname.split('/')[1];
        setPage(p);
    },[])

    const isSelected = items => {
        if(items.includes(page))
            return true 
        else    
            return false
    }
    const goTo = item => {
        window.location.href = item
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '9%', width: '100%' }}>


                <div onClick={() => goTo('/home')} style={{display: 'inline', padding: '7px', paddingLeft: '14px', width: '80%', verticalAlign: 'middle', borderRadius: '5px', backgroundColor: isSelected(['','home']) ? '#2374e1' : '#fff', cursor: 'pointer'}}>
                    <p style={{margin: '0px', fontWeight: 'bold', color: isSelected(['','home']) ? '#fff' : '#000'}}>Home</p>
                </div>
                <div onClick={() =>goTo('/issue-book')} style={{display: 'inline', padding: '7px', paddingLeft: '14px', width: '80%', verticalAlign: 'middle', borderRadius: '5px', backgroundColor: isSelected(['issue-book']) ? '#2374e1' : '#fff', cursor: 'pointer'}}>
                    <p style={{margin: '0px', fontWeight: 'bold', color: isSelected(['issue-book']) ? '#fff' : '#000'}}>Issue Book</p>
                </div>
                <div onClick={() =>goTo('/return-book')} style={{display: 'inline', padding: '7px', paddingLeft: '14px', width: '80%', verticalAlign: 'middle', borderRadius: '5px', backgroundColor: isSelected(['return-book']) ? '#2374e1' : '#fff', cursor: 'pointer'}}>
                    <p style={{margin: '0px', fontWeight: 'bold', color: isSelected(['return-book']) ? '#fff' : '#000'}}>Return Book</p>
                </div>
                <div onClick={() =>goTo('/pending-return')} style={{display: 'inline', padding: '7px', paddingLeft: '14px', width: '80%', verticalAlign: 'middle', borderRadius: '5px', backgroundColor: isSelected(['pending-return']) ? '#2374e1' : '#fff', cursor: 'pointer'}}>
                    <p style={{margin: '0px', fontWeight: 'bold', color: isSelected(['pending-return']) ? '#fff' : '#000'}}>Unreturned</p>
                </div>
                <div onClick={() =>goTo('/all-transactions')} style={{display: 'inline', padding: '7px', paddingLeft: '14px', width: '80%', verticalAlign: 'middle', borderRadius: '5px', backgroundColor: isSelected(['all-transactions']) ? '#2374e1' : '#fff', cursor: 'pointer'}}>
                    <p style={{margin: '0px', fontWeight: 'bold', color: isSelected(['all-transactions']) ? '#fff' : '#000'}}>All Transactions</p>
                </div>
                <div onClick={() =>goTo('/add-book')} style={{display: 'inline', padding: '7px', paddingLeft: '14px', width: '80%', verticalAlign: 'middle', borderRadius: '5px', backgroundColor: isSelected(['add-book']) ? '#2374e1' : '#fff', cursor: 'pointer'}}>
                    <p style={{margin: '0px', fontWeight: 'bold', color: isSelected(['add-book']) ? '#fff' : '#000'}}>Add Book</p>
                </div>
                <div onClick={() =>goTo('/add-student')} style={{display: 'inline', padding: '7px', paddingLeft: '14px', width: '80%', verticalAlign: 'middle', borderRadius: '5px', backgroundColor: isSelected(['add-student']) ? '#2374e1' : '#fff', cursor: 'pointer'}}>
                    <p style={{margin: '0px', fontWeight: 'bold', color: isSelected(['add-student']) ? '#fff' : '#000'}}>Add Student</p>
                </div>

        </div>
    )
}