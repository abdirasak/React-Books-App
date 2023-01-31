import React, { useState } from 'react'

function BookCreate({ onSubmit }) {
  const [title, setTitle] = useState('')

  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(title)
    setTitle('')
  }
  return (
    <div className='book-create'>
      <h3>Add a book</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="" style={{ color: 'white', fontSize: '18px' }}>Title</label>
        <input className='input' value={title} onChange={handleChange} />
        <button className='button'>Create</button>
      </form>
    </div>
  )
}

export default BookCreate