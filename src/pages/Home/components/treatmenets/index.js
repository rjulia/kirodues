import React from 'react'
import { Title, Button } from 'components'
import { withTranslation, useTranslation } from 'react-i18next';
import './treaments.scss';
import Osteopatia from "assets/images/kirodues_osteopatia-1.jpg";
import Masajes from "assets/images/kirodues_spa_barcelona_masajes.jpg";
import Spa from "assets/images/kirodues_tratamientos_spa.jpg";
import Ayurvera from "assets/images/kirodues_tratamientos_pindas-tibet.jpg";




const Treatments = () => {

  const { t } = useTranslation();
  return (
    <div className="treatments">
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
        <Button small text={t('home.second_block.button')} />
      </div>
    </div>
  )
}

export default withTranslation()(Treatments)
