import React, {Fragment, useState} from "react"
import {Link} from "react-router-dom"

import classes from './Navbar.module.css'

import CartButton from "../UI/CartButton/CartButton"

import iconCart from '../../assets/shared/desktop/icon-cart.svg'
import logo from '../../assets/shared/desktop/logo.svg'
import iconHamburger from '../../assets/shared/tablet/icon-hamburger.svg'

const Navbar = () => {
  const [navMobile, setNavMobile] = useState(true)

  const toggleNav = () => {
    setNavMobile(!navMobile)
  }

  return (
    <Fragment>

      <nav className={`${classes['nav']}`}>
        <ul className={`${classes['nav-list']}`}>
          <li
            className={`${classes['nav-list__item']}`}
            style={{cursor: 'pointer'}}
            onClick={toggleNav}
          >
            <img src={iconHamburger} alt="hamburger"/>
          </li>
          <li className={`${classes['nav-list__item']}`}>
            <Link to={'/homepage'} className={`${classes['nav-list__item-link']}`}>
              <img src={logo} alt="audiophile"/>
            </Link>
          </li>
          <li className={`${classes['nav-list__item']}`}>
            <CartButton>
              <img src={iconCart} alt=""/>
            </CartButton>
          </li>
        </ul>
      </nav>

      {navMobile &&
        <nav className={`${classes['nav']} ${classes['mobile']}`}>
          <ul className={`${classes['nav-list']} ${classes['mobile']}`}>
            <li className={`${classes['nav-list__item']} ${classes['mobile']}`}>
              <Link
                to={'/homepage'}
                className={`${classes['nav-list__item-link']} ${classes['mobile-link']}`}
                onClick={toggleNav}
              >
                Home
              </Link>
            </li>
            <li className={`${classes['nav-list__item']} ${classes['mobile']}`}>
              <Link
                to={'/headphones'}
                className={`${classes['nav-list__item-link']} ${classes['mobile-link']}`}
                onClick={toggleNav}
              >
                Headphones
              </Link>
            </li>
            <li className={`${classes['nav-list__item']} ${classes['mobile']}`}>
              <Link
                to={'/speakers'}
                className={`${classes['nav-list__item-link']} ${classes['mobile-link']}`}
                onClick={toggleNav}
              >
                Speakers
              </Link>
            </li>
            <li className={`${classes['nav-list__item']} ${classes['mobile']}`}>
              <Link
                to={'/earphones'}
                className={`${classes['nav-list__item-link']} ${classes['mobile-link']}`}
                onClick={toggleNav}
              >
                Earphones
              </Link>
            </li>
          </ul>
        </nav>
      }

    </Fragment>
  )
}

export default Navbar
