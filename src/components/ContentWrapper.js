import React from "react"

const ContentWrapper = ({ children, className = "", ...rest }) => {
  return (
    <div className={"max-w-screen-lg " + className} {...rest}>
      {children}
    </div>
  )
}

export default ContentWrapper
