import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import onClickOutside from 'react-onclickoutside';

const MenuDropdown = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 220px;
  box-shadow: 0 2px 10px 0 rgba(33, 3, 5, 0.1);
  background: #fff;
  padding: 30px 40px;
  opacity: 1;
  border-radius: 9px;
  top: 40px;
  align-items: flex-start;
  
  a {
    color: #210305 !important;
    transition: 0.5s ease;

    &:hover,
    &:focus {
      transition: 0.5s ease !important;
      color: rgba(33, 3, 5, 0.50) !important;
    }

    &:not(:last-of-type) {
      margin-bottom: 18px;
    }
  }
`;

const DropdownMenu = props => (
  <MenuDropdown>
    <Link to="/cardapio">Ver tudo</Link>
    {props.allWordpressWpCardapio.edges.map(cardapioItem =>
      cardapioItem.node.acf.item_cardapio_ativado === true ? (
        <Link to={`/cardapio/${cardapioItem.node.slug}`}>{cardapioItem.node.title}</Link>
      ) : null
    )}
  </MenuDropdown>
);

export default onClickOutside(DropdownMenu);
