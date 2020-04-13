import React from 'react'
import "./BlockTitle.scss";
import { Title } from "../index";
import PropTypes from 'prop-types';

const BlockTitle = ({ subtitle, title }) => {
  return (
    <div className="block__titles">
      <Title tag={"h1"} text={title} />
      {subtitle && <Title tag={"h3"} text={subtitle} />}

    </div>
  )
}

BlockTitle.prototype = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}

export default BlockTitle
