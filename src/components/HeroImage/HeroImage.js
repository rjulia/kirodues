import React from 'react';
import { Parallax } from 'react-parallax';
import './HeroImage.scss';
import { Button } from 'components/';
import { Link } from 'react-router-dom';
import classNames from 'classnames'
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';

const HeroImage = ({ link, textLink, imgUrl, text, blur = 0, strength = 500, middle }) => {
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)'
  })
  let classes = classNames({
    'hero-image': true,
    'row': true,
    'middle': middle
  })

  return (
    <div className={classes}>
      <div className="col-12">
        <Parallax
          blur={blur}
          bgImage={imgUrl}
          bgImageAlt={text}
          strength={isTabletOrMobileDevice ? 0 : strength}
          bgClassName={'bg'}
        >
          <div className="hero-image__container">
            <div className="hero-image__content">
              <p>{text}</p>
              <Link to={link}>
                <Button
                  small={middle}
                  text={textLink} />
              </Link>
            </div>
          </div>
        </Parallax>
      </div>
    </div>
  )
}

HeroImage.prototype = {
  link: PropTypes.string,
  textLink: PropTypes.string,
  imgUrl: PropTypes.string,
  text: PropTypes.string,
  blur: PropTypes.number,
  strength: PropTypes.number,
  middle: PropTypes.bool
}

export default HeroImage
