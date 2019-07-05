import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Icon from './Icon';
import Container from './Container';
import MenuMobile from './MenuMobile';
import DropdownMenu from './DropdownMenu';

const HeaderComponent = styled.header`
  alignitems: center;
  background: #210305;
  display: flex;
  height: 95px;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 20;

  .ann-header-image-mobile {
    display: none;
  }

  .ann-hamburger-mobile {
    flex: 1;
    display: none;
    justify-content: flex-end;
    postion: relative;

    button {
      background: transparent;
      border: 0;

      &:before {
        content: '';
        width: 30px;
        height: 30px;
        position: absolute;
        top: 20px;
        background: url('https://s3-sa-east-1.amazonaws.com/anneschuartz/site/hamburger.svg')
          no-repeat center center;
      }
    }
  }

  @media only screen and (max-width: 990px) {
    height: 70px;

    .ann-hamburger-mobile,
    .ann-header-image-mobile {
      display: flex;
    }

    .ann-menu-elments,
    .ann-menu-social,
    .ann-header-image-desktop {
      display: none !important;
    }
  }

  .ann-menu-elments {
    position: relative;
    flex: 1;
    display: flex;
    justify-content: space-around;
    margin: 0 100px;

    a,
    button {
      text-decoration: none;
      color: #dfd2ad;
      font: 600 16px Muli;
      transition: 0.5s ease;
      cursor: pointer;
      background: transparent;
      border: 0;
      outline: 0;

      &:hover,
      &:focus {
        transition: 0.5s ease;
        color: rgba(223, 210, 173, 0.5);
      }
    }
  }

  .ann-menu-social {
    border: 1px solid rgba(223, 210, 173, 0.4);
    border-radius: 4px;
    padding: 3px 10px;
    display: flex;

    a {
      transition: 0.5s ease;
      display: flex;
      text-decoration: none;
      color: #dfd2ad;

      &:hover,
      &:focus {
        transition: 0.5s ease;
        opacity: 0.5;
      }

      span {
        &:before {
          font-size: 20px !important;
        }
      }

      &:first-of-type {
        span {
          border-right: 1px solid rgba(223, 210, 173, 0.4);
          padding-right: 10px;
        }
      }

      &:nth-child(2) {
        padding: 0 10px;
      }

      &:last-of-type {
        span {
          border-left: 1px solid rgba(223, 210, 173, 0.4);
          padding-left: 10px;
        }
      }
    }

    span {
      &:before {
        margin-right: 0;
      }
    }
  }
`;

const HeaderImage = styled.img`
  transition: 0.5s ease;
  width: 125px;

  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;

const HeaderImageMobile = styled.img`
  transition: 0.5s ease;
  width: 90px;

  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;

class Header extends React.Component {
  state = {
    menuOpened: false,
    dropdownCardapioOpened: false,
  };

  toggleMenuMobile = () => {
    this.setState(prevState => ({ menuOpened: !prevState.menuOpened }));
  };

  toggleMenuCardapio = () => {
    this.setState(prevState => ({ dropdownCardapioOpened: !prevState.dropdownCardapioOpened }));
  };

  render() {
    const { socialNetworks } = this.props;
    const { menuOpened, dropdownCardapioOpened } = this.state;

    return (
      <HeaderComponent>
        <Container>
          <Link title="Nossa homepage" to="/">
            <HeaderImage
              className="ann-header-image-desktop"
              alt="Anne Schuartz"
              src="https://s3-sa-east-1.amazonaws.com/anneschuartz/site/anne-logo-completo.svg"
            />
            <HeaderImageMobile
              className="ann-header-image-mobile"
              alt="Anne Schuartz"
              src="https://s3-sa-east-1.amazonaws.com/anneschuartz/site/anne-logo-completo.svg"
            />
          </Link>
          <div className="ann-menu-elments">
            <Link title="Página Inicial" to="/">
              Página Inicial
            </Link>
            <button onClick={this.toggleMenuCardapio} title="Cardápio">
              Cardápio
              {dropdownCardapioOpened && (
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
                    <DropdownMenu handleClickOutside={this.toggleMenuCardapio} {...props} />
                  )}
                />
              )}
            </button>
            <Link title="Sobre a Anne" to="/sobre-a-anne">
              Sobre a Anne
            </Link>
            <a title="Contato" href="#footer">
              Contato
            </a>
          </div>
          <div className="ann-menu-social">
            <a
              href={socialNetworks.social_networks.instagram}
              rel="noopener noreferrer"
              target="_blank"
              title="Instagram"
            >
              <Icon insta />
            </a>
            <a
              href={socialNetworks.social_networks.facebook}
              rel="noopener noreferrer"
              target="_blank"
              title="Facebook"
            >
              <Icon face />
            </a>
            <a
              href={socialNetworks.social_networks.spotify}
              rel="noopener noreferrer"
              target="_blank"
              title="Spotify"
            >
              <Icon spotify />
            </a>
          </div>
          <div className="ann-hamburger-mobile">
            <button onClick={() => this.toggleMenuMobile()} />
          </div>
        </Container>
        {menuOpened && (
          <MenuMobile
            socialNetworks={socialNetworks.social_networks}
            toggleMenuMobile={this.toggleMenuMobile}
          />
        )}
      </HeaderComponent>
    );
  }
}

export default Header;
