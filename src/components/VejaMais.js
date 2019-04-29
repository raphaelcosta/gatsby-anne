import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Container from './Container';
import { DimWave } from './Wave';
import Swiper from 'react-id-swiper';

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
`;

const SwiperContainer = styled.div`
  max-width: 100%;
  margin: 30px 0 40px;
  @media screen and (max-width: 600px) {
    max-width: calc(100vw - 40px);
  }
`;

const P = styled.p`
  color: #624244
  font: 14px Muli;
  margin: 0;
`;

const VejaMais = ({ title, description, image_1, image_2, image_3, image_4, image_5 }) => (
  <VejaMaisComponent>
    <Container>
      <h2>{title}</h2>
      <P dangerouslySetInnerHTML={{ __html: description }} />
      <SwiperContainer>
        <Swiper>
          <div style={{ width: 120 }}>
            <Link to="/cardapio">
              <img style={{ width: 120 }} src={image_1} />
            </Link>
          </div>
          <div style={{ width: 120 }}>
            <Link to="/cardapio">
              <img style={{ width: 120 }} src={image_2} />
            </Link>
          </div>
          <div>
            <Link to="/cardapio">
              <img src={image_3} />
            </Link>
          </div>
          <div>
            <Link to="/cardapio">
              <img src={image_4} />
            </Link>
          </div>
          <div>
            <Link to="/cardapio">
              <img src={image_5} />
            </Link>
          </div>
        </Swiper>
      </SwiperContainer>
      <DimWave />
    </Container>
  </VejaMaisComponent>
);

export default VejaMais;
