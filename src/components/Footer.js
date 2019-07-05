import * as React from 'react';
import styled from 'styled-components';
import Container from './Container';
import Icon from './Icon';

const FooterComponent = styled.footer`
  padding: 70px 0;
  display: flex;
  flex-direction: column;
  background: url('https://s3-sa-east-1.amazonaws.com/anneschuartz/site/pink_bg.png') repeat center
    center;
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
`;

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
`;

const SubFooter = styled.div`
  background: #210305;
  height: 40px;
  width: 100%;
  display: block;
`;

const ListTitle = styled.dt`
  font: 16px Abril, Muli, Helvetica, sans-serif;
  color: #160203;
  margin-bottom: 20px;
`;
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
`;
const Footer = ({ location, contact, schedule }) => (
  <React.Fragment>
    <FooterComponent id="footer">
      <Container>
        <dl>
          <ListTitle>{location.title}</ListTitle>
          <ListElement>Anne Schuartz Sweet Maker</ListElement>
          <ListElement>
            <a
              title={location.address}
              tabIndex={0}
              target="_blank"
              rel="noopener noreferrer"
              href={location.url}
              dangerouslySetInnerHTML={{ __html: location.address }}
            />
          </ListElement>
        </dl>
        <dl>
          <ListTitle>{contact.title}</ListTitle>
          <ListElement>
            <Icon mail />
            <a
              title="email"
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={0}
              href={`mailto:${contact.email}`}
            >
              {contact.email}
            </a>
          </ListElement>
          <ListElement>
            <Icon whats />
            <a
              title="Envie-nos uma mensagem via whatsapp"
              tabIndex={0}
              target="_blank"
              rel="noopener noreferrer"
              href={`https://api.whatsapp.com/send?phone=${contact.whatsapp}`}
            >
              {contact.whatsapp}
            </a>
          </ListElement>
          <ListElement>
            <Icon phone />
            <a title="Ligue para a Anne" href={`tel:${contact.fixo}`} rel="noopener noreferrer">
              {contact.fixo}
            </a>
          </ListElement>
        </dl>
        <dl>
          <ListTitle>{schedule.title}</ListTitle>
          <ListElement dangerouslySetInnerHTML={{ __html: schedule.content }} />
        </dl>
      </Container>
      <SocialNetworks>
        <a
          tabIndex={0}
          target="_blank"
          rel="noopener noreferrer"
          title="Visite o nosso instagram"
          href={contact.social_networks.instagram}
        >
          <Icon insta />
        </a>
        <a
          tabIndex={0}
          target="_blank"
          rel="noopener noreferrer"
          title="Visite o nosso facebook"
          href={contact.social_networks.facebook}
        >
          <Icon face />
        </a>
        <a
          tabIndex={0}
          target="_blank"
          rel="noopener noreferrer"
          title="Escute o nosso playlist"
          href={contact.social_networks.spotify}
        >
          <Icon spotify />
        </a>
      </SocialNetworks>
    </FooterComponent>
    <SubFooter />
  </React.Fragment>
);

export default Footer;
