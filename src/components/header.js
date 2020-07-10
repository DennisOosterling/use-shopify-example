import PropTypes from "prop-types"
import React, { useState } from "react"
import ContentWrapper from "./ContentWrapper"
import { ShoppingCart, X, Home, User, Tag, Info } from "react-feather"
import { Link } from "gatsby"
import { useShopify } from "../context/ShopifyContext"

const Header = () => {
  const { checkout } = useShopify()
  const isEmpty = checkout.loaded && checkout.lineItems.length === 0
  const [showBanner, setShowBanner] = useState(true)

  return (
    <div>
      {showBanner && (
        <div className="w-full bg-red-700 h-6 text-white text-sm font-title flex justify-center items-center">
          <Link to="/about">This is an example store, Learn more ›</Link>
          <X
            onClick={() => setShowBanner(false)}
            className="absolute right-0 mr-2 cursor-pointer"
            size={18}
          />
        </div>
      )}
      <header className="py-8 border-b border-gray-400 bg-white flex justify-center">
        <ContentWrapper className="flex justify-between w-full px-5">
          <ShoppingCart className="invisible" />
          <Link to="/">
            <h1 className="font-title font-extrabold text-2xl m-0 p-0">
              Cloth.
            </h1>
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
      <nav className="hidden md:flex justify-center w-full bg-white border-b border-gray-400 py-2 font-title">
        <div className="max-w-sm w-full flex justify-between px-2">
          <Link to="/">
            <div>All</div>
          </Link>
          <Link to="/?type=Shirts">
            <div>Shirts</div>
          </Link>
          <Link to="/?type=Boots">
            <div>Boots</div>
          </Link>
          <Link to="/about">
            <div>About</div>
          </Link>
        </div>
      </nav>
      <nav className="md:hidden fixed bottom-0 z-20 flex justify-center w-full bg-white border-b border-gray-400 py-2 font-title shadow-lg">
        <div className="w-full flex justify-around px-4">
          <Link to="/">
            <div className="flex flex-col items-center justify-center text-sm">
              <Home></Home>
              <div>All</div>
            </div>
          </Link>
          <Link to="/?type=Shirts">
            <div className="flex flex-col items-center justify-center text-sm">
              <User></User>
              <div>Shirts</div>
            </div>
          </Link>
          <Link to="/?type=Boots">
            <div className="flex flex-col items-center justify-center text-sm">
              <Tag></Tag>
              <div>Boots</div>
            </div>
          </Link>
          <Link to="/about">
            <div className="flex flex-col items-center justify-center text-sm">
              <Info></Info>
              <div>About</div>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
