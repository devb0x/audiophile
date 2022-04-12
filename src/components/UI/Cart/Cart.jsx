import React, {Fragment} from "react"
import {useDispatch, useSelector} from "react-redux"

import classes from './Cart.module.css'
import {cartActions} from "../../../store/cartSlice"
import Button from "../Button/Button"
import {Link} from "react-router-dom"
import {uiActions} from "../../../store/uiSlice"

const Cart = () => {
  const dispatch = useDispatch()

  const cartItems = useSelector(state => state.cart.items)
  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  const totalPrice = useSelector(state => state.cart.totalPrice)

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle())
  }

  const resetCart = () => {
    dispatch(cartActions.resetCart())
  }

  const removeProduct = (quantity, item) => {
    dispatch(cartActions.decreaseAmountByOne({
      id: item.id,
      quantity: 1,
    }))
    dispatch(cartActions.updateTotalPrice())
  }

  const addProduct = (quantity, item) => {
    dispatch(cartActions.increaseAmountByOne(
      {
        id: item.id,
        quantity: 1,
      }
    ))
    dispatch(cartActions.updateTotalPrice())
  }

  return (
    <Fragment>

      <div className={`${classes['cart']}`}>

        <header className={`${classes['cart-header']}`}>
          <div className={`${classes['cart-header__qty']}`}>
            Cart ({totalQuantity})
          </div>
          <button className={`${classes['cart-header__btn']}`} onClick={() => {
            resetCart()
          }}>
            Remove all
          </button>
        </header>

        {cartItems.map((item, index) => (
          <div key={index} className={`${classes['cart-item']}`}>
            <div className={`${classes['cart-item-img']}`}>
              <img
                src={`../../.${item.thumb.mobile}`}
                alt=""
              />
            </div>
            <div className={`${classes['cart-item-text']}`}>
              <h4 className={`${classes['cart-item-text__title']}`}>{item.name}</h4>
              <div className={`${classes['cart-item-text__price']}`}>$ {item.price}</div>
            </div>

            <div className={`${classes['btn-amount']}`}>
              <button className={`${classes['btn-amount__operator']}`} onClick={() => {
                removeProduct(1, item)
              }}>
                <span>-</span>
              </button>
              <div className={`${classes['btn-amount__number']}`}>
                <span>{item.quantity}</span>
              </div>
              <button className={`${classes['btn-amount__operator']}`} onClick={() => {
                addProduct(1, item)
              }}>
                <span>+</span>
              </button>
            </div>

          </div>
          ))}

        <footer className={`${classes['cart-footer']}`}>
          <div className={`${classes['cart-footer__total']}`}>total</div>
          <div className={`${classes['cart-footer__total-number']}`}>$ {totalPrice}</div>

          <Button class='btn' style={{width: '100%' }}>
            <Link className={`btn-link`} to={`/homepage`} style={{width: '100%' }}>checkout</Link>
          </Button>
        </footer>

      </div>

      <div className={`${classes['background']}`} onClick={toggleCartHandler}/>
    </Fragment>
  )
}

export default Cart