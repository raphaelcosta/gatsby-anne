import * as React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import CardapioBox from '../components/CardapioBox';
import HeroCardapio from '../components/HeroCardapio';
import ConfiraCardapioBox from '../components/ConfiraCardapioBox';

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

const CardapioPage = () => (
  <Layout>
    <React.Fragment>
      <HeroCardapio />
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
      <ConfiraCardapioBox />
    </React.Fragment>
  </Layout>
);

export default CardapioPage;
