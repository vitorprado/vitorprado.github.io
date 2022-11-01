import * as React from "react"
import type { HeadFC } from "gatsby"
import Layout from '../components/layout'
import styled from 'styled-components'
import { colors } from '../styles/colors'

const Container = styled.div`
  background: ${colors.surface};
  padding: 20px;
  border-radius: 15px;
  //flex: 1 1 auto;
  align-self: center;
  display: inline-block;
`

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  display: inline-block;
`

const IndexPage = () => {
  return (
    <Layout>
      <Container>
        <Title>Vitor Prado.</Title>
      </Container>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
