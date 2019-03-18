import * as React from "react"
import styled from "styled-components"
import Container from "./Container"
import { DimWave } from "./Wave"
import Swiper from "react-id-swiper"

const VejaMaisComponent = styled.section`
  background: #f1eae5;
  > div {
    flex-direction: column;
    h2 {
      margin-bottom: 10px;
    }
  }
  padding: 90px 0;
`
const P = styled.p`
  color: #624244
  font: 14px Muli;
  margin: 0;
`
const VejaMais = () => {
  return (
    <VejaMaisComponent>
      <Container>
        <h2>Veja mais</h2>
        <P>Explore o nosso cardápio</P>
        <div style={{ maxWidth: "100%", margin: "30px 0 40px" }}>
          <Swiper>
            <div>Slide 1</div>
            <div>Slide 2</div>
            <div>Slide 3</div>
            <div>Slide 4</div>
            <div>Slide 5</div>
          </Swiper>
        </div>
        <DimWave />
      </Container>
    </VejaMaisComponent>
  )
}

export default VejaMais
