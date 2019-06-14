import * as React from 'react';
import styled from 'styled-components';
import parse from 'html-react-parser';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import Container from './Container';

const MuitoAmorComponent = styled.section`
  background: url('https://s3-sa-east-1.amazonaws.com/anneschuartz/pattern.png') repeat center
    center;
  padding: 90px 0;
  > div {
    justify-content: center;
    flex-direction: column;
    h2 {
      margin-bottom: 40px;
    }
  }

  .ann-text {
    font: 14px Muli;
    max-width: 520px;
  }
`;

const ArrowButtonBack = styled(ButtonBack)`
  height: 40px;
  width: 40px;
  background: url('https://anneschuartz.s3-sa-east-1.amazonaws.com/site/carousell/arrow-in-circle-point-to-up.svg')
    no-repeat center center;
  transform: rotate(270deg);
  ${props => props.disabled && `opacity: 0.5;`}
  border: 0;
  outline: 0;
`;

const ArrowButtonNext = styled(ButtonNext)`
  height: 40px;
  width: 40px;
  border: 0;
  transform: rotate(90deg);
  outline: 0;
  ${props => props.disabled && `opacity: 0.5;`}
  background: url('https://anneschuartz.s3-sa-east-1.amazonaws.com/site/carousell/arrow-in-circle-point-to-up.svg')
    no-repeat center center;
`;

const StyledSlider = styled(Slider)`
  min-height: 120px;
  height: 120px;
  margin: 0 40px;
  width: 100%;
  max-width: 500px;

  @media only screen and (max-width: 500px) {
    height: 270px;
  }

  ul {
    height: 100px;
  }
`;

const StyledCarouselProvider = styled(CarouselProvider)`
  display: flex;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
`;

const StyledSlide = styled(Slide)`
  height: 100px !important;
`


const MuitoAmor = ({ title, content, content_2 }) => (
  <React.Fragment>
    <MuitoAmorComponent>
      <Container>
        <h2>{title}</h2>
        <StyledCarouselProvider naturalSlideWidth={400} naturalSlideHeight={300} totalSlides={2}>
          <ArrowButtonBack />
          <StyledSlider>
            <StyledSlide className="ann-text" index={0}>
              {parse(content)}
            </StyledSlide>
            <StyledSlide className="ann-text" index={1}>
              {parse(content_2)}
            </StyledSlide>
          </StyledSlider>
          <ArrowButtonNext />
        </StyledCarouselProvider>
      </Container>
    </MuitoAmorComponent>
  </React.Fragment>
);

export default MuitoAmor;
