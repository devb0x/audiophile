import React, {Fragment} from "react"
import Product from "../Product/Product"
import CategoriesList from "../CategoriesList/CategoriesList"
import CompanyBanner from "../CompanyBanner/CompanyBanner"
import Also from "../Also/Also"

const ProductPage = () => {

  return (
    <Fragment>
      <Product />
      <Also />
      <CategoriesList />
      <CompanyBanner />
    </Fragment>
  )
}

export default ProductPage