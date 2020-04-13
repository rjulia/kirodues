import React from 'react'
import { Parallax } from 'react-parallax';
import { useTranslation } from 'react-i18next';
import './gift.scss'
import GiftImg from 'assets/images/kirodues_tarjeta_regalo.jpg'
import { Title } from 'components';
const Gift = () => {
  const { t } = useTranslation();
  return (
    <div className="gift row">
      <div className="col-12 p-0">
        <Parallax
          blur={{ min: -30, max: 0 }}
          bgImage={GiftImg}
          bgImageAlt={'Tarjeta regalo'}
          strength={500}
        >

          <div className="hero-image__container row justify-content-end">
            <div className="hero-image__col col-12 col-md-6">
              <Title tag={"h3"} text={t('home.fourth_block.title')} />
              <p>{t('home.fourth_block.content')}</p>
            </div>
          </div>
        </Parallax>

      </div>
    </div>
  )
}

export default Gift
