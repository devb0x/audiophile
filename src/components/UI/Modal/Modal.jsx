import React, {Fragment} from "react"
import {Link} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"

import checkoutIcon from '../../../assets/shared/desktop/checkout.svg'
import classes from './Modal.module.css'
import {cartActions} from "../../../store/cartSlice"

const Modal = () => {
  const dispatch = useDispatch()

  const mainItem = useSelector(state => state.cart.items[0])
  const numberOtherItems = useSelector(state => state.cart.items.length - 1)
  const grandTotal = useSelector(state => state.cart.totalPrice)

  const resetCart = () => {
    dispatch(cartActions.resetCart())
  }

  return (
    <div className={`${classes['background']}`}>
      <div className={`${classes['modal']}`}>
        <img
          className={`${classes['checkout-icon']}`}
          src={checkoutIcon}
          alt="checkout icon"
        />
        <h3 className={`${classes['checkout-title']}`}>
          thank you<br />
          for your order
        </h3>
        <div className={`${classes['checkout-text']}`}>
          You will receive an email confirmation shortly.
        </div>

        <div className={`${classes['card']}`}>

          <div className={`${classes['grey-container']}`}>
            <div className={`${classes['grey-container__header']}`}>
              <img
                className={`${classes['item-thumb']}`}
                src={`../../.${mainItem?.thumb.mobile}`}
                alt=""
              />
              <div className={`${classes['item-info']}`}>
                <div className={`${classes['item-name']}`}>
                  {mainItem?.name}
                </div>
                <div className={`${classes['item-quantity']}`}>
                  x{mainItem?.quantity}
                </div>
              </div>
              <div className={`${classes['item-price']}`}>
                $ {mainItem?.price}
              </div>
            </div>

            {numberOtherItems > 0 &&
              <Fragment>
                <hr className={`${classes['hr']}`}/>

                <div className={`${classes['grey-container__footer']}`}>
                  and {numberOtherItems} other item(s)
                </div>
              </Fragment>
            }
          </div>

          <div className={`${classes['total-price']}`}>
            <div className={`${classes['total-price__text']}`}>
              grand total
            </div>
            <div className={`${classes['total-price__number']}`}>
              $ {grandTotal}
            </div>
          </div>

        </div>

        <button className={`${classes['checkout-button']}`} >
          <Link
            className={'btn-link'}
            to={'/homepage'}
            onClick={resetCart}
          >
            back to home
          </Link>
        </button>
      </div>
    </div>
  )
}

export default Modal