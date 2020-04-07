import React from 'react'
import './Header.scss'
import Logo from "../assets/images/kirodues_log-300x113.jpg";
import { NavLink as Link, } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";


const Header = () => {
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
                About us
              </Link>
            </li>
            <li>
              <Link to="/tratamientos">
                Tatamientos
              </Link>
            </li>
            <li>
              <Link to="/colaboradores">
                colaboradores
              </Link>
            </li>
            <li>
              <Link to="/colaboradores">
                Contacto
              </Link>
            </li>

          </ul>
        </div>
        <div className="header__menu--language">
          <span>ES</span> | <span>EN</span>
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

export default Header
