import React, {useState} from "react"

const Button = (props) => {

  return (
    <button className={`${props.class}`} >
      {props.children}
    </button>
  )
}

export default Button
