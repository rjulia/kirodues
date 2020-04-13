import React from 'react';
import './Comment.scss';
import { ReactComponent as CommentIcon } from "../../assets/icons/comment.svg";
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';


const Comnent = ({ text, author }) => {

  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)'
  })

  const sizeIcon = isTabletOrMobileDevice ? '35' : '60'

  return (
    <div className="comment">
      <div className="comment__icon--box">
        <span>
          <CommentIcon width={sizeIcon} height={sizeIcon} />
        </span>
      </div>
      <blockquote className="comment__content--box">
        {text}
        <footer className="comment__footer">
          <cite className="comment__cite">{author}</cite>
        </footer>
      </blockquote>
    </div>
  )
}

PropTypes.prototype = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string
}

export default Comnent
