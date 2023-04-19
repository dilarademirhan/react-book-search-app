import React from 'react'

function Detail( {show, book} ) {
  
  return (
    <>
      <div className={ show ? 'modal modal-show' : 'modal modal-hide'} >
        <div className='modal-content'>
         <div className='modal-side'>
            <img className='book-cover-detail'
                src = { book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail }
                alt = 'Book Cover' />
          </div>
          <div className='modal-side'>
            <p className='title'> { book.volumeInfo.title } </p>
            <p className='author-name'> { book.volumeInfo.authors } </p>
            <p className='book-detail'> { book.volumeInfo.description } </p>
            <p style={ {fontSize: '0.7rem'}}> { book.volumeInfo.publishedDate } </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Detail