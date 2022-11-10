import * as React from "react"
import type { HeadFC } from "gatsby"
import Layout from '../components/Layout'
import Presentation from '../components/Presentation'

const IndexPage = () => {
  return (
    <Layout>
      <Presentation/>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Vitor Prado.</title>
