import _ from 'lodash'
import React from 'react'
import './BoxImage.scss'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const BoxImage = ({ title, thumbnail, slug }) => {

  return (
    <Link to={slug} className="boximage">
      <div className="boximage__title"><h3>{title}</h3></div>
      <img src={_.get(thumbnail, "file.url", "")} alt={_.get(thumbnail, "title")} />
    </Link>
  )
}

BoxImage.prototype = {
  slug: PropTypes.string,
  title: PropTypes.string,
  thumbnail: PropTypes.object
}

export default BoxImage
