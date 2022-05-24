import React from "react"

import classes from './Also.module.css'
import Button from "../UI/Button/Button"
import {Link, useParams} from "react-router-dom"
import {useSelector} from "react-redux"

const Also = () => {
  let {slug} = useParams()

  let getProducts = useSelector(state => state.products)
  let item = getProducts.filter(el => el.slug === slug)

  // let category = []
  // for (let i = 0; i < getProducts.length; i++) {
  //   for (let j = 0; j < item[0].others.length; j++) {
  //     if (item[0].others[j].slug === getProducts[i].slug) {
  //       category.push(getProducts[i].category)
  //     }
  //   }
  //   console.log(category)
  // }

  return (
    <section className={`${classes['also-section']}`}>
      <h3 className={`${classes['also-title']}`}>You may also like</h3>
      <div className={`${classes['also-container']}`}>
        {item[0].others.map((el, index) => (
          <div className={`${classes['also-item']}`} key={index}>
            <picture>
              <source srcSet={`../../.${el.image.desktop}`} media="(min-width: 1440px)" />
              <source srcSet={`../../.${el.image.tablet}`} media="(min-width: 768px)" />
              <img
                src={`../../.${el.image.mobile}`}
                alt={el.name}
                className={`${classes['also-item__img']}`}
              />
            </picture>
            <h4 className={`${classes['also-item__name']}`}
            >
              {el.name}
            </h4>
            <Button class='btn'>
              <Link className={`btn-link`} to={`/products/${el.category}/${el.slug}`}>see product</Link>
            </Button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Also