import React, {Fragment} from "react"
import {Link} from "react-router-dom"

import classes from './Homepage.module.css'
import patternCircle from '../../assets/home/desktop/pattern-circles.svg'

import Hero from "../Hero/Hero"
import CategoriesList from "../CategoriesList/CategoriesList"
import Button from "../UI/Button/Button"
import CompanyBanner from "../CompanyBanner/CompanyBanner"


const Homepage = () => {

  return (
    <Fragment>
      <Hero />
      <CategoriesList />

      <section className={`${classes['products-home']}`}>

        <div className={`${classes['card-big']} ${classes['card']}`}>
          <div className={`${classes['pattern']}`}>
            <img src={patternCircle} alt="" className={`${classes['pattern-img']}`}/>
          </div>
          <div className={`${classes['card-big__img']}`} />

          <div className={`${classes['card-big__container']}`}>
            <h3 className={`${classes['card-title']}`}>
              ZX9<br/>Speaker
            </h3>
            <div className={`${classes['card-big__text']}`}>
              Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
            </div>
            <Button class={'btn-black__plain'}>
              <Link to={'/products/speakers/zx9-speaker'} className={'btn-link'}>
                see product
              </Link>
            </Button>
          </div>
        </div>

        <div className={`${classes['card-sm']} ${classes['card']}`} >
          <h3 className={`${classes['card-title__sm']} ${classes['card-title__black']}`}>
            ZX7 Speaker
          </h3>
          <Button class={'btn-black'}>
            <Link to={'/products/speakers/zx7-speaker'} className={'btn-link'}>
              see product
            </Link>
          </Button>
        </div>

        <div className={`${classes['card-md']} ${classes['card']}`}>
          <div className={`${classes['card-md__img']}`} />

          <div className={`${classes['card-md__container']}`}>
            <h3 className={`${classes['card-title__md']} ${classes['card-title__black']}`}>
              YX1 Earphones
            </h3>
            <Button class={'btn-black'}>
              <Link to={'/products/earphones/yx1-earphones'} className={'btn-link'}>
                see product
              </Link>
            </Button>
          </div>

        </div>

      </section>

      <CompanyBanner />
    </Fragment>
  )
}

export default Homepage