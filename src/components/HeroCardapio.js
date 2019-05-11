import * as React from 'react';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';

import { GreenButton } from './Button';
import ModalEncomendas from './ModalEncomendas';

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

class HeroCardapio extends React.Component {
  state = {
    isModalEncomendasOpened: false,
  };

  toggleModalEncomendasState = () => {
    this.setState(prevState => ({
      isModalEncomendasOpened: !prevState.isModalEncomendasOpened,
    }));
  };

  render() {
    const { isModalEncomendasOpened } = this.state;

    return (
      <StaticQuery
        query={graphql`
          {
            allWordpressPage {
              edges {
                node {
                  id
                  title
                  acf {
                    home_title
                  }
                }
              }
            }
          }
        `}
        render={props => {
          const wordpressData = props.allWordpressPage.edges['0'].node.acf;

          return (
            <React.Fragment>
              <HeroSection>
                <div
                  className="as-hero"
                  style={{ padding: '120px 0px 80px', margin: '0 auto', maxWidth: 960 }}
                >
                  <P>BEM-VINDO</P>
                  <H1>{wordpressData.home_title}</H1>
                  <GreenButton
                    whats
                    onClick={e => {
                      e.preventDefault();
                      this.toggleModalEncomendasState();
                    }}
                  >
                    Fazer pedido
                  </GreenButton>
                </div>
              </HeroSection>
              {isModalEncomendasOpened && (
                <ModalEncomendas toggleModalEncomendas={this.toggleModalEncomendasState} />
              )}
            </React.Fragment>
          );
        }}
      />
    );
  }
}

export default HeroCardapio;
