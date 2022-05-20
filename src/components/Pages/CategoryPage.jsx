import React, {Fragment} from "react"
import CategoriesList from "../CategoriesList/CategoriesList"
import CompanyBanner from "../CompanyBanner/CompanyBanner"
import ProductsCategory from "../ProductsCategory/ProductsCategory"
import {ErrorBoundary} from "../ErrorBoundary/Errorboundary"

const CategoryPage = () => {

  return (
    <ErrorBoundary>
      <Fragment>
        <ProductsCategory />
        <CategoriesList />
        <CompanyBanner />
      </Fragment>
    </ErrorBoundary>
  )
}

export default CategoryPage