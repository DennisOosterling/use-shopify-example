import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import ContentWrapper from "./ContentWrapper"

const Header = ({ siteTitle }) => (
  <header className="p-8 border-b border-gray-400 bg-white">
    <ContentWrapper className="flex justify-center">
      <h1 className="font-title">Cloth</h1>
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
