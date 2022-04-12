import React from "react"
import {Link} from "react-router-dom"

import classes from './Homepage.module.css'

import Hero from "../Hero/Hero"
import CategoriesList from "../CategoriesList/CategoriesList"
import Button from "../UI/Button/Button"
import CompanyBanner from "../CompanyBanner/CompanyBanner"

import zx9 from '../../assets/home/mobile/image-speaker-zx9.png'
import zx7 from '../../assets/home/mobile/image-speaker-zx7.jpg'
import yx1 from '../../assets/home/mobile/image-earphones-yx1.jpg'
import patternCircle from '../../assets/home/desktop/pattern-circles.svg'

const Homepage = () => {

  return (
    <div>
      <Hero />
      <CategoriesList />

      <section className={`${classes['products-home']}`}>

        <div className={`${classes['card-big']} ${classes['card']}`}>
          <div className={`${classes['pattern']}`}>
            <img src={patternCircle} alt="" className={`${classes['pattern-img']}`}/>
          </div>
          <img src={zx9} alt="zx9 speaker"/>
          <h3 className={`${classes['card-title']}`}>
            ZX9<br/>Speaker
          </h3>
          <div className={`${classes['card-big__text']}`}>
            Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
          </div>
          <Button class={'btn-black'}>
            <Link to={'/speakers/zx9-speaker'} className={'btn-link'}>
              see product
            </Link>
          </Button>
        </div>

        <div className={`${classes['card-sm']} ${classes['card']}`} style={{backgroundImage: `url(${zx7})`}}>
          <h3 className={`${classes['card-title__sm']} ${classes['card-title__black']}`}>
            ZX7 Speaker
          </h3>
          <Button class={'btn-black'}>
            <Link to={'/speakers/zx7-speaker'} className={'btn-link'}>
              see product
            </Link>
          </Button>
        </div>

        <div className={`${classes['card-md']} ${classes['card']}`}>
          <header className={`${classes['card-md__header']}`} >
            <img src={yx1} alt="zx9 speaker"/>
          </header>

          <div className={`${classes['card-md__container']}`}>
            <h3 className={`${classes['card-title__md']} ${classes['card-title__black']}`}>
              YX1 Earphones
            </h3>
            <Button class={'btn-black'}>
              <Link to={'/earphones/yx1-earphones'} className={'btn-link'}>
                see product
              </Link>
            </Button>
          </div>

        </div>

      </section>

      <CompanyBanner />
    </div>
  )
}

export default Homepage