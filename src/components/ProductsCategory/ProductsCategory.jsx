import React, {useEffect} from "react"
import {Link, useParams, useNavigate} from "react-router-dom"

import {useSelector} from "react-redux"

import classes from './ProductsCategory.module.css'
import Button from "../UI/Button/Button"

const ProductsCategory = () => {
  let navigate = useNavigate()
  let {category} = useParams()

  const getAll = useSelector(state => state.products)
  const products = getAll.filter(el => el.category === category)

  useEffect(() => {
    if (products.length === 0) {
      navigate('/404')
    }
  }, [products, navigate])

  return (
    <section className={`${classes['category-section']}`}>

      <h1 className={`${classes['section-title']}`}>{category}</h1>

      <ul className={`${classes['section-list']}`}>
        {products.map((el, index) => (
          <li key={index}>
            <div className={`${classes['product-card']}`}>
              <picture>
                <source srcSet={`../../.${el.categoryImage.desktop}`} media="(min-width: 1440px)"/>
                <source srcSet={`../../.${el.categoryImage.tablet}`} media="(min-width: 768px)"/>
                <img
                  className={`${classes['product-thumb']}`}
                  src={`../../.${el.categoryImage.mobile}`}
                  alt={el.name}
                />
              </picture>
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
                    to={`/products/${el.category}/${el.slug}`}
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
