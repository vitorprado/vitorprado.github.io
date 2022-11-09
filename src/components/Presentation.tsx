import React from 'react'
import styled from 'styled-components'
import { colors } from '../styles/colors'

const Container = styled.section`
  flex: 1;
  display: flex;
  align-items: flex-start;
  margin: 0 auto;
  flex-direction: column;
  padding: 80px;
  max-width: 1000px;
  height: 100%;
  
  h4 {
    color: ${colors.color3};
    font-family: "Open Sans", Helvetica, Arial, sans-serif;
    font-weight: normal;
    padding: 0;
    margin: 0;
    opacity: 0;
    animation: enter-animation ease 300ms 600ms;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }

  h1 {
    color: ${colors.color6};
    font-family: "Exo", Helvetica, Arial, sans-serif;
    font-size: 60px;
    padding: 0;
    margin: 0;
    opacity: 0;
    animation: enter-animation ease 300ms 750ms;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
  
  h2 {
    color: ${colors.primaryFont};
    font-family: "Exo", Helvetica, Arial, sans-serif;
    font-size: 55px;
    padding: 0;
    margin: -20px 0 0 0;
    opacity: 0;
    animation: enter-animation ease 300ms 900ms;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }

  p {
    color: ${colors.primaryFont};
    font-family: "Open Sans", Helvetica, Arial, sans-serif;
    padding: 0;
    margin: 0;
    opacity: 0;
    animation: enter-animation ease 300ms 1050ms;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
`

export default function Presentation() {
  return (
    <Container>
      <h4>Hello, my name is</h4>
      <h1>Vitor Prado.</h1>
      <h2>I solve problems through tecnology.</h2>
      <p>
        I'm a Mobile and Backend developer based in Brazil with solid experience building entire systems from scratch.
        I've been working with code since 2012, helping businesses to solve their problems through technology.<br/>
        I have already worked with Android, iOS, Ruby, JavaScript/TypeScript, React Native, and KMM (Kotlin Multiplatform).
      </p>
      </Container>
  )
}