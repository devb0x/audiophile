import React from "react"
import {Link, useParams} from "react-router-dom"

import {useSelector} from "react-redux"

import classes from './ProductsCategory.module.css'
import Button from "../UI/Button/Button"

const ProductsCategory = (props) => {
  let {category} = useParams()

  const getAll = useSelector(state => state.products)
  const products = getAll.filter(el => el.category === category)

  // TODO check for add <br /> in product-title

  return (
    <section className={`${classes['category-section']}`}>

      <h1 className={`${classes['section-title']}`}>{category}</h1>

      <ul className={`${classes['section-list']}`}>
        {products.map(el => (
          <li key={el.id}>
            <div className={`${classes['product-card']}`}>
              <img
                className={`${classes['product-thumb']}`}
                src={`../../.${el.image.mobile}`}
                alt=""
              />
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
