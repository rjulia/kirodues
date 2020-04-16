import React, { useState, useEffect } from 'react';
import { withTranslation, useTranslation } from 'react-i18next';
import { NavLink as Link } from "react-router-dom";
import { HeaderMobile } from 'layout';
import { getTreatments } from '../../services/contenful'
import { IoIosMenu } from "react-icons/io";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import './Header.scss';
import Logo from "assets/images/kirodues_log-300x113.jpg";
import En from 'assets/images/en.png';
import Es from 'assets/images/es.alt.png';

const Header = () => {
  const { i18n, t } = useTranslation();
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [treatments, setTreatments] = useState([])

  useEffect(() => {
    const promise = getTreatments(i18n.language)

    promise
      .then(data => {
        setTreatments(data)
      }).finally(() => {

      })
  }, [i18n.language])
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  const toogleMenu = () => {
    setIsOpenMenu(!isOpenMenu)
  }
  return (
    <nav className="header__container container-fluid">

      <div className="header__logo">
        <Link
          exact to="/"><img src={Logo} alt="" />
        </Link>

      </div>
      <div className="header__menu--box d-none d-md-flex">
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
          <span onClick={() => changeLanguage('es')}><img src={Es} alt="Español" /> </span> <span onClick={() => changeLanguage('en')}> <img src={En} alt="English" /> </span>
        </div>
        <div className="header__menu--social-media">
          <ul>
            <li>
              <a href="https://www.facebook.com/KiroDues-Sevilla-109337867353126/" target="_blank" rel="noopener noreferrer"><FaFacebookF size={15} /></a>
              <a href="https://twitter.com/KiroDues" target="_blank" rel="noopener noreferrer"><FaTwitter size={15} /></a>
              <a href="https://www.instagram.com/kirodues/" target="_blank" rel="noopener noreferrer"><FaInstagram size={15} /></a>
            </li>
          </ul>
        </div>

      </div>
      <div className="header__menu--burger" onClick={() => toogleMenu()}>
        <IoIosMenu size={44} color={"#22693c"} />
      </div>
      <HeaderMobile
        isOpen={isOpenMenu}
        onToogleMenu={() => toogleMenu()}
        treatments={treatments}
        changeLanguage={changeLanguage}
      />
    </nav>
  )
}

export default withTranslation()(Header)
