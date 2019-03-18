import * as React from "react"
import styled from "styled-components"

import Container from "./Container"
import { Wave } from "./Wave"

const NossoCardapioComponent = styled.section`
  background: url("https://s3-sa-east-1.amazonaws.com/anneschuartz/site/pink_bg.png")
    repeat center center;
  padding: 90px 0;
  > div {
    flex-direction: column;
  }
`
const P = styled.p`
  font: 14px Muli;
  text-align: center;
  max-width: 420px;
`
const NossoCardapio = () => (
  <NossoCardapioComponent>
    <Container>
      <h2>O nosso cardápio</h2>
      <Wave />
      <P>
        Todos os nossos produtos são 100% artesanais e fresquinhos, feitos com
        muito amor pra você
      </P>
      {/* <Link style={{ textDecoration: "none", color: "#210305" }} to="/">
        Saiba mais sobre a Anne
      </Link> */}
    </Container>
  </NossoCardapioComponent>
)

export default NossoCardapio
