import React from 'react'
import { Title, Button } from 'components'
import { useTranslation } from 'react-i18next';
import './treamentsHome.scss';
import Osteopatia from "assets/images/kirodues_osteopatia-1.jpg";
import Masajes from "assets/images/kirodues_spa_barcelona_masajes.jpg";
import Spa from "assets/images/kirodues_tratamientos_spa.jpg";
import Ayurvera from "assets/images/kirodues_tratamientos_pindas-tibet.jpg";
import { Link } from 'react-router-dom';




const Treatments = () => {

  const { t } = useTranslation();
  return (
    <div className="treatments__home row">

      <Title tag={'h3'} text={t('home.second_block.title')} />
      <div className="treatments__pictures">
        <div className="row">
          <div className="col-12 col-md-3">
            <span>{t('home.second_block.treatment')}</span>
            <img src={Spa} alt="" />
          </div>
          <div className="col-12 col-md-3">
            <span>{t('home.second_block.massage')}</span>
            <img src={Masajes} alt="" />
          </div>
          <div className="col-12 col-md-3">
            <span>{t('home.second_block.osteo')}</span>
            <img src={Osteopatia} alt="" /></div>
          <div className="col-12 col-md-3">
            <span>{t('home.second_block.ayurvera')}</span>
            <img src={Ayurvera} alt="" />
          </div>
        </div>
      </div>
      <div className="treatments__button--box">
        <Link to="/tratamientos">
          <Button small text={t('home.second_block.button')} />
        </Link>
      </div>
    </div>
  )
}

export default Treatments
