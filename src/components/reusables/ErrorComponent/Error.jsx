import React from 'react'
import "./error.css"

const Error = ({message}) => {
  return (
      <div>
        <div className="title_box">
            <h1 className="title_box_text">
                Błąd
            </h1>
        </div>
        <div className='error-container'>
            <h2>Oh noes!</h2>
            <p>Przepraszamy, wystąpił błąd z pobieraniem zawartości strony</p>
            <p className='error__msg'>{message}</p>
        </div>
      </div>
  )
}

export default Error