import _ from 'lodash'
import React from 'react'
import './BoxImage.scss'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const BoxImage = ({ name, thumbnail, slug, job }) => {

  return (
    <Link to={slug} className="boximage">
      <div className="boximage__title">
        <h3>{name}</h3>
        {job && <p>{job}</p>}
      </div>
      <img src={_.get(thumbnail, "file.url", "")} alt={_.get(thumbnail, "title")} />
    </Link>
  )
}

BoxImage.prototype = {
  slug: PropTypes.string,
  name: PropTypes.string,
  job: PropTypes.string,
  thumbnail: PropTypes.object
}

export default BoxImage
