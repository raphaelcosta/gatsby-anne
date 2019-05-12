import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import { GreenButton } from './Button';
import ModalEncomendas from './ModalEncomendas';

const ConfiraCardapioBoxWrapper = styled.section`
  margin: 0 auto;
  padding: 100px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f2eae5;

  a {
    text-decoration: none;
    color: #210305;
    outline: 0;
    font: 16px Muli, Helvetica, sans-serif;
    font-weight: bold;
    letter-spacing: 0.2px;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px dashed;
    position: relative;
    margin-bottom: 30px;

    &:before {
      content: '';
      margin-right: 5px;
      position: absolute;
      left: -20px;
      width: 10px;
      height: 10px;
      background: url('https://s3-sa-east-1.amazonaws.com/anneschuartz/site/arrow-down-brown.svg')
        no-repeat center center;
    }
  }
`;

class ConfiraCardapioBox extends React.Component {
  state = {
    isModalEncomendasOpened: false,
  };

  toggleModalEncomendasState = () => {
    this.setState(prevState => ({
      isModalEncomendasOpened: !prevState.isModalEncomendasOpened,
    }));
  };

  render() {
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
                    cardapio {
                      menu_file {
                        source_url
                      }
                    }
                  }
                }
              }
            }
          }
        `}
        render={props => {
          const wordpressData = props.allWordpressPage.edges['0'].node.acf;
          const cardapioData = wordpressData.cardapio;

          return (
            <React.Fragment>
              <ConfiraCardapioBoxWrapper>
                {cardapioData && (
                  <a
                    href={cardapioData.menu_file.source_url}
                    tabIndex={0}
                    target="_blank"
                    title="Confira o cardápio completo"
                    rel="noopener noreferrer"
                  >
                    Confira o cardápio completo
                  </a>
                )}
                <GreenButton
                  whats
                  onClick={e => {
                    e.preventDefault();
                    this.toggleModalEncomendasState();
                  }}
                >
                  Fazer pedido
                </GreenButton>
              </ConfiraCardapioBoxWrapper>
              {this.state.isModalEncomendasOpened && (
                <ModalEncomendas toggleModalEncomendas={this.toggleModalEncomendasState} />
              )}
            </React.Fragment>
          );
        }}
      />
    );
  }
}

export default ConfiraCardapioBox;
