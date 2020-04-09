import React from 'react'
import './Title.scss'
import classNames from 'classnames'
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

export default Title