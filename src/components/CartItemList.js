import React from "react"
import ContentWrapper from "./ContentWrapper"
import { useShopify } from "../context/ShopifyContext"
import LineItem from "./LineItem"
import empty from "../images/empty.png"

const CartItemList = () => {
  const { checkout, removeItem } = useShopify()
  const isEmpty = checkout.loaded && checkout.lineItems.length === 0
  const cartReady = checkout.loaded && checkout.lineItems.length > 0
  return (
    <div className="flex justify-center">
      <ContentWrapper className="w-full px-4">
        <div className="flex flex-row items-center justify-between sticky top-0 bg-gray-100">
          <h2 className="font-title text-2xl md:text-4xl py-4">
            Shopping Cart
          </h2>
          <div>
            {!isEmpty && (
              <a
                href={checkout.webUrl}
                className="p-4 cursor-pointer transition duration-50 ease-in-out border border-gray-900 hover:border-transparent hover:bg-gray-900 hover:text-white"
              >
                Checkout
              </a>
            )}
          </div>
        </div>
        {cartReady &&
          checkout.lineItems.map(lineItem => <LineItem lineItem={lineItem} />)}
        {isEmpty && (
          <div className="flex flex-col items-center justify-center">
            <img src={empty} className="max-w-md"></img>
            <div>
              <span className="text-white bg-gray-900 px-2 font-body">
                Your cart is empty
              </span>
            </div>
          </div>
        )}
      </ContentWrapper>
    </div>
  )
}

export default CartItemList
