import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

import classes from './CategoriesList.module.css'

import headphonesThumb from '../../assets/shared/desktop/image-category-thumbnail-headphones.png'
import speakerThumb from '../../assets/shared/desktop/image-category-thumbnail-speakers.png'
import earphonesThumb from '../../assets/shared/desktop/image-category-thumbnail-earphones.png'

import Button from "../UI/Button/Button"
import {Link} from "react-router-dom"



const CategoriesList = () => {
  // TODO add chevron arrow

  return (
    <section className={`${classes['categories-section']}`}>
      <div className={`${classes['category-card']}`}>
        <header className={`${classes['category-header']}`}>
          <img
            className={`${classes['category-img']}`}
            src={headphonesThumb}
            alt=""
          />
        </header>
        <div className={`${classes['wrapper']}`}>
          <h3 className={`${classes['category-title']}`}>Headphones</h3>

          <Button class={'btn-transparent'}>
            <Link
              className={`btn-link`}
              to={'/headphones'}
            >
              shop
              <span>
              <FontAwesomeIcon icon={faChevronRight} className={`${classes['chevron-right']}`}/>
              </span>
            </Link>
          </Button>
        </div>
      </div>

      <div className={`${classes['category-card']}`}>
        <header className={`${classes['category-header']}`}>
          <img
            className={`${classes['category-img']}`}
            src={speakerThumb}
            alt=""
          />
        </header>
        <div className={`${classes['wrapper']}`}>
          <h3 className={`${classes['category-title']}`}>speakers</h3>
          <Button class={'btn-transparent'}>
            <Link
              className={`btn-link`}
              to={'/speakers'}
            >
              shop
              <span>
              <FontAwesomeIcon icon={faChevronRight} className={`${classes['chevron-right']}`}/>
             </span>
            </Link>
          </Button>
        </div>
      </div>

      <div className={`${classes['category-card']}`}>
        <header className={`${classes['category-header']}`}>
          <img
            className={`${classes['category-img']}`}
            src={earphonesThumb}
            alt=""
          />
        </header>
        <div className={`${classes['wrapper']}`}>
          <h3 className={`${classes['category-title']}`}>earphones</h3>
          <Button class={'btn-transparent'}>
            <Link
              className={`btn-link`}
              to={'/earphones'}
            >
              shop
              <span>
              <FontAwesomeIcon icon={faChevronRight} className={`${classes['chevron-right']}`}/>
             </span>
            </Link>
          </Button>
        </div>
      </div>

    </section>
  )
}

export default CategoriesList