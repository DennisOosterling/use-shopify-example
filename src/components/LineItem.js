import React, { useState } from "react"
import { useShopify } from "../context/ShopifyContext"
import { X, PlusCircle, MinusCircle } from "react-feather"

const LineItem = ({ lineItem }) => {
  const [isLoading, setIsLoading] = useState()
  const { removeItem } = useShopify()

  return (
    <div className="flex flex-row justify-between border-t py-4 items-center w-full">
      <div className="w-1/5">
        <img
          src={lineItem.variant.image.src}
          className="rounded"
          style={{ maxWidth: "100px" }}
        ></img>
      </div>
      <div className="font-body ml-2 w-1/5">{lineItem.title}</div>
      <div className="font-body ml-2 w-1/5 flex flex-row items-center">
        <MinusCircle size={18} className="mr-2" /> {lineItem.quantity}X{" "}
        <PlusCircle size={18} className="ml-2" />
      </div>
      <div className="font-body ml-2 w-1/5">
        € {lineItem.quantity * lineItem.variant.price}
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
