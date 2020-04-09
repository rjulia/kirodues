import React from 'react'
import { Parallax, Background } from 'react-parallax';
import './HeroImage.scss'

const HeroImage = () => {
  return (
    <div className="row hero-image">
      <div className="col-12">

        <Parallax
          blur={0}
          bgImage={require('../../assets/images/kirodues_centro_de_naturopatia.jpg')}
          bgImageAlt="the cat"
          strength={500}
        >

          <div className="hero-image__content" style={{ height: 'calc(100vh - 100px)' }} >
            Put some text content here - even an empty div with fixed dimensions to have a height

            for the parallax.
            </div>
        </Parallax>
      </div>
    </div>
  )
}

export default HeroImage
