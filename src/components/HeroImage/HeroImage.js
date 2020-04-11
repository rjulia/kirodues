import React from 'react'
import { Parallax } from 'react-parallax';
import './HeroImage.scss'
import { Button } from 'components/';
import { Link } from 'react-router-dom';
import classNames from 'classnames'

const HeroImage = ({ link, textLink, imgUrl, text, blur = 0, strength = 500, middle }) => {

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
          strength={strength}
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

export default HeroImage
