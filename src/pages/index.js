import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useShopify } from "../context/ShopifyContext"
import ContentWrapper from "../components/ContentWrapper"
import ProductCard from "../components/ProductCard"

const IndexPage = ({ data }) => {
  const [products, setProducts] = useState(null)
  const { client } = useShopify()

  useEffect(() => {
    async function getAllProducts() {
      const productsResponse = await client.product.fetchAll()
      setProducts(productsResponse)
      console.log(productsResponse)
    }

    getAllProducts()
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <div className="flex justify-center">
        <ContentWrapper>
          <div className="flex flex-wrap w-full py-4">
            {data &&
              data.allShopifyProduct.edges.map(i => (
                <>{i.next && <ProductCard item={i.next}></ProductCard>}</>
              ))}
            {/* {products &&
              products.map(item => <ProductCard item={item}></ProductCard>)} */}
          </div>
        </ContentWrapper>
      </div>
    </Layout>
  )
}
export const query = graphql`
  {
    allShopifyProduct(filter: { vendor: { eq: "All Saints" } }) {
      edges {
        next {
          id
          title
          variants {
            price
            id
            shopifyId
          }
          images {
            originalSrc
            localFile {
              childImageSharp {
                fluid(quality: 100) {
                  src
                }
              }
            }
          }
          vendor
        }
      }
    }
  }
`

export default IndexPage
