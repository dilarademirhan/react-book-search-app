import React from 'react'

const SearchBox = ({search, setSearch, fetchBooks}) => {
  return (
    <div className = "search-box">
      <h1 className='header'>Book Search App</h1>
      <input className= "input-box" type = "text" placeholder = "Book Title..."
      value = { search } onChange = { e => setSearch(e.target.value) } 
      onKeyDown = { fetchBooks }/>
    </div>
  )
}

export default SearchBox