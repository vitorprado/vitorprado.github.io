import { createGlobalStyle } from 'styled-components'
import { colors } from '../styles/colors'

const GlobalCSS = createGlobalStyle`
  @import url(https://fonts.googleapis.com/css?family=Open+Sans:400,400italic|Exo:300,400,700,900&display=swap);

  ol, ul {
    list-style: none;
  }
  
  body {
    padding: 0;
    margin: 0;
    background: ${colors.background};
    color: ${colors.primaryFont};
    font-family: "Open Sans", Helvetica, Arial, sans-serif;
  }

  @keyframes enter-animation {
    0% {
      opacity: 0;
      transform: translateY(20%);
    }
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }
`

export default GlobalCSS