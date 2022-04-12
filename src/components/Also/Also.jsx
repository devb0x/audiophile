import React from "react"

import classes from './Also.module.css'
import Button from "../UI/Button/Button"
import {Link, useParams} from "react-router-dom"
import {useSelector} from "react-redux"

const Also = () => {
  let {slug} = useParams()

  const getProducts = useSelector(state => state.products)
  const item = getProducts.filter(el => el.slug === slug)

  return (
    <section className={`${classes['also-section']}`}>
      <h3 className={`${classes['also-title']}`}>You may also like</h3>
      <div className={`${classes['also-container']}`}>
        {item[0].others.map((el, index) => (
          <div className={`${classes['also-item']}`} key={index}>
            <img
              src={`../../.${el.image.mobile}`}
              alt=""
              className={`${classes['also-item__img']}`}
            />
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