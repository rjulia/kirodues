import React from 'react'
import { Parallax, Background } from 'react-parallax';
import './HeroImage.scss'
import { Button } from 'components/';


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

          <div className="hero-image__container">
            <div className="hero-image__content">
              <p>Descubre un nuevo centro de salud y bienestar en Barcelona</p>
              <Button text={'Reserva cita'} />
            </div>
          </div>
        </Parallax>
      </div>
    </div>
  )
}

export default HeroImage
