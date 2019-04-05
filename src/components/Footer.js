import * as React from "react"
import styled from "styled-components"
import Container from "./Container"
import Icon from "./Icon"

const FooterComponent = styled.footer`
  padding: 70px 0;
  display: flex;
  flex-direction: column;
  background: url("https://s3-sa-east-1.amazonaws.com/anneschuartz/site/pink_bg.png")
    repeat center center;
  > div {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    @media (max-width: 700px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`

const SocialNetworks = styled.div`
  max-width: 160px;
  border: solid 1px #380609;
  border-radius: 4px;
  padding: 10px 15px;
  flex-direction: row !important;
  margin-top: 55px !important;

  a {
    display: flex;
    text-decoration: none;
    color: #380609;

    &:first-of-type {
      span {
        border-right: 1px solid #380609;
        padding-right: 15px;
      }
    }

    &:last-of-type {
      span {
        border-left: 1px solid #380609;
        padding-left: 15px;
      }
    }
  }

  span {
    &:before {
      margin-right: 0;
    }
  }
`

const SubFooter = styled.div`
  background: #210305;
  height: 40px;
  width: 100%;
  display: block;
`

const ListTitle = styled.dt`
  font: 16px Abril, Muli, Helvetica, sans-serif;
  color: #160203;
  margin-bottom: 20px;
`
const ListElement = styled.dd`
  font: 14px Muli, Helvetica, sans-serif;
  color: #160203;
  margin-bottom: 8px;
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    color: #160203;
  }
`
const Footer = () => (
  <React.Fragment>
    <FooterComponent>
      <Container>
        <div>
          <dl>
            <ListTitle>Local</ListTitle>
            <ListElement>Anne Schuartz Sweet Maker</ListElement>
            <ListElement>
              <a
                title="Alameda Presidente Taunay 1045"
                tabIndex={0}
                target="_blank"
                rel="noopener noreferrer"
                href="https://goo.gl/maps/MgMZK7K3bGK2"
              >
                Alameda Presidente Taunay 1045,
              </a>
            </ListElement>
          </dl>
        </div>
        <div>
          <dl>
            <ListTitle>Contato</ListTitle>
            <ListElement>
              <Icon mail />
              <a
                title="email"
                tabIndex={0}
                href="mailto:anne@anneschuartz.com.br"
                rel="noopener noreferrer"
              >
                anne@anneschuartz.com.br
              </a>
            </ListElement>
            <ListElement>
              <Icon whats />
              <a
                title="Envie-nos uma mensagem via whatsapp"
                tabIndex={0}
                rel="noopener noreferrer"
                href="https://api.whatsapp.com/send?phone=5541995958787"
              >
                (41) 9 9595-8787
              </a>
            </ListElement>
            <ListElement>
              <Icon phone />
              <a
                title="Ligue para a Anne"
                href="tel:4137798785"
                rel="noopener noreferrer"
              >
                (41) 3779-8785
              </a>
            </ListElement>
          </dl>
        </div>
        <div>
          <dl>
            <ListElement>Curitiba, Brasil</ListElement>
            <ListElement>Ter - Sáb: das 13h às 19h</ListElement>
            <ListElement>Dom: das 14h às 18h</ListElement>
          </dl>
        </div>
      </Container>
      <SocialNetworks>
        <a
          tabIndex={0}
          title="Visite o nosso instagram"
          href="https://www.instagram.com/anneschuartz/"
        >
          <Icon insta />
        </a>
        <a
          tabIndex={0}
          title="Visite o nosso facebook"
          href="https://www.facebook.com/anneschuartz/"
        >
          <Icon face />
        </a>
        <a
          tabIndex={0}
          title="Escute o nosso playlist"
          href="https://open.spotify.com/playlist/7hesivtrFtrHpnkTyti5Ox"
        >
          <Icon spotify />
        </a>
      </SocialNetworks>
    </FooterComponent>
    <SubFooter />
  </React.Fragment>
)

export default Footer
