import React from 'react'
import { withTranslation, useTranslation } from 'react-i18next';
import './Header.scss'
import Logo from "../assets/images/kirodues_log-300x113.jpg";
import { NavLink as Link, } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";


const Header = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };
  return (
    <nav className="header__container container-fluid">

      <div className="header__logo">
        <Link
          exact to="/">    <img src={Logo} alt="" />
        </Link>

      </div>
      <div className="header__menu--box">
        <div className="header_menu--menu">
          <ul>
            <li>
              <Link to="/nosotros">
                {t('menu.aboutus')}
              </Link>
            </li>
            <li>
              <Link to="/packs">
                {t('menu.discount_packs')}
              </Link>
            </li>
            <li>
              <Link to="/tratamientos">
                {t('menu.treatments')}
              </Link>
            </li>
            <li>
              <Link to="/colaboradores">
                {t('menu.collaborators')}
              </Link>
            </li>
            <li>
              <Link to="/contacto">
                {t('menu.contact')}
              </Link>
            </li>

          </ul>
        </div>
        <div className="header__menu--language">
          <span onClick={() => changeLanguage('es')}>ES</span> | <span onClick={() => changeLanguage('en')}>EN</span>
        </div>
        <div className="header__menu--social-media">
          <ul>
            <li>
              <a href="https://www.facebook.com/KiroDues-1157150637669356/" target="_blank" rel="noopener noreferrer"><FaFacebookF size={15} /></a>
              <a href="https://twitter.com/KiroDues" target="_blank" rel="noopener noreferrer"><FaTwitter size={15} /></a>
              <a href="https://www.instagram.com/kirodues/" target="_blank" rel="noopener noreferrer"><FaInstagram size={15} /></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default withTranslation()(Header)
