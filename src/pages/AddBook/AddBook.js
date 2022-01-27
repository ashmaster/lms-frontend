import './AddBook.css'
import { useState } from 'react';
import { useSnackbar } from 'react-simple-snackbar';
import axios from 'axios';
import backend from '../../const';

export default function AddBook() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [bookId, setBookId] = useState('');
    const [price, setPrice] = useState(0);
    const [yop, setYop] = useState(0);
    const [genre, setGenre] = useState('');
    const [lang, setLang] = useState('');
    const [openSnack, closeSnack] = useSnackbar({ position: 'top-center' })

    const handleSubmit = () => {
        if (title === '' || author === '', bookId === '' || price === 0 || yop === 0 || genre === '') {
            openSnack("Please fill all the details")
        }
        else {
            const reqData = {
                "b_name": title,
                "author": author,
                "bookId": bookId,
                "price": parseInt(price),
                "y_o_publish": parseInt(yop),
                "genre": genre,
                "language": lang,
                "bookAvailable": true
            }

            var config = {
                method: 'post',
                url: `${backend}/create_book`,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: reqData
            };

            axios(config)
                .then(function (response) {
                    if (response.data.status === true) {
                        openSnack("Book added successfully")
                        setTitle('');
                        setAuthor('');
                        setYop(0);
                        setPrice(0);
                        setGenre('');
                        setBookId('');
                    }
                    else {
                        openSnack("Could not add book")
                    }
                })
                .catch(function (error) {
                    openSnack("Could not add book")
                });
        }

    }
    return (
        <div className="addBook">
            <div className="entryFields">
                
                <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>

                    <div style={{ display: 'flex', flexDirection: 'column', marginTop: '6%', width: '65%', marginRight: '4%' }}>
                        Book ID
                        <input value={bookId} className="inputField" onChange={(e) => setBookId(e.target.value)} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', marginTop: '6%', width: '25%', marginLeft: '5%' }}>
                        Language
                        <select value={lang} className="inputField" onChange={(e) => setLang(e.target.value)} >
                            <option>E</option>
                            <option>M</option>
                            <option>H</option>
                        </select>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', marginTop: '6%' }}>
                    Book Title
                    <input value={title} className="inputField" onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', marginTop: '6%' }}>
                    Author
                    <input value={author} className="inputField" onChange={(e) => setAuthor(e.target.value)} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', marginTop: '6%', width: '45%', marginRight: '4%' }}>
                        Price
                        <input value={price} className="inputField" onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', marginTop: '6%', width: '45%', marginLeft: '5%' }}>
                        Year of publication
                        <input value={yop} className="inputField" onChange={(e) => setYop(e.target.value)} />
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', marginTop: '6%' }}>
                    Genre
                    <input value={genre} className="inputField" onChange={(e) => setGenre(e.target.value)} />
                </div>
            </div>

            <div onClick={() => handleSubmit()} className="submit" style={{ borderRadius: '6px' ,width: '50%', paddingTop: '10px', paddingBottom: '10px', textAlign: 'center', verticalAlign: 'middle', background: '#2374e1', fontSize: '22px', fontWeight: 'bold', color: '#fff' }}>
                Add Book
            </div>
        </div>
    )
}