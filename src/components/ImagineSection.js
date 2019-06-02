import * as React from 'react';
import styled from 'styled-components';
import parse from 'html-react-parser';

import { GreenButton } from './Button';
import { DimWave } from './Wave';

const ImagineSectionComponent = styled.section`
  padding: 80px 0;
  background: url('https://s3-sa-east-1.amazonaws.com/anneschuartz/pattern.png') repeat center;

  .ann-wrapper {
    max-width: 600px;
    margin: 0 auto;

    button {
      margin: 0 auto;
    }

    @media screen and (max-width: 600px) {
      max-width: calc(100% - 60px);
    }

    span {
      margin: 40px auto;
    }

    h2 {
      margin-bottom: 20px;
    }

    p {
      font: 14px Muli;
      line-height: 1.7;
    }
  }
`;

const ImagineSection = props => (
  <ImagineSectionComponent>
    <div className="ann-wrapper">
      <h2>{props.title}</h2>
      <p>{parse(props.description)}</p>
      <DimWave />
      <GreenButton
        cta
        whats
        title="Pedir sua encomemda"
        tabIndex={0}
        onClick={props.toggleModalEncomendas}
      >
        Pedir sua encomemda
      </GreenButton>
    </div>
  </ImagineSectionComponent>
);

export default ImagineSection;
