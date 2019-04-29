import * as React from 'react';
import { Link } from 'gatsby';

import styled from 'styled-components';

const P = styled.p`
  color: #c94f46;
  font: 16px Muli;
  font-weight: bold;
  margin: 0;
`;

const HeroSection = styled.section`
  background: url('https://s3-sa-east-1.amazonaws.com/anneschuartz/pattern.png') repeat center;
`;

const H1 = styled.h1`
  font-weight: 400;
  font: 40px Abril;
  margin: 30px 50px;
  max-width: 500px;
  text-align: center;
`;

const StyledLink = styled(Link)`
  background: #c94f46;
  border: 0;
  font-family: Muli;
  font: 14px Muli;
  border-radius: 50px;
  color: #fff;
  padding: 18px 60px;
  font-weight: bold;
  box-shadow: 0 3px 14px 0 rgba(157, 157, 157, 0.4);
  cursor: pointer;
  transition: all 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 240px;
  text-decoration: none;

  &:hover,
  &:focus {
    background: rgba(201, 79, 70, 0.8);
  }
`;

const Hero = props => (
  <HeroSection>
    <div className="as-hero" style={{ padding: '176px 0', margin: '0 auto', maxWidth: 960 }}>
      <P>BEM-VINDO</P>
      <H1>{props.title}</H1>
      <StyledLink to="/cardapio">Ver cardápio</StyledLink>
    </div>
  </HeroSection>
);

export default Hero;
