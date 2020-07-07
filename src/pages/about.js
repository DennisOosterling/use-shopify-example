import React from "react"
import Layout from "../components/layout"
import ContentWrapper from "../components/ContentWrapper"
const about = () => {
  return (
    <Layout>
      <div className="flex justify-center">
        <ContentWrapper className="w-full">
          <h2 className="font-title text-2xl md:text-4xl ml-2 py-4">About</h2>
          {/* <div className="bg-white p-4">
            <div>Build with</div>
          </div> */}
        </ContentWrapper>
      </div>
    </Layout>
  )
}

export default about
