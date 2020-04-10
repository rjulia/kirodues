import React from 'react'
import './Comment.scss'
import { ReactComponent as CommentIcon } from "../../assets/icons/comment.svg";
const Comnent = ({ text, author }) => {
  return (
    <div className="comment">
      <div className="comment__icon--box">
        <span>
          <CommentIcon width="60" height="60" />
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

export default Comnent
