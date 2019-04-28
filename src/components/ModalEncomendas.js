import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Encomendas from './Encomendas';

const ModalEncomendas = ({ toggleModalEncomendas }) => (
  <StaticQuery
    query={graphql`
      {
        allWordpressWpCardapio {
          edges {
            node {
              id
              title
              acf {
                item_cardapio_ativado
                products {
                  categories {
                    name
                    products {
                      name
                      description
                      value
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={props => (
      <Encomendas
        toggleModalEncomendas={toggleModalEncomendas}
        cardapioProducts={props.allWordpressWpCardapio.edges}
      />
    )}
  />
);

export default ModalEncomendas;
