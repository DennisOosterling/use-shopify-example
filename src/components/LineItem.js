import React, { useState } from "react"
import { useShopify } from "../context/ShopifyContext"
import { X, PlusCircle, MinusCircle } from "react-feather"

const LineItem = ({ lineItem }) => {
  const [isLoading, setIsLoading] = useState()
  const { removeItem, updateItem, addItem } = useShopify()

  const addToCart = shopifyId => {
    setIsLoading(true)
    addItem({ variantId: shopifyId, quantity: 1 })
      .then(() => setIsLoading(false))
      .catch(() => {
        // TODO: add logging
        setIsLoading(false)
      })
  }

  // Removes a single item from a lineItem from the cart
  const removeFromCart = (lineItemId, quantity) => {
    setIsLoading(true)
    updateItem({ id: lineItemId, quantity: quantity })
      .then(() => setIsLoading(false))
      .catch(() => {
        // TODO: add logging
        setIsLoading(false)
      })
  }

  return (
    <div
      className="flex flex-row justify-between border-t py-4 items-center w-full"
      style={{ opacity: isLoading ? 0.5 : 1 }}
    >
      <div className="w-1/5">
        <img
          src={lineItem.variant.image.src}
          className="rounded"
          style={{ maxWidth: "100px" }}
        ></img>
      </div>
      <div className="font-body ml-2 w-1/5">
        <span className="font-body bg-gray-900 text-white px-2">
          {lineItem.title}
        </span>
      </div>
      <div className="font-body ml-2 w-1/5 flex flex-row items-center">
        <MinusCircle
          onClick={() => removeFromCart(lineItem.id, lineItem.quantity - 1)}
          size={18}
          className="mr-2 cursor-pointer"
        />{" "}
        {lineItem.quantity}X
        <PlusCircle
          onClick={() => addToCart(lineItem.variant.id)}
          size={18}
          className="ml-2 cursor-pointer"
        />
      </div>
      <div className="font-body ml-2 w-1/5">
        $ {lineItem.quantity * lineItem.variant.price}
      </div>
      <div className="flex justify-end">
        <X
          size={18}
          className="cursor-pointer"
          onClick={() => removeItem(lineItem.id)}
        />
      </div>
    </div>
  )
}

export default LineItem
