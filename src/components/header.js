import PropTypes from "prop-types"
import React from "react"
import ContentWrapper from "./ContentWrapper"
import { ShoppingCart } from "react-feather"

const Header = ({ siteTitle }) => (
  <header className="py-8 border-b border-gray-400 bg-white flex justify-center">
    <ContentWrapper className="flex justify-between w-full px-2">
      <ShoppingCart className="invisible" />
      <h1 className="font-title font-extrabold text-2xl m-0 p-0">Cloth.</h1>
      <ShoppingCart />
    </ContentWrapper>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
