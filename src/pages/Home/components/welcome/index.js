import React from 'react'
import { Button, Title } from 'components'
import { withTranslation, useTranslation } from 'react-i18next';
import LogoTrans from 'assets/images/kirodues_barcelona.png'
import './welcome.scss';
import { Link } from 'react-router-dom';

const Welcome = () => {
  const { t } = useTranslation();
  return (
    <div className="welcome container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <Title tag={'h3'} text={t('home.first_block.title')}></Title>
            <p>{t('home.first_block.content')}</p>
            <Link to="/nosotros">

              <Button small text={t('home.first_block.button')} />
            </Link>
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
