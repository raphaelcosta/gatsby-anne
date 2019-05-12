import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import MenuMobileComponent from './MenuMobileComponent';

const MenuMobile = ({ toggleMenuMobile }) => (
  <StaticQuery
    query={graphql`
      {
        allWordpressWpCardapio {
          edges {
            node {
              id
              title
              slug
              acf {
                item_cardapio_ativado
              }
            }
          }
        }
      }
    `}
    render={props => (
      <MenuMobileComponent
        menuItems={props.allWordpressWpCardapio.edges}
        toggleMenuMobile={toggleMenuMobile}
      />
    )}
  />
);

export default MenuMobile;
