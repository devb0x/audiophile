import React, {Fragment, useState} from "react"
import {Link} from "react-router-dom"

import {useForm} from "react-hook-form"

import classes from './CheckoutForm.module.css'
import Summary from "../Summary/Summary"

const CheckoutForm = () => {
  const [paymentMethod, setPaymentMethod] = useState('')

  const paymentSelected = (e) => {
    setPaymentMethod(e.target.value)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

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
            <label className={`${classes['form-label']}`}>
              Name
            </label>
            <input type="text" {...register('name')} />
          </div>
          <div className={`${classes['form-div']}`}>
            <label className={`${classes['form-label']}`}>
              Email Address
            </label>
            <input type="email" {...register('email')}/>
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
              <input value="eMoney" type="radio" {...register('paymentMethod')} />
                e-Money
            </label>
            <label
              className={`${classes['form-label']} ${classes['form-label__radio']}`}
              onChange={paymentSelected}
            >
              <input value="cash" type="radio" {...register('paymentMethod')} />
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
              <div>
                text cash payment with icon
              </div>
            </Fragment>
          }

        </form>

        <Summary />

      </section>
    </Fragment>
  )
}

export default CheckoutForm