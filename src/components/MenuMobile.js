import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import MenuMobileComponent from './MenuMobileComponent';

const MenuMobile = ({ toggleMenuMobile, socialNetworks }) => (
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
        socialNetworks={socialNetworks}
        toggleMenuMobile={toggleMenuMobile}
      />
    )}
  />
);

export default MenuMobile;
