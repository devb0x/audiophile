import React, {Fragment} from "react"
import CategoriesList from "../CategoriesList/CategoriesList"
import CompanyBanner from "../CompanyBanner/CompanyBanner"
import ProductsCategory from "../ProductsCategory/ProductsCategory"

const CategoryPage = () => {

  return (
    <Fragment>
      <ProductsCategory />
      <CategoriesList />
      <CompanyBanner />
    </Fragment>
  )
}

export default CategoryPage