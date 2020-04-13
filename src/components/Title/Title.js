import React from 'react';
import './Title.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Title = ({ tag, text, dark, small, ...others }) => {

  let titleClass = classNames({
    "title": true,
    'dark': dark,
    'small': small,
    ...others
  })

  const TagName = tag || 'h1'

  return (
    <TagName className={titleClass}>
      {text}
    </TagName>
  )
}

Title.prototype = {
  tag: PropTypes.string,
  text: PropTypes.string.isRequired,
  small: PropTypes.bool,
  dark: PropTypes.bool,
  others: PropTypes.any
}

export default Title