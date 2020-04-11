import _ from 'lodash'
import React from 'react'
import './BoxImage.scss'
import { Link } from "react-router-dom";

const BoxImage = ({ title, thumbnail, slug }) => {
  console.log(thumbnail, title)
  return (
    <Link to={`tratamientos/${slug}`} className="boximage">
      <div className="boximage__title"><h3>{title}</h3></div>
      <img src={_.get(thumbnail, "file.url", "")} alt={thumbnail.title} />
    </Link>
  )
}

export default BoxImage
