import React from "react"

import classes from './CompanyBanner.module.css'

const CompanyBanner = () => {

  return (
    <section className={`${classes['section-company']}`}>
      <div className={`${classes['company-img']}`} />
      <div className={`${classes['section-company__container']}`}>
        <h3 className={`${classes['section-company__title']}`}>
          Bringing you the <strong>best</strong> audio gear
        </h3>
        <p className={`${classes['section-company__paragraph']}`}>
          Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones,
          speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to
          browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who
          make Audiophile the best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  )
}

export default CompanyBanner