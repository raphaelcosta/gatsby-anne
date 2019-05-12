import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Icon from './Icon';
import Container from './Container';
import MenuMobile from './MenuMobile';

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
    flex: 1;
    display: flex;
    justify-content: space-around;
    margin: 0 100px;

    a {
      text-decoration: none;
      color: #dfd2ad;
      font: 600 16px Muli;
      transition: 0.5s ease;

      &:hover,
      &:focus {
        transition: 0.5s ease;
        opacity: 0.5;
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
  width: 36px;

  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;

class Header extends React.Component {
  state = {
    menuOpened: false,
  };

  toggleMenuMobile = () => {
    this.setState(prevState => ({ menuOpened: !prevState.menuOpened }));
  };

  render() {
    const { socialNetworks } = this.props;
    const { menuOpened } = this.state;

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
              src="https://s3-sa-east-1.amazonaws.com/anneschuartz/site/logo.svg"
            />
          </Link>
          <div className="ann-menu-elments">
            <Link title="Página Inicial" to="/">
              Página Inicial
            </Link>
            <Link title="Cardápio" to="/cardapio">
              Cardápio
            </Link>
            <Link title="Sobre a Anne" to="/">
              Sobre a Anne
            </Link>
            <Link title="Contato" to="/">
              Contato
            </Link>
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
            <button onClick={() => this.toggleMenuMobile()}>Toggle</button>
          </div>
        </Container>
        {menuOpened && <MenuMobile toggleMenuMobile={this.toggleMenuMobile} />}
      </HeaderComponent>
    );
  }
}

export default Header;
