import React from "react"
import {Link} from "react-router-dom"

import classes from './CategoriesList.module.css'

import headphonesThumb from '../../assets/shared/desktop/image-category-thumbnail-headphones.png'
import speakerThumb from '../../assets/shared/desktop/image-category-thumbnail-speakers.png'
import earphonesThumb from '../../assets/shared/desktop/image-category-thumbnail-earphones.png'
import arrowRight from '../../assets/shared/desktop/icon-arrow-right.svg'


const CategoriesList = (props) => {

  return (
    <section className={`${classes['categories-section']}`}>

      <div className={`${classes['categories-container']}`}>
        <div
          className={`${classes['category-card']}`}
          onClick={() => {
            if (props.show) {
              props.show(false)
            }
          }}
        >
          <Link
            className={`${classes['category-section__link']} btn-link`}
            to={'/products/headphones'}
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
                <span style={{display: 'flex', margin: 'auto'}}>
                  <img src={arrowRight} alt="arrow right" className={`${classes['chevron-right']}`}/>
                </span>
              </button>
            </div>
          </Link>
        </div>

        <div
          className={`${classes['category-card']}`}
          onClick={() => {
            if (props.show) {
              props.show(false)
            }
          }}
        >
          <Link
            className={`${classes['category-section__link']} btn-link`}
            to={'/products/speakers'}
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
                <span style={{display: 'flex', margin: 'auto'}}>
                  <img src={arrowRight} alt="arrow right" className={`${classes['chevron-right']}`}/>
                </span>
              </button>
            </div>
          </Link>
        </div>

        <div
          className={`${classes['category-card']}`}
          onClick={() => {
            if (props.show) {
              props.show(false)
            }
          }}
        >
          <Link
            className={`${classes['category-section__link']} btn-link`}
            to={'/products/earphones'}
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
                <span style={{display: 'flex', margin: 'auto'}}>
                  <img src={arrowRight} alt="arrow right" className={`${classes['chevron-right']}`}/>
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