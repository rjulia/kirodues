import React from 'react'
import './Header-mobile.scss'
import classNames from 'classnames'
import { IoMdClose } from "react-icons/io";



const HeaderMobile = ({ isOpen, onToogleMenu }) => {

  let classes = classNames({
    'menu-mobile': true,
    'open': isOpen,

  })

  return (
    <div className={classes}>
      <div className="menu-mobile_content">
        <IoMdClose size={44} color="#00" onClick={() => onToogleMenu()} />
      </div>

    </div>
  )
}

export default HeaderMobile
