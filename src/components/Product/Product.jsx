import React, {Fragment, useState} from "react"
import {useDispatch, useSelector} from "react-redux"

import {useParams} from "react-router-dom"

import classes from './Product.module.css'
import Button from "../UI/Button/Button"
import {cartActions} from "../../store/cartSlice"

const Product = () => {
  let {slug} = useParams()
  const [quantity, setQuantity] = useState(1)

  const getProducts = useSelector(state => state.products)
  const item = getProducts.filter(el => el.slug === slug)

  const dispatch = useDispatch()

  const decreaseAmount = () => {
    if (quantity <= 1) {
      return
    }
    setQuantity(quantity - 1)
  }

  const increaseAmount = () => {
    setQuantity(quantity + 1)
  }

  const addProduct = (quantity, item) => {
    console.warn(item.id)
    dispatch(cartActions.addItemToCart(
      {
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: quantity,
        thumb: item.categoryImage
      }
    ))
    dispatch(cartActions.updateTotalPrice())
  }

  return (
    <Fragment>
      <div>lien go back (later)</div>
      <hr/>
      <section className={`${classes['product-section']}`}>
        <header className={`${classes['product-header']}`}>
          <img
            className={`${classes['product-image']}`}
            src={`../../.${item[0].image.mobile}`}
            alt={item[0].name}
          />
        </header>
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
            <button className={`${classes['btn-amount__operator']}`} onClick={decreaseAmount}>
              <span>-</span>
            </button>
            <div className={`${classes['btn-amount__number']}`}>
              <span>{quantity}</span>
            </div>
            <button className={`${classes['btn-amount__operator']}`} onClick={increaseAmount}>
              <span>+</span>
            </button>
          </div>
          <button className={'btn btn-add-cart'} onClick={() => {
            addProduct(quantity, item[0])
          }}>
            add to cart
          </button>
        </div>

        <div className={`${classes['product-features']}`}>
          <h3 className={`${classes['product-features__title']}`}>Features</h3>
          <div className={`${classes['product-features__text']}`}>
            {item[0].features}
          </div>
        </div>
        <div className={`${classes['product-includes']}`}>
          <h3 className={`${classes['product-features__title']}`}>In the box</h3>
          {item[0].includes.map((el, index) => (
            <ul key={index}>
              <li>
                <span className={`${classes['product-includes__qty']}`}>{el.quantity}x</span>
                <span className={`${classes['product-includes__item']}`}>{el.item}</span>
              </li>
            </ul>
          ))}
        </div>
        <div className={`${classes['product-gallery']}`}>
          <div className={`${classes['product-gallery__1']}`}>
            <img
              src={`../../.${item[0].gallery.first.mobile}`}
              alt=""
            />
          </div>
          <div className={`${classes['product-gallery__2']}`}>
            <img
              src={`../../.${item[0].gallery.second.mobile}`}
              alt=""
            />
          </div>
          <div className={`${classes['product-gallery__3']}`}>
            <img
              src={`../../.${item[0].gallery.third.mobile}`}
              alt=""
            />
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Product