import React from "react"
import { createGlobalStyle } from "styled-components"
import { colors } from '../styles/colors'
import NavBar from './NavBar'

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    background: ${colors.background};
    color: ${colors.primaryFont};
  }
`
export default function Layout({ children }) {
  return (
    <main>
      <GlobalStyle />
      <NavBar />
      {children}
    </main>
  )
}