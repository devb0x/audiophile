import React, {Fragment} from "react"
import {ErrorBoundary} from "../ErrorBoundary/Errorboundary"

import Product from "../Product/Product"
import CategoriesList from "../CategoriesList/CategoriesList"
import CompanyBanner from "../CompanyBanner/CompanyBanner"
import Also from "../Also/Also"

const ProductPage = () => {

  return (
    <ErrorBoundary>
      <Fragment>
        <Product />
        <Also />
        <CategoriesList />
        <CompanyBanner />
      </Fragment>
    </ErrorBoundary>
  )
}

export default ProductPage