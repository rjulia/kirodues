import React from 'react'
import './Review.scss';

const Review = ({ link, imgData }) => {
  return (
    <div className="review">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={imgData.file.url} alt={imgData.title || ''} />
      </a>
    </div>
  )
}

export default Review
