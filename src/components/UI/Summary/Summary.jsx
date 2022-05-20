import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"

import classes from './Summary.module.css'
import {cartActions} from "../../../store/cartSlice"

const Summary = () => {
  const dispatch = useDispatch()

  const cartItems = useSelector(state => state.cart.items)
  const totalPrice = useSelector(state => state.cart.totalPrice)
  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  const cartValid = useSelector(state => state.cart.isValid)

  useEffect(() => {
    if (totalQuantity > 0) {
      dispatch(cartActions.setValidCart(true))
    }
    if (totalQuantity < 1) {
      dispatch(cartActions.setValidCart(false))
    }
  }, [totalQuantity, dispatch])

  return (
    <div className={`${classes['summary']}`}>
      <h3 className={`${classes['summary-title']}`}>Summary</h3>

      <ul className={`${classes['summary-list']}`}>
        {cartItems.map((item, index) => (
          <li key={index} className={`${classes['list-item']}`}>

            <img
              className={`${classes['list-item__thumb']}`}
              src={`../../.${item.thumb.mobile}`}
              alt=""
            />
            <div>
              <div className={`${classes['list-item__name']}`}>
                {item.name}
              </div>
              <div className={`${classes['list-item__price']}`}>
                $ {item.price}
              </div>
            </div>
            <div className={`${classes['list-item__quantity']}`}>
              x{item.quantity}
            </div>
          </li>
        ))}
      </ul>

      <div className={`${classes['summary-div']}`}>
        <div className={`${classes['summary-text__info']}`}>total</div>
        <div className={`${classes['summary-text__info-price']}`}>$ {totalPrice}</div>
      </div>
      <div className={`${classes['summary-div']}`}>
        <div className={`${classes['summary-text__info']}`}>shipping</div>
        <div className={`${classes['summary-text__info-price']}`}>$ 50</div>
      </div>
      <div className={`${classes['summary-div']}`}>
        <div className={`${classes['summary-text__info']}`}>Vat (included)</div>
        <div className={`${classes['summary-text__info-price']}`}>$ {totalPrice * 20 / 100}</div>
      </div>
      <div className={`${classes['summary-div']}`}>
        <div className={`${classes['summary-text__info']}`}>grand total</div>
        <div className={`${classes['summary-text__info-price']}`}>$ {totalPrice + 50}</div>
      </div>

      <button
        disabled={!cartValid}
        className={`${classes['summary-btn']}`}
        form='checkout-form'
        type="submit"
      >
        continue & pay
      </button>
    </div>

  )
}

export default Summary
