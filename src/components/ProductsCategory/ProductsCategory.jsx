import React, {useEffect, useState} from "react"
import {Link, useParams} from "react-router-dom"

import {useSelector} from "react-redux"

import classes from './ProductsCategory.module.css'
import Button from "../UI/Button/Button"

import useWindowDimensions from "../../utils/window"

const ProductsCategory = () => {
  let {width} = useWindowDimensions()
  let {category} = useParams()

  const [device, setDevice] = useState('')

  const getAll = useSelector(state => state.products)
  const products = getAll.filter(el => el.category === category)

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
    <section className={`${classes['category-section']}`}>

      <h1 className={`${classes['section-title']}`}>{category}</h1>

      <ul className={`${classes['section-list']}`}>
        {products.map((el, index) => (
          <li key={el.id}>
            <div
              className={
                index % 2 ?
                  `${classes['product-card']} ${classes['odd']}` :
                  `${classes['product-card']}`
              }
            >
              {device === 'mobile' &&
              <img
                className={`${classes['product-thumb']}`}
                src={`../../.${el.categoryImage.mobile}`}
                // src={`../../.${el.image}${device}`}
                alt={el.name}
              />
              }
              {device === 'tablet' &&
                <img
                  className={`${classes['product-thumb']}`}
                  src={`../../.${el.categoryImage.tablet}`}
                  alt={el.name}
                />
              }
              {device === 'desktop' &&
                <img
                  className={`${classes['product-thumb']}`}
                  src={`../../.${el.categoryImage.desktop}`}
                  alt={el.name}
                />
              }
              <div className={`${classes['product-text__wrapper']}`}>
                {el.new &&
                  <h4 className={'overline'}>new product</h4>
                }
                <h3 className={`${classes['product-title']}`}>{el.name}</h3>
                <p className={`${classes['product-description']}`}>
                  {el.description}
                </p>
                <Button class={'btn'}>
                  <Link
                    className={`btn-link`}
                    to={`/${el.category}/${el.slug}`}
                  >
                    see product
                  </Link>
                </Button>
              </div>
            </div>
          </li>
        )).reverse()}
      </ul>

    </section>
  )

}

export default ProductsCategory
