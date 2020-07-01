import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import ContentWrapper from "./ContentWrapper"

const Header = ({ siteTitle }) => (
  <header className="p-8 border-b border-gray-400">
    <ContentWrapper></ContentWrapper>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
