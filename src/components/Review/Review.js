import React from 'react';
import './Review.scss';
import PropTypes from 'prop-types';


const Review = ({ link, imgData }) => {
  return (
    <div className="review">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={imgData.file.url} alt={imgData.title || ''} />
      </a>
    </div>
  )
}

Review.prototype = {
  link: PropTypes.string.isRequired,
  imgData: PropTypes.object
}

export default Review
