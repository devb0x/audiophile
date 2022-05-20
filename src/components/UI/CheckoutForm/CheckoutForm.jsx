import React, {Fragment, useState} from "react"
import {Link} from "react-router-dom"
import {useForm} from "react-hook-form"

import classes from './CheckoutForm.module.css'
import iconCash from '../../../assets/shared/desktop/icon-cash.svg'

import Summary from "../Summary/Summary"
import Modal from "../Modal/Modal"

const CheckoutForm = () => {
  const [showModal, setShowModal] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState('')

  const paymentSelected = (e) => {
    setPaymentMethod(e.target.value)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      shippingAddress: '',
      zipCode: '',
      city: '',
      country: '',
      paymentMethod: '',
      eMoneyNumber: '',
      eMoneyPin: ''
    }
  });
  const onSubmit = (data) => {
    console.log(data);
    document.activeElement.blur()
    setShowModal(true)
  }

  return (
    <Fragment>
      <div
        className={`${classes['link-back']}`}
      >
        <Link to={-1}>
          Go Back
        </Link>
      </div>
      <section className={`${classes['section-form']}`}>

        <form id='checkout-form' className={`${classes['form']}`} onSubmit={handleSubmit(onSubmit)}>
          <h1 className={`${classes['form-title']}`} >
            Checkout
          </h1>

          <h2 className={`${classes['form-title__part']}`}>
            Billing Details
          </h2>
          <div className={`${classes['form-div']}`}>
            <div className={`${classes['form-div__wrapper']}`}>
              <label className={errors?.name ? `${classes['form-label']} ${classes['form-label__invalid']}` : `${classes['form-label']}`}>
                Name
              </label>
              {errors.name &&
                <span role="alert" className={`${classes['form-error']}`}>{errors?.name?.message}</span>
              }
            </div>
            <input
              className={errors?.name ? `${classes['invalid']}` : '' }
              type="text" {...register('name', {required: "This field is required"} )}
            />
          </div>
          <div className={`${classes['form-div']}`}>

            <div style={{justifyContent: 'space-between', display: 'flex'}}>
              <label className={errors?.email ? `${classes['form-label']} ${classes['form-label__invalid']}` : `${classes['form-label']}`}>
                Email Address
              </label>
              {errors.email &&
                <span role="alert" className={`${classes['form-error']}`}>{errors?.email?.message}</span>
              }
            </div>

            <input
              className={errors?.email ? `${classes['invalid']}` : '' }
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Wrong format',
                },
              })}
            />
          </div>
          <div className={`${classes['form-div']}`}>
            <label className={`${classes['form-label']}`}>
              Phone Number
            </label>
            <input type="number" {...register('phone')}/>
          </div>

          <h2 className={`${classes['form-title__part']}`}>
            Shipping Info
          </h2>
          <div className={`${classes['form-div']} ${classes['width']} `}>
            <label className={`${classes['form-label']}`}>
              Your Address
            </label>
            <input type="text" {...register('shippingAddress')}/>
          </div>
          <div className={`${classes['form-div']}`}>
            <label className={`${classes['form-label']}`}>
              ZIP Code
            </label>
            <input type="number" {...register('zipCode')}/>
          </div>
          <div className={`${classes['form-div']}`}>
            <label className={`${classes['form-label']}`}>
              City
            </label>
            <input type="text" {...register('city')}/>
          </div>
          <div className={`${classes['form-div']}`}>
            <label className={`${classes['form-label']}`}>
              Country
            </label>
            <input type="text" {...register('country')}/>
          </div>

          <h2 className={`${classes['form-title__part']}`}>
            Payment Details
          </h2>
          <div className={`${classes['form-div']} ${classes['form-div__alt']} `}>
            <div className={`${classes['form-label']}`}>
              Payment Method
            </div>
              <label
                className={`${classes['form-label']} ${classes['form-label__radio']}`}
                onChange={paymentSelected}
              >
              <input
                value="eMoney"
                type="radio"
                {...register('paymentMethod')}
              />
                e-Money
            </label>
            <label
              className={`${classes['form-label']} ${classes['form-label__radio']}`}
              onChange={paymentSelected}
            >
              <input
                value="cash"
                type="radio"
                {...register('paymentMethod')}
              />
                Cash on Delivery
            </label>
          </div>

          {paymentMethod === 'eMoney' &&
            <Fragment>
              <div className={`${classes['form-div']}`}>
                <label className={`${classes['form-label']}`}>
                  e-Money Number
                </label>
                <input type="number" {...register('eMoneyNumber')}/>
              </div>
              <div className={`${classes['form-div']}`}>
                <label className={`${classes['form-label']}`}>
                  e-Money PIN
                </label>
                <input type="number" {...register('eMoneyPin')}/>
              </div>
            </Fragment>
          }
          {paymentMethod === 'cash' &&
            <Fragment>
              <div className={`${classes['cash-delivery']}`}>
                <img src={iconCash} alt=""/>
                <p className={`${classes['cash-delivery__text']}`}>
                  The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your
                  residence. Just make sure your address is correct so that your order will not be cancelled.
                </p>
              </div>
            </Fragment>
          }

        </form>

        <Summary />

        {showModal &&
          <Modal />
        }

      </section>
    </Fragment>
  )
}

export default CheckoutForm