import { createGlobalStyle } from 'styled-components';
import { AbrilTTF, AbrilWOFF, AnneTTF, AnneWOFF, AnneSVG } from './fonts';

export const GlobalStyles = createGlobalStyle`
  @font-face {
      font-family: "Abril";
      font-style: normal;
      font-weight: normal;
      src: local("Abril"), local("Abril"), url(${AbrilTTF}) format("ttf"), url(${AbrilWOFF}) format("woff");
    }
  }
  @font-face {
    font-family: "Anne";
    font-style: normal;
    font-weight: normal;
    src: local("Anne"), local("Anne"), url(${AnneTTF}) format("ttf"), url(${AnneWOFF}) format("woff"), url(${AnneSVG}) format("svg");
  }
}
  h2 {
    font: 30px Abril;
    margin: 0;
  }
`;
