import React from 'react';
import './HeaderMobile.scss';
import classNames from 'classnames';
import { IoMdClose } from "react-icons/io";
import { NavLink as Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import En from 'assets/images/en.png';
import Es from 'assets/images/es.alt.png';

const HeaderMobile = ({ isOpen, onToogleMenu, treatments, changeLanguage }) => {
  const { t } = useTranslation();

  let classes = classNames({
    'menu-mobile': true,
    'open': isOpen,

  })

  return (
    <div className={classes}>
      <div className="menu-mobile_content">
        <IoMdClose size={30} color="#00" onClick={() => onToogleMenu()} />
        <div className="menu-mobile--menu">
          <ul>
            <li className="frist_level">
              <Link onClick={() => onToogleMenu()} to="/nosotros">
                {t('menu.aboutus')}
              </Link>
            </li>
            <li className="frist_level">
              <Link onClick={() => onToogleMenu()} to="/packs">
                {t('menu.discount_packs')}
              </Link>
            </li>
            <li className="frist_level">
              <Link onClick={() => onToogleMenu()} to="/tratamientos">
                {t('menu.treatments')}
              </Link>
              <ul>
                {treatments && treatments.map(treatment => (
                  <Link
                    key={treatment.sys.id}
                    onClick={() => onToogleMenu()}
                    to={`/tratamientos/${treatment.fields.slug}`}>

                    <li >
                      {treatment.fields.sortTreatment}
                    </li>
                  </Link>
                ))}
              </ul>
            </li>
            <li className="frist_level">
              <Link onClick={() => onToogleMenu()} to="/colaboradores">
                {t('menu.collaborators')}
              </Link>
            </li>
            <li className="frist_level">
              <Link onClick={() => onToogleMenu()} to="/contacto">
                {t('menu.contact')}
              </Link>
            </li>

          </ul>
          <div className="menu-mobile--language">
            <span
              onClick={() => { changeLanguage('es') }}><img src={Es} alt="Español" /> </span>
            <span
              onClick={() => { changeLanguage('en') }}> <img src={En} alt="English" /> </span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default HeaderMobile
