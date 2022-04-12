import React from "react"

const Button = (props) => {
  // console.log(props)

  return (
    // <button className={`${classes['button']}`}>
    <button className={`${props.class}`}>
      {props.children}
    </button>
  )
}

export default Button
