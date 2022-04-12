import React from "react"
import {Link} from "react-router-dom"

import logo from "../../assets/shared/desktop/logo.svg"
import fbIcon from "../../assets/shared/desktop/icon-facebook.svg"
import instagramIcon from "../../assets/shared/desktop/icon-instagram.svg"
import twitterIcon from "../../assets/shared/desktop/icon-twitter.svg"

import classes from './Footer.module.css'

const Footer = () => {

  return (
    <footer className={`${classes['footer']}`}>
      <div  className={`${classes['footer-border']}`}/>
      <div className={`${classes['container']}`}>
        <Link
          to={'/homepage'}
          className={`${classes['nav-list__item-link']} ${classes['brand']}`}
        >
          <img src={logo} alt="audiophile"/>
        </Link>
        <nav>
          <ul className={`${classes['footer-list']}`}>
            <li>
              <Link
                to={'/homepage'}
                className={`${classes['nav-list__item-link']}`}
              >
                home
              </Link>
            </li>
            <li>
              <Link
                to={'/headphones'}
                className={`${classes['nav-list__item-link']}`}
              >
                headphones
              </Link>
            </li>
            <li>
              <Link
                to={'/speakers'}
                className={`${classes['nav-list__item-link']}`}
              >
                speakers
              </Link>
            </li>
            <li>
              <Link
                to={'/earphones'}
                className={`${classes['nav-list__item-link']}`}
              >
                earphones
              </Link>
            </li>
          </ul>
        </nav>
        <div className={`${classes['footer-text']}`}>
          Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound
          specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo
          facility - we’re open 7 days a week.
        </div>
        <div className={`${classes['footer-text']} ${classes['footer-copyright']}`}>
          Copyright 2021. All Rights Reserved
        </div>
        <div className={`${classes['footer-social']}`}>
          <ul className={`${classes['footer-social__list']}`}>
            <li>
              <a
                href={"https://www.facebook.com/"}
                target="_blank" rel="noreferrer"
              >
                <img src={fbIcon} alt="facebook"/>
              </a>
            </li>
            <li>
              <a
                href={"https://twitter.com"}
                target="_blank" rel="noreferrer"
              >
                <img src={twitterIcon} alt="twitter"/>
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank" rel="noreferrer"
              >
                <img src={instagramIcon} alt="instagram"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer