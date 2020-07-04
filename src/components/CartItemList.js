import React from "react"
import ContentWrapper from "./ContentWrapper"
import { useShopify } from "../context/ShopifyContext"
import { X } from "react-feather"

const CartItemList = () => {
  const { checkout } = useShopify()
  console.log(checkout)
  return (
    <div className="flex justify-center">
      <ContentWrapper className="w-full px-4">
        <div className="flex flex-row items-center justify-between sticky top-0 bg-gray-100">
          <h2 className="font-title text-4xl py-4">Shopping Cart</h2>
          <div>
            <a
              href={checkout.webUrl}
              className="p-4 cursor-pointer transition duration-50 ease-in-out border border-gray-900 hover:border-transparent hover:bg-gray-900 hover:text-white"
            >
              Checkout
            </a>
          </div>
        </div>
        {checkout.loaded &&
          checkout.lineItems.length > 0 &&
          checkout.lineItems.map(lineItem => (
            <div className="flex flex-row justify-between border-t py-4 items-center w-full">
              <div className="w-1/5">
                <img
                  src={lineItem.variant.image.src}
                  className="rounded"
                  style={{ maxWidth: "100px" }}
                ></img>
              </div>
              <div className="font-body ml-2 w-1/5">{lineItem.title}</div>
              <div className="font-body ml-2 w-1/5">{lineItem.quantity}X</div>
              <div className="font-body ml-2 w-1/5">
                € {lineItem.quantity * lineItem.variant.price}
              </div>
              <div className="w-1/5 flex justify-end">
                <X />
              </div>
            </div>
          ))}
        {checkout.loaded && checkout.lineItems.length === 0 && (
          <div>Your cart is empty</div>
        )}
      </ContentWrapper>
    </div>
  )
}

export default CartItemList
