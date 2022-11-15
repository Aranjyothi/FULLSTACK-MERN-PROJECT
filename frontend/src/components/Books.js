import axios from "axios";

import { useEffect, useRef, useState } from "react";

import booksService from '../services/books-service'

function Books ({ user }) {

    const [books, setBooks] = useState([])

    let notesRef = useRef()

    const getAllBooks = async () => {

        try {
            
            const response = await booksService.index()

            setBooks(response.data.books)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllBooks()
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault()

        let newBook = {
            notes: notesRef.current.value,
            user
        }

        try {
console.log(1)
            const response = await booksService.add(newBook)

            setBooks([...books, response.data.create])
            notesRef.current.value = ''

        } catch (error) {
            console.log(error)
        }

        
    }

    return ( 
        <div>
            <h1>Add a New Book to you collection</h1>

            <ol style={{ 
                display: 'flex', 
                flexDirection: 'column',
                height: '100%',
                padding: '20px'
            }}>
                {Books.map(b => 
                    <li key={b._id}> {b.notes}</li>
                )}
            </ol>

            <form onSubmit={handleSubmit}>
                <input type="text" ref={notesRef} /><br /><br />
                <button>Add Book</button>
            </form>
        </div>
    );
}

export default Books ;