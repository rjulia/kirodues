import React from 'react'
import './Button.scss';

const Button = ({ text }) => {
  return (
    <span className="button" onClick={() => console.log()}>
      {text}
    </span>
  )
}

export default Button