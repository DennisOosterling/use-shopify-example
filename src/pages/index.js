import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContentWrapper from "../components/ContentWrapper"
import ProductCard from "../components/ProductCard"
import { useLocation } from "@reach/router"

const shoeTypes = ["Boots"]
const shirtTypes = ["Shirts", "T-Shirts", "Knitwear"]
const types = {
  boots: "Boots",
  shirts: "Shirts",
}

const getTypes = type => {
  if (type === types.boots) {
    return shoeTypes
  }
  return shirtTypes
}

const IndexPage = ({ data }) => {
  const location = useLocation()
  const [filteredProducts, setProducts] = useState(data.allShopifyProduct.edges)
  const type = location.search.split("=")[1]

  useEffect(() => {
    if (location.search) {
      const filterByType = getTypes(type)

      const filtered = data.allShopifyProduct.edges.filter(
        product =>
          product.next && filterByType.includes(product.next.productType)
      )
      setProducts(filtered)
    } else {
      setProducts(data.allShopifyProduct.edges)
    }
  }, [location.search, data.allShopifyProduct.edges])
  return (
    <Layout>
      <SEO title="Home" />
      <div className="flex justify-center">
        <ContentWrapper className="w-full">
          <h2 className="font-title text-2xl md:text-4xl ml-2 py-4">
            {type ? type : "All"}
          </h2>
          <div className="flex flex-wrap w-full pb-4">
            {data &&
              filteredProducts.map(i => (
                <React.Fragment key={i.next && i.next.id}>
                  {i.next && <ProductCard item={i.next}></ProductCard>}
                </React.Fragment>
              ))}
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
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          vendor
          productType
        }
      }
    }
  }
`

export default IndexPage
