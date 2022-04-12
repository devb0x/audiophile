import React, {Fragment} from "react"

import classes from './Hero.module.css'

import headerImg from '../../assets/home/mobile/image-header.jpg'
import {useSelector} from "react-redux"
import Button from "../UI/Button/Button"
import {Link} from "react-router-dom"

const Hero = () => {
  const getProducts = useSelector(state => state.products)
  const headphones = getProducts.filter(el => el.category === 'headphones')

  const mainProduct = headphones.filter(el => el.new)

  return (
    <header
      className={`${classes['hero-header']}`}
      style={{ backgroundImage: `url(${headerImg})` }}
    >
      <div className={`${classes['hero-wrapper']} `} >
        <div className={`outline`}>new product</div>
        {mainProduct &&
          <Fragment>
            <h1 className={'h3'}>
             {mainProduct[0].name}
            </h1>
            <div className={`${classes['hero-text']} body-text`}>
              Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
            </div>
            <Button class={'btn'}>
              <Link
                className={`btn-link`}
                to={`/headphones/${mainProduct[0].slug}`}
              >
                See Product
              </Link>
            </Button>

          </Fragment>
        }
      </div>
    </header>
  )
}

export default Hero