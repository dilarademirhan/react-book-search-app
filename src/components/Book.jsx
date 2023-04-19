import React, { useState } from 'react';
import Detail from './Detail'

const Book = ({ book }) => { 

  const [show, setShow] = useState(false)

  return (
    <div className='column'>
      <div className='single-book'>
        <img className='book-cover'
          src = { book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail }
          alt = 'Book Cover' />
        <p className='title'> { book.volumeInfo.title } </p>
        <p className='author-name'> { book.volumeInfo.authors } </p>
        <button className='details-btn' onClick = { () => setShow(true) } onBlur={() => setShow(false)}> 
          See book details </button>
        <Detail show={ show } book={ book } />
      </div>
    </div>
  )
}

export default Book
