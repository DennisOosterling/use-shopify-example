/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
const React = require("react")
const ShopifyProvider = require("./src/context/ShopifyContext").ShopifyProvider
const shopify = require("shopify-buy")

const client = shopify.buildClient({
  domain: `graphql.myshopify.com`,
  storefrontAccessToken: "dd4d4dc146542ba7763305d71d1b3d38",
  apiVersion: "2020-04",
})
exports.wrapRootElement = ({ element }) => {
  return <ShopifyProvider client={client}>{element}</ShopifyProvider>
}
