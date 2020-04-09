import React from 'react'
import { Button } from 'components'
import { withTranslation, useTranslation } from 'react-i18next';
import LogoTrans from 'assets/images/kirodues_barcelona.png'
import './welcome.scss';

const Welcome = () => {
  const { t } = useTranslation();
  return (
    <div className="welcome container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <h3>{t('home.first_block.title')}</h3>
            <p>{t('home.first_block.content')}</p>
            <Button text={t('home.first_block.button')} />
          </div>
          <div className="col-12 col-md-6 welcome__logo">
            <img src={LogoTrans} alt="" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default withTranslation()(Welcome) 
