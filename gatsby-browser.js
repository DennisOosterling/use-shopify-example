/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
const React = require("react")
const ShopifyProvider = require("./src/context/ShopifyContext").ShopifyProvider

exports.wrapRootElement = ({ element }) => {
  return <ShopifyProvider>{element}</ShopifyProvider>
}
