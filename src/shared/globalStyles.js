import { createGlobalStyle } from "styled-components"
import { AbrilTTF, AbrilWOFF, AbrilOTF } from "./fonts"

export const GlobalStyles = createGlobalStyle`
  @font-face {
      font-family: "Abril";
      font-style: normal;
      font-weight: normal;
      src: local("Abril"), local("Abril"), url(${AbrilTTF}) format("ttf"), url(${AbrilWOFF}) format("woff");
    }
  }
  h2 {
    font: 30px Abril;
    margin: 0;
  }
`
