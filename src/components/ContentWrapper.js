import React from "react"

const ContentWrapper = ({ children, ...rest }) => {
  return (
    <div className="max-w-screen-xl" {...rest}>
      {children}
    </div>
  )
}

export default ContentWrapper
