import React from "react"
import CartItemList from "../components/CartItemList"
import Layout from "../components/layout"
import SEO from "../components/seo"

const cart = () => {
  return (
    <Layout>
      <SEO title="Cart" />
      <CartItemList />
    </Layout>
  )
}

export default cart
