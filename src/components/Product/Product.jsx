import React, {Fragment} from "react"
import {useDispatch, useSelector} from "react-redux"

import {useParams, Link} from "react-router-dom"

import classes from './Product.module.css'
import {cartActions} from "../../store/cartSlice"
import Counter from "../UI/Counter/Counter"
import {counterActions} from "../../store/counterSlice"

const Product = () => {
  let {slug} = useParams()

  const quantity = useSelector(state => state.counter)
  const getProducts = useSelector(state => state.products)
  const item = getProducts.filter(el => el.slug === slug)

  const dispatch = useDispatch()

  const addProduct = (quantity, item) => {
    dispatch(cartActions.addItemToCart(
      {
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: quantity.counter,
        thumb: item.categoryImage
      }
    ))
    dispatch(cartActions.updateTotalPrice())
    dispatch(counterActions.resetCounter())
  }

  return (
    <Fragment>

      <section className={`${classes['product-section']}`}>
        <div
          className={`${classes['link-back']}`}
        >
        <Link to={-1}>
          Go Back
        </Link>
      </div>
        <header className={`${classes['product-header']}`}>
          <picture>
            <source srcSet={`../../.${item[0].image.desktop}`} media="(min-width: 1440px)" />
            <source srcSet={`../../.${item[0].image.tablet}`} media="(min-width: 768px)" />
            <img src={`../../.${item[0].image.mobile}`} alt={item[0].name} className={`${classes['product-image']}`} />
          </picture>
        </header>

        <div className={`${classes['product-wrapper']}`}>
          {item[0].new &&
            <h4 className={'overline'}>new product</h4>
          }
          <h1 className={`${classes['product-title']}`}>
            {item[0].name}
          </h1>
          <div className={`${classes['product-description']}`}>
            {item[0].description}
          </div>

          <div className={`${classes['product-price']}`}>
            ${item[0].price}
          </div>

          <div className={`${classes['product-btn__wrapper']}`}>
            <div className={`${classes['btn-amount']}`}>
              <Counter />
            </div>
            <button className={'btn btn-add-cart'} onClick={() => {
              addProduct(quantity, item[0])
            }}>
              add to cart
            </button>
          </div>
        </div>

        <div className={`${classes['product-features']}`}>
          <h3 className={`${classes['product-features__title']}`}>Features</h3>
          <div className={`${classes['product-features__text']}`}>
            {item[0].features}
          </div>
        </div>

        <div className={`${classes['product-includes']}`}>
          <h3 className={`${classes['product-includes__title']}`}>In the box</h3>
            <ul >
              {item[0].includes.map((el, index) => (
                <li key={index}>
                  <span className={`${classes['product-includes__qty']}`}>{el.quantity}x</span>
                  <span className={`${classes['product-includes__item']}`}>{el.item}</span>
                </li>
              ))}
            </ul>
        </div>

        <div className={`${classes['product-gallery']}`}>
          <div className={`${classes['product-gallery__1']}`}>
            <picture>
              <source srcSet={`../../.${item[0].gallery.first.desktop}`} media="(min-width: 1440px)" />
              <source srcSet={`../../.${item[0].gallery.first.tablet}`} media="(min-width: 768px)" />
              <img
                src={`../../.${item[0].gallery.first.mobile}`}
                alt=""
              />
            </picture>
          </div>
          <div className={`${classes['product-gallery__2']}`}>
            <picture>
              <source srcSet={`../../.${item[0].gallery.second.desktop}`} media="(min-width: 1440px)" />
              <source srcSet={`../../.${item[0].gallery.second.tablet}`} media="(min-width: 768px)" />
              <img
                src={`../../.${item[0].gallery.second.mobile}`}
                alt=""
              />
            </picture>
          </div>
          <div className={`${classes['product-gallery__3']}`}>
            <picture>
              <source srcSet={`../../.${item[0].gallery.third.desktop}`} media="(min-width: 1440px)" />
              <source srcSet={`../../.${item[0].gallery.third.tablet}`} media="(min-width: 768px)" />
              <img
                src={`../../.${item[0].gallery.third.mobile}`}
                alt=""
              />
            </picture>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Product