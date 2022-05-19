import React, {Fragment, useState} from "react"
import {Link, useMatch, useResolvedPath} from "react-router-dom"
import {useSelector} from "react-redux"

import classes from './Navbar.module.css'
import iconCart from '../../assets/shared/desktop/icon-cart.svg'
import logo from '../../assets/shared/desktop/logo.svg'
import iconHamburger from '../../assets/shared/tablet/icon-hamburger.svg'

import CartButton from "../UI/CartButton/CartButton"
import CategoriesList from "../CategoriesList/CategoriesList"

function CustomLink({ children, to}) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Fragment>
      <Link
        className={`${classes['nav-list__item-link']}`}
        style={{ color: match ? "var(--orange)" : ""}}
        to={to}
      >
        {children}
      </Link>
    </Fragment>
  );
}

const Navbar = () => {
  const [navMobile, setNavMobile] = useState(false)
  const totalQuantity = useSelector(state => state.cart.totalQuantity)

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
            <Link to={'/homepage'} className={`${classes['nav-list__item-link']}`} >
              <img src={logo} alt="audiophile"/>
            </Link>
          </li>
          <li className={`${classes['nav-list__item-desktop']}`}>
            <CustomLink to="/homepage" >
              home
            </CustomLink>
          </li>
          <li className={`${classes['nav-list__item-desktop']}`}>
            <CustomLink
              to={'/products/headphones'}
              className={`${classes['nav-list__item-link']}`}
            >
              headphones
            </CustomLink>
          </li>
          <li className={`${classes['nav-list__item-desktop']}`}>
            <CustomLink
              to={'/products/speakers'}
              className={`${classes['nav-list__item-link']}`}
            >
              speakers
            </CustomLink>
          </li>
          <li className={`${classes['nav-list__item-desktop']}`}>
            <CustomLink
              to={'/products/earphones'}
              className={`${classes['nav-list__item-link']}`}
            >
              earphones
            </CustomLink>
          </li>
          <li className={`${classes['nav-list__item']}`}>
            <CartButton>
              <img src={iconCart} alt=""/>
              {totalQuantity > 0 &&
                <span className={`${classes['badge']}`}>{totalQuantity}</span>
              }
            </CartButton>
          </li>
        </ul>
      </nav>

      {navMobile &&
        <div className={`${classes['nav']} ${classes['mobile']}`}>
          <CategoriesList show={toggleNav} />
          <div className={`${classes['background']}`} onClick={toggleNav}/>
        </div>
      }

    </Fragment>
  )
}

export default Navbar
