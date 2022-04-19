import React, {useEffect, useState} from "react"

import classes from './Also.module.css'
import Button from "../UI/Button/Button"
import {Link, useParams} from "react-router-dom"
import {useSelector} from "react-redux"
import useWindowDimensions from "../../utils/window"

const Also = () => {
  let {width} = useWindowDimensions()
  let {slug} = useParams()

  const [device, setDevice] = useState('')

  const getProducts = useSelector(state => state.products)
  const item = getProducts.filter(el => el.slug === slug)

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
    <section className={`${classes['also-section']}`}>
      <h3 className={`${classes['also-title']}`}>You may also like</h3>
      <div className={`${classes['also-container']}`}>
        {item[0].others.map((el, index) => (
          <div className={`${classes['also-item']}`} key={index}>
            {device === 'mobile' &&
              <img
                src={`../../.${el.image.mobile}`}
                alt=""
                className={`${classes['also-item__img']}`}
              />
            }
            {device === 'tablet' &&
              <img
                src={`../../.${el.image.tablet}`}
                alt=""
                className={`${classes['also-item__img']}`}
              />
            }
            {device === 'desktop' &&
              <img
                src={`../../.${el.image.desktop}`}
                alt=""
                className={`${classes['also-item__img']}`}
              />
            }
            <h4 className={`${classes['also-item__name']}`}
            >
              {el.name}
            </h4>
            <Button class='btn'>
              <Link className={`btn-link`} to={`/${el.category}/${el.slug}`}>see product</Link>
            </Button>
          </div>
        ))}
        {/*<div>*/}

        {/*  <Button class='btn'>*/}
        {/*    <Link className={`btn-link`} to={`/${items[1].category}/${items[1].slug}`}>see product</Link>*/}
        {/*  </Button>*/}
        {/*</div>*/}
      </div>
    </section>
  )
}

export default Also