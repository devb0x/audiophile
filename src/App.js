import React, {Fragment} from "react"
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import './App.css'

import Navbar from "./components/Navbar/Navbar"
import Homepage from "./components/Pages/Homepage"
import CategoryPage from "./components/Pages/CategoryPage"
import ProductPage from "./components/Pages/ProductPage"
import Cart from "./components/UI/Cart/Cart"
import {useSelector} from "react-redux"
import Footer from "./components/Footer/Footer"

function App() {
  const showCart = useSelector(state => state.ui.cartIsVisible)

  return (
    <Fragment>
      <Router>
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
            exact path={'/:category'}
            element={
              <CategoryPage />
            }
          />
          <Route
            exact path={'/:category/:slug'}
            element={
              <ProductPage />
            }
          />
        </Routes>
        <Footer />
      </Router>
    </Fragment>
  )
}

export default App
