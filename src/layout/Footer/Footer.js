import React from 'react';
import "./Footer.scss";
import { withTranslation, useTranslation } from 'react-i18next';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Logo from "assets/images/kirodues_centro_de_naturopatia_barcelona_salud_bienestar_transparente.png";
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="container-fluid footer__container">
      <div className="container">
        <div className="row footer__box-links">
          <div className="col-12 col-md-4">
            <h2>{t('footer.contact_us')}</h2>
            <span className="tel">
              626 404 896
              </span>
            <a href="mailto:info@kirodues.es">info@kirodues.es</a>
          </div>
          <div className="col-12 col-md-4">
            <h2>{t('footer.visit_us')}</h2>
            <span className="address">
              Parque Empresarial Nuevo Torneo<br />
            C/ Arquitectura, n˚5, Torre 8, Planta 9ª, Módulo 1<br />
              Sevilla
            </span>
          </div>
          <div className="col-12 col-md-4">
            <div className="footer__social-media">
              <ul>
                <li>
                  <a href="https://www.facebook.com/KiroDues-Sevilla-109337867353126/" target="_blank" rel="noopener noreferrer"><FaFacebookF size={15} /></a>


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
            <li> <Link to={'/legal/politica-de-cookies'}>{t('footer.cookies')}</Link> </li> |
            <li> <Link to={'/legal/aviso-legal'}>{t('footer.legal')}</Link> </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default withTranslation()(Footer)
