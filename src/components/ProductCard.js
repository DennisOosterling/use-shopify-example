import React, { useState } from "react"
import { Plus } from "react-feather"
import { useShopify } from "../context/ShopifyContext"

const formatPrice = price => {
  if (!price) return ""
  return price.split(".")[0] + ",-"
}

const ProductCard = ({ item }) => {
  const [isAdding, setIsAdding] = useState(false)
  const { addItem } = useShopify()

  const addToCart = variantId => {
    setIsAdding(true)

    addItem({ variantId: variantId, quantity: 1 }).then(() =>
      setIsAdding(false)
    )
  }
  return (
    <div
      key={item.id}
      onClick={() => addToCart(item.variants[0].id)}
      className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 transform hover:-translate-y-1 cursor-pointer transition duration-200 ease-in-out rounded py-2 bg-gray-100"
    >
      {isAdding && (
        <div className="absolute w-full h-full bg-white opacity-75 flex justify-center items-center">
          <span className="font-body bg-gray-900 text-white px-2">
            Adding...
          </span>
        </div>
      )}
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
  )
}

export default ProductCard
