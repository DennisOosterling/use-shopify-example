import React from "react"
import ContentWrapper from "./ContentWrapper"
import { useShopify } from "../context/ShopifyContext"
import { X } from "react-feather"

const CartItemList = () => {
  const { checkout } = useShopify()
  return (
    <div className="flex justify-center">
      <ContentWrapper className="w-full">
        <h2 className="font-title text-4xl py-4">Shopping Cart</h2>

        {checkout.loaded &&
          checkout.lineItems.length > 0 &&
          checkout.lineItems.map(lineItem => (
            <div className="flex flex-row border-t py-4 items-center w-full">
              <div>
                <img
                  src={lineItem.variant.image.src}
                  className="rounded"
                  style={{ maxWidth: "100px" }}
                ></img>
              </div>
              <div className="font-body ml-2">{lineItem.title}</div>
              <div>{lineItem.title}</div>
              <div>{lineItem.title}</div>
              <div style={{ justifySelf: "flex-end" }}>
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
