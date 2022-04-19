import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"


import classes from './CategoriesList.module.css'

import headphonesThumb from '../../assets/shared/desktop/image-category-thumbnail-headphones.png'
import speakerThumb from '../../assets/shared/desktop/image-category-thumbnail-speakers.png'
import earphonesThumb from '../../assets/shared/desktop/image-category-thumbnail-earphones.png'

import {Link} from "react-router-dom"



const CategoriesList = () => {
  // TODO add chevron arrow

  return (
    <section className={`${classes['categories-section']}`}>

      <div className={`${classes['categories-container']}`}>
        <div className={`${classes['category-card']}`}>
          <Link
            className={` btn-link ${classes['category-section__link']}`}
            to={'/headphones'}
          >
            <header className={`${classes['category-header']}`}>
              <img
                className={`${classes['category-img']}`}
                src={headphonesThumb}
                alt=""
              />
            </header>
            <div className={`${classes['wrapper']}`}>
              <h3 className={`${classes['category-title']}`}>Headphones</h3>

              <button className={`${classes['btn']} btn-transparent`}>
                  shop
                  <span>
                  <FontAwesomeIcon icon={faChevronRight} className={`${classes['chevron-right']}`}/>
                  </span>
              </button>
            </div>
          </Link>
        </div>

        <div className={`${classes['category-card']}`}>
          <Link
            className={`${classes['category-section__link']}  btn-link`}
            to={'/speakers'}
          >
            <header className={`${classes['category-header']}`}>
              <img
                className={`${classes['category-img']}`}
                src={speakerThumb}
                alt=""
              />
            </header>
            <div className={`${classes['wrapper']}`}>
              <h3 className={`${classes['category-title']}`}>speakers</h3>
              <button className={`${classes['btn']} btn-transparent`}>
                  shop
                  <span>
                  <FontAwesomeIcon icon={faChevronRight} className={`${classes['chevron-right']}`}/>

                 </span>
              </button>
            </div>
          </Link>
        </div>

        <div className={`${classes['category-card']}`}>
          <Link
            className={`${classes['category-section__link']}  btn-link`}
            to={'/earphones'}
          >
            <header className={`${classes['category-header']}`}>
              <img
                className={`${classes['category-img']}`}
                src={earphonesThumb}
                alt=""
              />
            </header>
            <div className={`${classes['wrapper']}`}>
              <h3 className={`${classes['category-title']}`}>earphones</h3>
              <button className={`${classes['btn']} btn-transparent`}>
                  shop
                  <span>
                  <FontAwesomeIcon icon={faChevronRight} className={`${classes['chevron-right']}`}/>
                 </span>
              </button>
            </div>
          </Link>
        </div>
      </div>


    </section>
  )
}

export default CategoriesList