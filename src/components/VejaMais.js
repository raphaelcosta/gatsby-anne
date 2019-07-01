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
          {image_1 && (
            <div style={{ width: 120 }}>
              <Link to="/cardapio">
                <img style={{ width: 120, borderRadius: 6 }} src={image_1.source_url} />
              </Link>
            </div>
          )}
          {image_2 && (
            <div style={{ width: 120 }}>
              <Link to="/cardapio">
                <img style={{ width: 120, borderRadius: 6 }} src={image_2.source_url} />
              </Link>
            </div>
          )}
          {image_3 && (
            <div style={{ width: 120 }}>
              <Link to="/cardapio">
                <img style={{ width: 120, borderRadius: 6 }} src={image_3.source_url} />
              </Link>
            </div>
          )}
          {image_4 && (
            <div style={{ width: 120 }}>
              <Link to="/cardapio">
                <img style={{ width: 120, borderRadius: 6 }} src={image_4.source_url} />
              </Link>
            </div>
          )}
          {image_5 && (
            <div style={{ width: 120 }}>
              <Link to="/cardapio">
                <img style={{ width: 120, borderRadius: 6 }} src={image_5.source_url} />
              </Link>
            </div>
          )}
        </Swiper>
      </SwiperContainer>
      <DimWave />
    </Container>
  </VejaMaisComponent>
);

export default VejaMais;
