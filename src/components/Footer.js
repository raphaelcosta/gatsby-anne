import * as React from "react"
import styled from "styled-components"
import Container from "./Container"

const FooterComponent = styled.footer`
  padding: 70px 0;
  display: flex;
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
              <a
                title="Ligue para a Anne"
                href="tel:4137798785"
                rel="noopener noreferrer"
              >
                (41) 3779-8785
              </a>
            </ListElement>
            <ListElement>
              {/* <a
                title="Instagram"
                rel="noopener noreferrer"
                tabIndex={0}
                href="https://www.instagram.com/anneschuartz/"
                target="_blank"
              />
              <a
                title="Facebook"
                rel="noopener noreferrer"
                tabIndex={0}
                href="https://www.facebook.com/anneschuartz/"
                target="_blank"
              />
              <a
                title="spotify playlist"
                rel="noopener noreferrer"
                tabIndex={0}
                href="https://open.spotify.com/user/12180965366/playlist/7hesivtrFtrHpnkTyti5Ox?si=KRLe-dzHQGOrdR7LkM128A"
              /> */}
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
    </FooterComponent>
    <SubFooter />
  </React.Fragment>
)

export default Footer
