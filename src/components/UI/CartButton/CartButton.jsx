import React from "react"
import { uiActions } from "../../../store/uiSlice"
import {useDispatch} from "react-redux"

import classes from './CartButton.module.css'

const CartButton = (props) => {
  const dispatch = useDispatch()

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle())
  }

  return (
    <button onClick={toggleCartHandler} className={`${classes['cart-btn']}`}>
      {props.children}
    </button>
  )
}

export default CartButton