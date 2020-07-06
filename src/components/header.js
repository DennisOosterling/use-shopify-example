import PropTypes from "prop-types"
import React from "react"
import ContentWrapper from "./ContentWrapper"
import { ShoppingCart } from "react-feather"
import { Link } from "gatsby"
import { useShopify } from "../context/ShopifyContext"
const Header = ({ siteTitle }) => {
  const { checkout } = useShopify()
  const isEmpty = checkout.loaded && checkout.lineItems.length === 0

  return (
    <header className="py-8 border-b border-gray-400 bg-white flex justify-center">
      <ContentWrapper className="flex justify-between w-full px-5">
        <ShoppingCart className="invisible" />
        <Link to="/">
          <h1 className="font-title font-extrabold text-2xl m-0 p-0">Cloth.</h1>
        </Link>
        <Link to="/cart">
          <div>
            {!isEmpty && (
              <div className="absolute ml-4 h-3 w-3 rounded-md bg-red-600"></div>
            )}
            <ShoppingCart />
          </div>
        </Link>
      </ContentWrapper>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
