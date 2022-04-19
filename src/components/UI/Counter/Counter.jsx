import React, {useEffect, useState} from "react"

import classes from './Counter.module.css'
import {useDispatch, useSelector} from "react-redux"
import {counterActions} from "../../../store/counterSlice"

const Counter = () => {
  const quantity = useSelector(state => state.counter)
  const dispatch = useDispatch()

  const decrease = () => {
    dispatch(counterActions.decreaseByOne(1))
  }

  const increase = () => {
    dispatch(counterActions.increaseByOne(1))
  }

  return (
    <div className={`${classes['counter']}`}>

      <div className={`${classes['btn-amount']}`}>
        <button className={`${classes['btn-amount__operator']}`} onClick={decrease}>
          <span>-</span>
        </button>
        <div className={`${classes['btn-amount__number']}`}>
          <span>{quantity.counter}</span>
        </div>
        <button className={`${classes['btn-amount__operator']}`} onClick={increase}>
          <span>+</span>
        </button>
      </div>

    </div>
  )
}

export default Counter