import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Portal } from 'react-portal';
import cn from 'classnames';

const MenuMobileWrapper = styled.div`
  align-items: center;
  background: #210305;
  bottom: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  left: 0;
  overflow: auto;
  padding: 80px 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100vw;
  z-index: 50;
  max-height: 100%;
  overflow-y: scroll;
`;

const HeaderImage = styled.img`
  transition: 0.5s ease;
  width: 215px;

  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: 0;
`;

const MenuContent = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  width: 60vw;

  .ann-menu-link {
    position: relative;

    &.ann-active {
      &:before {
        transform: rotate(180deg);
      }
    }

    &:before {
      content: '';
      width: 10px;
      height: 10px;
      z-index: 10;
      display: flex;
      left: 80px;
      position: absolute;
      top: 8px;
      background: url('https://s3-sa-east-1.amazonaws.com/anneschuartz/site/arrow-down-white.svg')
        no-repeat center center;
    }
  }

  a {
    color: #dfd2ad;
    text-decoration: none;
    transition: 0.5s ease;
    margin-bottom: 18px;
    font: 16px Muli;

    &:hover,
    &:focus {
      opacity: 0.5;
    }
  }
`;

const SubMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  left: 15px;
`;

class MenuMobileComponent extends React.Component {
  state = { menuItemsColapsed: false };

  render() {
    const { toggleMenuMobile, menuItems } = this.props;
    const { menuItemsColapsed } = this.state;

    return (
      <Portal>
        <MenuMobileWrapper>
          <CloseButton title="Fechar" tabIndex={0} onClick={() => toggleMenuMobile()}>
            <img src="https://s3-sa-east-1.amazonaws.com/anneschuartz/site/close.svg" />
          </CloseButton>
          <HeaderImage
            alt="Anne Schuartz"
            src="https://s3-sa-east-1.amazonaws.com/anneschuartz/site/anne-logo-completo.svg"
          />
          <MenuContent>
            <Link onClick={() => toggleMenuMobile()} to="/">
              Página Inicial
            </Link>
            <a
              className={cn('ann-menu-link', { 'ann-active': menuItemsColapsed })}
              onClick={() =>
                this.setState(prevState => ({
                  menuItemsColapsed: !prevState.menuItemsColapsed,
                }))
              }
            >
              Cardápio
            </a>
            {menuItemsColapsed && (
              <SubMenu>
                <Link title="Ver tudo" to="/cardapio">
                  Ver tudo
                </Link>
                {menuItems.map(category => {
                  return category.node.acf.item_cardapio_ativado === true ? (
                    <Link to={`/cardapio/${category.node.slug}`}>{category.node.title}</Link>
                  ) : null;
                })}
              </SubMenu>
            )}
            <Link onClick={() => toggleMenuMobile()} title="Sobre a Anne" to="/sobre-anne">
              Sobre a Anne
            </Link>
            <Link onClick={() => toggleMenuMobile()} title="Contato" to="/contato">
              Contato
            </Link>
          </MenuContent>
        </MenuMobileWrapper>
      </Portal>
    );
  }
}

export default MenuMobileComponent;
