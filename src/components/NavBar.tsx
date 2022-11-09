import React from 'react'
import styled from 'styled-components'
import { colors } from '../styles/colors'
import { StaticImage } from 'gatsby-plugin-image'

const Bar = styled.nav`
  flex: 1;
  display: flex;
  background: ${colors.background};
  align-items: center;
  justify-content: flex-start;
  padding: 15px 15px;
`

const Item = styled.a`
  display: inline-flex;
  text-decoration: none;
  color: ${colors.primaryFont};
  font-family: "Exo", Helvetica, Arial, sans-serif;
  padding: 10px 20px;
  border-color: ${colors.color3};
  border-radius: 5px;
  border: ${colors.color3} 2px solid;
  font-weight: normal;
  background-color: transparent;
  
  :hover {
    background-color: ${colors.color3}44;
    transition: all 200ms ease-in;
  }

  :not(:hover) {
    background-color: transparent;
    transition: all 300ms ease-in;
  }
`

const ImageIconSize = 40

const HomeContainer = styled.a`
  display: inline-flex;
  margin-right: auto;
  align-items: center;
  text-decoration: none;
  color: ${colors.color3};
  
  :hover {
    color: ${colors.primaryFont};
    transition: all 300ms ease-in;
    
    img {
      filter: brightness(1.3);
      transition: all 300ms ease-in;
    }
  }
  
  :not(:hover) {
    color: ${colors.color3};
    transition: all 300ms ease-in;

    img {
      filter: brightness(1);
      transition: all 300ms ease-in;
    }
  }
  
  img {
    width: ${ImageIconSize}px;
    height: ${ImageIconSize}px;
    border-radius: ${ImageIconSize / 2}px;
    
    :hover {
      opacity: 0.5;
    }
  }
  
  h6 {
    margin: 0 15px;
    font-family: "Exo", Helvetica, Arial, sans-serif;
    font-size: 22px;
    padding: 0;
  }
`

function Home() {
  return (
    <HomeContainer href={"#"}>
      <StaticImage
        src={'../images/profile.jpeg'}
        alt={'Home'}
        placeholder="blurred"
        layout="fixed"
        width={ImageIconSize}
        height={ImageIconSize}/>
      <h6>Vitor Prado</h6>
    </HomeContainer>
  )
}

export default function NavBar() {
  return (
    <Bar>
      <Home/>
      <Item href={"resume.pdf"}>Resume</Item>
    </Bar>
  )
}