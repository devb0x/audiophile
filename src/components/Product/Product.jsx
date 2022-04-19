import React, {Fragment, useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"

import {useParams, Link} from "react-router-dom"

import classes from './Product.module.css'
import {cartActions} from "../../store/cartSlice"
import Counter from "../UI/Counter/Counter"
import useWindowDimensions from "../../utils/window"

const Product = () => {
  let {width} = useWindowDimensions()
  let {slug} = useParams()
  const [device, setDevice] = useState('')

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
  }

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
          {device === 'mobile' &&
            <img
            className={`${classes['product-image']}`}
            src={`../../.${item[0].image.mobile}`}
            alt={item[0].name}
          />
          }
          {device === 'tablet' &&
            <img
              className={`${classes['product-image']}`}
              src={`../../.${item[0].image.tablet}`}
              alt={item[0].name}
            />
          }
          {device === 'desktop' &&
            <img
              className={`${classes['product-image']}`}
              src={`../../.${item[0].image.desktop}`}
              alt={item[0].name}
            />
          }
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
        {device === 'mobile' &&
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
        }
        {device === 'tablet' &&
          <div className={`${classes['product-gallery']}`}>
            <div className={`${classes['product-gallery__1']}`}>
              <img
                src={`../../.${item[0].gallery.first.tablet}`}
                alt=""
              />
            </div>
            <div className={`${classes['product-gallery__2']}`}>
              <img
                src={`../../.${item[0].gallery.second.tablet}`}
                alt=""
              />
            </div>
            <div className={`${classes['product-gallery__3']}`}>
              <img
                src={`../../.${item[0].gallery.third.tablet}`}
                alt=""
              />
            </div>
          </div>
        }
        {device === 'desktop' &&
          <div className={`${classes['product-gallery']}`}>
            <div className={`${classes['product-gallery__1']}`}>
              <img
                src={`../../.${item[0].gallery.first.desktop}`}
                alt=""
              />
            </div>
            <div className={`${classes['product-gallery__2']}`}>
              <img
                src={`../../.${item[0].gallery.second.desktop}`}
                alt=""
              />
            </div>
            <div className={`${classes['product-gallery__3']}`}>
              <img
                src={`../../.${item[0].gallery.third.desktop}`}
                alt=""
              />
            </div>
          </div>
        }
      </section>
    </Fragment>
  )
}

export default Product