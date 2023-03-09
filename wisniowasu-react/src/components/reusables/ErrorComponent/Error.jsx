import React from 'react'
import "./error.css"

const Error = ({message}) => {
  return (
      <div className='error-container'>
        <h2>Oh noes!</h2>
        <p>Przepraszamy, wystąpił błąd z pobieraniem zawartości strony</p>
        <p className='error__msg'>{message}</p>
      </div>
  )
}

export default Error