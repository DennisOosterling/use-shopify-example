import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useShopify } from "../context/ShopifyContext"
import ContentWrapper from "../components/ContentWrapper"
import { Plus } from "react-feather"

const formatPrice = price => {
  if (!price) return ""
  return price.split(".")[0] + ",-"
}

const IndexPage = () => {
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
            {products &&
              products.map(item => (
                <div
                  key={item.id}
                  className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 transform hover:-translate-y-1 cursor-pointer transition duration-200 ease-in-out rounded py-2 bg-gray-100"
                >
                  <img src={item.images[0].src} className="rounded-t"></img>
                  <Plus className="absolute right-0 top-0 m-4 text-gray-600" />
                  <div className="-mt-4">
                    <div className=" ml-2">
                      <span className="font-body bg-gray-900 text-white px-2">
                        {item.title}
                      </span>
                    </div>
                    <div className="-mt-2 ml-2">
                      <span className="font-body bg-gray-900 text-white px-2">
                        € {formatPrice(item.variants[0].price)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </ContentWrapper>
      </div>
    </Layout>
  )
}

export default IndexPage
