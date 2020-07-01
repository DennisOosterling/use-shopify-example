import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useShopify } from "../context/ShopifyContext"
import ContentWrapper from "../components/ContentWrapper"

const IndexPage = () => {
  const [products, setProducts] = useState(null)
  const context = useShopify()

  useEffect(() => {
    async function getAllProducts() {
      const productsResponse = await context.client.product.fetchAll()
      setProducts(productsResponse)
    }

    getAllProducts()
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <ContentWrapper>
        <div className="flex flex-wrap w-full py-4">
          {products &&
            products.map(item => (
              <div
                key={item.id}
                className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-2 transform hover:-translate-y-2 cursor-pointer transition duration-200 ease-in-out rounded py-2 bg-gray-100"
              >
                <img src={item.images[0].src} className="rounded-t"></img>
                <div className="-mt-3 ml-2">
                  <span className="font-body bg-gray-900 text-white px-2">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </ContentWrapper>
    </Layout>
  )
}

export default IndexPage
