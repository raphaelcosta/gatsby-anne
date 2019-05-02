import * as React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import { GreenButton } from '../components/Button';
import CardapioBox from '../components/CardapioBox';
import ModalEncomendas from '../components/ModalEncomendas';

const P = styled.p`
  color: #c94f46;
  font: 16px Muli;
  font-weight: bold;
  margin: 0;
`;

const HeroSection = styled.section`
  background: url('https://s3-sa-east-1.amazonaws.com/anneschuartz/pattern.png') repeat center;
`;

const H1 = styled.h1`
  font-weight: 400;
  font: 40px Abril;
  margin: 30px 50px;
  max-width: 500px;
  text-align: center;
`;

const StyledCardapioBoxContainer = styled.div`
  background: #210305;
`;

const StyledOverlay = styled.div`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), #000000);
  bottom: 0;
  height: 150px;
  left: 0;
  opacity: 0.5;
  position: absolute;
  width: 100%;
  z-idex: 5;
`;

class CardapioPage extends React.Component {
  state = {
    isModalEncomendasOpened: false,
  };

  toggleModalEncomendasState = () => {
    this.setState(prevState => ({
      isModalEncomendasOpened: !prevState.isModalEncomendasOpened,
    }));
  };

  render() {
    const { isModalEncomendasOpened } = this.state;

    return (
      <Layout>
        <HeroSection>
          <div className="as-hero" style={{ padding: '120px 0px 80px', margin: '0 auto', maxWidth: 960 }}>
            <P>BEM-VINDO</P>
            <H1>Um dia com doçura, é um dia com mais amor</H1>
            <GreenButton
              whats
              onClick={e => {
                e.preventDefault();
                this.toggleModalEncomendasState();
              }}
            >
              Fazer pedido
            </GreenButton>
          </div>
        </HeroSection>
        <StyledCardapioBoxContainer>
          <StaticQuery
            query={graphql`
              {
                allWordpressWpCardapio {
                  edges {
                    node {
                      id
                      date
                      status
                      slug
                      title
                      excerpt
                      featured_media {
                        source_url
                      }
                      acf {
                        item_cardapio_ativado
                      }
                    }
                  }
                }
              }
            `}
            render={props =>
              props.allWordpressWpCardapio.edges.map(produto => {
                return produto.node.acf.item_cardapio_ativado === true ? (
                  <CardapioBox
                    backgroundUrl={produto.node.featured_media.source_url}
                    key={produto.node.id}
                    to={`/cardapio/${produto.node.slug}`}
                  >
                    <p>{produto.node.title}</p>
                    <StyledOverlay />
                  </CardapioBox>
                ) : null;
              })
            }
          />
        </StyledCardapioBoxContainer>
        {isModalEncomendasOpened && (
          <ModalEncomendas toggleModalEncomendas={this.toggleModalEncomendasState} />
        )}
      </Layout>
    );
  }
}

export default CardapioPage;
