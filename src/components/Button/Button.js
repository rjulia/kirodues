import React from 'react';
import './Button.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

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

Button.prototype = {
  text: PropTypes.string.isRequired,
  small: PropTypes.bool
}


export default Button