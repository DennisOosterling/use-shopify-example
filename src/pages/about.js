import React from "react"
import Layout from "../components/layout"
import ContentWrapper from "../components/ContentWrapper"
import gatsby from "../images/gatsby.png"
import react from "../images/react.png"
import shopify from "../images/shopify.png"
import tailwind from "../images/tailwind.png"
import github from "../images/github.png"

const tools = [
  { image: gatsby, name: "gatsby", url: "https://www.gatsbyjs.org/" },
  { image: react, name: "react", url: "https://reactjs.org/" },
  {
    image: shopify,
    name: "js-buy-sdk",
    url: "https://shopify.github.io/js-buy-sdk/",
  },
  { image: tailwind, name: "tailwind", url: "https://tailwindcss.com/" },
]
const about = () => {
  return (
    <Layout>
      <div className="flex justify-center mb-12">
        <ContentWrapper className="w-full">
          <h2 className="font-title text-2xl md:text-4xl ml-2 py-4">About</h2>
          <div className="bg-white p-4 font-body flex items-center flex-col mb-4">
            <div>Build with</div>
            <div className="flex flex-row justify-between w-full max-w-md my-6">
              {tools.map(tool => (
                <div className="flex flex-col justify-center items-center">
                  <div
                    style={{ height: "50px" }}
                    className="flex justify-center items-center"
                  >
                    <img
                      style={{
                        maxHeight: "50px",
                        maxWidth: "50px",
                        filter: "grayscale(100)",
                      }}
                      src={tool.image}
                      alt={tool.name}
                    ></img>
                  </div>
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:text-indigo-600"
                  >
                    {tool.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-4 font-body flex items-center flex-col my-4">
            <div className="mb-6">Example for</div>
            <div className="flex flex-col justify-center items-center">
              <img
                src={github}
                style={{
                  width: "50px",
                  height: "50px",
                  filter: "grayscale(100)",
                }}
              ></img>
              <a
                href="https://github.com/DennisOosterling/use-shopify"
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-indigo-600"
              >
                use-shopify
              </a>
            </div>
          </div>
          <div className="bg-white p-4 font-body flex items-center flex-col my-4">
            <div className="mb-6">Repository for this website</div>
            <div className="flex flex-col justify-center items-center">
              <img
                src={github}
                style={{
                  width: "50px",
                  height: "50px",
                  filter: "grayscale(100)",
                }}
              ></img>
              <a
                href="https://github.com/DennisOosterling/use-shopify-example"
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-indigo-600"
              >
                use-shopify-example
              </a>
            </div>
          </div>
        </ContentWrapper>
      </div>
    </Layout>
  )
}

export default about
