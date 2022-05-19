import React, {Fragment, useEffect} from "react"
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"

import {useSelector} from "react-redux"

import './App.css'

import Navbar from "./components/Navbar/Navbar"
import Homepage from "./components/Pages/Homepage"
import CategoryPage from "./components/Pages/CategoryPage"
import ProductPage from "./components/Pages/ProductPage"
import Cart from "./components/UI/Cart/Cart"
import Footer from "./components/Footer/Footer"
import CheckoutPage from "./components/Pages/CheckoutPage"
import ScrollToTop from "./components/ScrollToTop"

function App() {
  const cart = useSelector((state) => state.cart)
  const showCart = useSelector(state => state.ui.cartIsVisible)
  const localCart = localStorage.getItem('cart')

  /**
   * initialize cart in localStorage
   * or set cart from localStorage
   */
  useEffect(() => {
    if (!localCart) {
      localStorage.setItem('cart', JSON.stringify(cart))
    }
    if (localCart) {
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  }, [localCart, cart])

  return (
    <Fragment>
      <Router>
      <ScrollToTop>
        <Navbar />
        {showCart && <Cart /> }
        <Routes>
          <Route
            exact path={'/'}
            element={ <Navigate to="/homepage" /> }
          />
          <Route
            exact path={'/homepage'}
            element={
              <Homepage />
            }
          />
          <Route
            exact path={'/products/:category'}
            element={
              <CategoryPage />
            }
          />
          <Route
            exact path={'/products/:category/:slug'}
            element={
              <ProductPage />
            }
          />
          <Route
            exact path={'/checkout'}
            element={
              <CheckoutPage />
            }
          />
          <Route
            path={'*'}
            element={ <Navigate to="/homepage" /> }
          />
          </Routes>
          <Footer />
        </ScrollToTop>
      </Router>
    </Fragment>
  )
}

export default App
