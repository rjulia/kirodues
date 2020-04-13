import React from 'react'
import "./Footer.scss"
import { withTranslation, useTranslation } from 'react-i18next';

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

import Logo from "assets/images/kirodues_centro_de_naturopatia_barcelona_salud_bienestar_transparente.png";
const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="container-fluid footer__container">
      <div className="container">
        <div className="row footer__box-links">
          <div className="col-12 col-md-4">
            <h2>{t('footer.contact_us')}</h2>
            <span className="tel">
              627 907 876
              </span>
            <a href="mailto:info@kirodues.es">info@kirodues.es</a>
          </div>
          <div className="col-12 col-md-4">
            <h2>{t('footer.visit_us')}</h2>
            <span className="address">
              Calle Mare de Deu del Pilar 12 <br />
              08003 Barcelona
            </span>
          </div>
          <div className="col-12 col-md-4">
            <div className="footer__social-media">
              <ul>
                <li>
                  <a href="https://www.facebook.com/KiroDues-1157150637669356/" target="_blank" rel="noopener noreferrer"><FaFacebookF size={15} /></a>


                </li>
                <li>
                  <a href="https://twitter.com/KiroDues" target="_blank" rel="noopener noreferrer"><FaTwitter size={15} /></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/kirodues/" target="_blank" rel="noopener noreferrer"><FaInstagram size={15} /></a>
                </li>
              </ul>
            </div>
            <div className="footer__logo">
              <img src={Logo} alt="" />
            </div>
          </div>
        </div>
        <div className="footer__box-legal">
          <ul>
            <li>{t('footer.privacy')}</li> |
            <li>{t('footer.cookies')}</li> |
            <li>{t('footer.legal')}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default withTranslation()(Footer)
