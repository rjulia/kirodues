import React from 'react'
import './Button.scss';
import classNames from 'classnames'

const Button = ({ text, small }) => {
  let btnClass = classNames({
    'btn': true,
    'btn-small': small
  })

  return (
    <span className={btnClass} onClick={() => console.log()}>
      {text}
    </span>
  )
}

export default Button