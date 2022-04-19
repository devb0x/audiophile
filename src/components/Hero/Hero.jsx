import React, {Fragment, useEffect, useState} from "react"
import {Link} from "react-router-dom"
import {useSelector} from "react-redux"

import useWindowDimensions from "../../utils/window"

import classes from './Hero.module.css'

import Button from "../UI/Button/Button"

const Hero = () => {
  let {width} = useWindowDimensions()

  const [device, setDevice] = useState('')

  const getProducts = useSelector(state => state.products)
  const headphones = getProducts.filter(el => el.category === 'headphones')

  const mainProduct = headphones.filter(el => el.new)

  useEffect(() => {
    if (width < 768) {
      setDevice('mobile')
    }
    if (width > 767 && width < 1440) {
      setDevice('tablet')
    }
    if (width > 1439) {
      setDevice('desktop')
    }
  }, [width, device])

  return (

    <header
      className={`${classes['hero-header']}`}
    >
      {device === 'mobile' &&
        <div className={`${classes['hero-header__background']} ${classes['mobile']}`} />
      }
      {device === 'tablet' &&
        <div className={`${classes['hero-header__background']} ${classes['tablet']}`} />
      }
      {device === 'desktop' &&
        <div className={`${classes['hero-header__background']} ${classes['desktop']}`} />
      }
      <div className={`${classes['hero-wrapper']} `} >
        <div className={`${classes['hero-outline']} `}>new product</div>
        {mainProduct &&
          <Fragment>
            <h1 className={`${classes['hero-title']}`}>
             {mainProduct[0].name}
            </h1>
            <div className={`${classes['hero-text']}`}>
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