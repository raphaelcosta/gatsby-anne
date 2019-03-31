import * as React from "react"
import styled from "styled-components"

import Container from "./Container"

const MuitoAmorComponent = styled.section`
  background: url("https://s3-sa-east-1.amazonaws.com/anneschuartz/pattern.png")
    repeat center center;
  padding: 90px 0;
  > div {
    justify-content: center;
    flex-direction: column;
    h2 {
      margin-bottom: 40px;
    }
  }
`

const P = styled.p`
  font: 14px Muli;
  max-width: 520px;
`

const MuitoAmor = () => (
  <React.Fragment>
    <MuitoAmorComponent>
      <Container>
        <h2>Dedicação e muito amor</h2>
        <P>
          "Anne, obrigada pela atenção e dedicação do seu serviço. Como sempre,
          você nos surpreendeu com os seus lindos e maravilhosos bolos, estavam
          perfeitos!” Gustavo Rodrigues, Curitiba.
        </P>
      </Container>
    </MuitoAmorComponent>
  </React.Fragment>
)

export default MuitoAmor
