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
    .swiper-slide {
      width: 150px !important;
    }
  }
  padding: 90px 0;
`
const SwiperContainer = styled.div`
  max-width: 100%;
  margin: 30px 0 40px;
  @media screen and (max-width: 600px) {
    max-width: calc(100vw - 40px);
  }
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
        <SwiperContainer>
          <Swiper>
            <div style={{ width: 120 }}>
              <a href="https://www.instagram.com/anneschuartz/">
                <img
                  style={{ width: 120 }}
                  src="https://s3-sa-east-1.amazonaws.com/anneschuartz/site/carousell/ver+no+instagram.png"
                />
              </a>
            </div>
            <div style={{ width: 120 }}>
              <a href="https://www.instagram.com/anneschuartz/">
                <img
                  style={{ width: 120 }}
                  src="https://s3-sa-east-1.amazonaws.com/anneschuartz/site/carousell/bolos.png"
                />
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com/anneschuartz/">
                <img src="https://s3-sa-east-1.amazonaws.com/anneschuartz/site/carousell/tortas.png" />
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com/anneschuartz/">
                <img src="https://s3-sa-east-1.amazonaws.com/anneschuartz/site/carousell/brigadeiros.png" />
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com/anneschuartz/">
                <img src="https://s3-sa-east-1.amazonaws.com/anneschuartz/site/carousell/lembrancinhas.png" />
              </a>
            </div>
          </Swiper>
        </SwiperContainer>
        <DimWave />
      </Container>
    </VejaMaisComponent>
  )
}

export default VejaMais
