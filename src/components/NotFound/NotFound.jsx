import React from 'react'
import {Link} from "react-router-dom"

import classes from './NotFound.module.css'

const NotFound = () => {
  return (
    <section className={`${classes['not-found']}`}>
      <div style={{position: 'relative'}}>
        <div className={`${classes['big-text']}`}>404</div>
        <h1>Oops, something wrong...</h1>
        <Link to={"/"} className={`${classes['not-found__link']}`}>
          go home
        </Link>
      </div>
    </section>
  )
}

export default NotFound