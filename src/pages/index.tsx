import * as React from "react"
import type { HeadFC } from "gatsby"

const pageStyles = {
  width: "100%",
  height: "100%",
  paddingTop: 200,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage = () => {
  return (
    <main style={pageStyles} >
      <h1 align={"center"}>
        Vitor Prado.
      </h1>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
