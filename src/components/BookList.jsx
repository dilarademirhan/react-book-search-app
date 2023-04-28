import React, { useState } from 'react'
import axios from 'axios'
import Book from './Book'
import SearchBox from './SearchBox'

const BookList = () => {
  const [books, setBooks] = useState([])
  const [search, setSearch] = useState('')

  const fetchBooks = (event) => {
    if(event.key === 'Enter'){
        axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=' + import.meta.env.VITE_API_KEY)
        .then(response => setBooks(response.data.items))
        .catch(error => console.log(error))
    }
  }

  return (
    <>
      <SearchBox search = { search } setSearch = { setSearch } fetchBooks = { fetchBooks } />
      <div className='book-list'>
        <ul>
          { books.map((book) => (
            <Book book = { book } key = { book.id } />
          ))}
        </ul>
      </div>
    </>
  )
}

export default BookList