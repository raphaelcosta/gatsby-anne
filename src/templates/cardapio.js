import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import Container from '../components/Container';
import { GreenButton } from '../components/Button';
import ModalEncomendas from '../components/ModalEncomendas';
import MediaStories from '../components/MediaStories';

const HeroSection = styled.section`
  padding: 70px 0;
  background: url('https://s3-sa-east-1.amazonaws.com/anneschuartz/pattern.png') repeat center;
  button {
    margin: 30px auto 0;
  }
`;

const H1 = styled.h1`
  font-weight: 400;
  font: 40px Abril;
  margin: 0 auto;
  text-align: center;
  padding: 10px 0;
`;

const TableSection = styled.div`
  padding: 50px 20px;
`;

const StyledTable = styled.table`
  max-width: 600px;
  margin: 0 auto;
  font: 14px Muli;
  color: #210305;

  th {
    color: #c94f46;
  }
`;

const TableDivider = styled.span`
  margin: 0 5px;

  &:before {
    content: '|';
  }
`;

const SectionReturn = styled.div`
  background: #f1eae5;
  padding: 40px 0;
  a {
    color: #210305;
    font: 600 16px Muli;
    text-decoration: none;
    border-bottom: 1px dotted #210305;
    position: relative;

    &:hover,
    &:focus {
      &:before {
        left: -25px;
      }
    }

    &:before {
      content: '';
      width: 10px;
      height: 10px;
      z-index: 10;
      display: flex;
      left: -20px;
      position: absolute;
      top: 6px;
      transform: rotate(90deg);
      background: url('https://s3-sa-east-1.amazonaws.com/anneschuartz/site/arrow-down.svg')
        no-repeat center center;
    }
  }
`;

const CardapioDescription = styled.div`
  font: 14px Muli;
  margin: 15px auto 0;
  max-width: 700px;
  padding: 0 40px;

  p {
    margin-bottom: calc(1.45rem / 2);
  }

  li {
    line-height: 1.5;
  }
`;

export default class extends React.Component {
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
    const { pageContext } = this.props;

    return (
      <Layout>
        <MediaStories backgroundUrl={pageContext.featured_media.source_url} title="Ver fotos" galleryData={pageContext.acf.media_gallery} />
        <HeroSection>
          <H1>{pageContext.title}</H1>
          {pageContext.acf.description && (
            <CardapioDescription
              dangerouslySetInnerHTML={{ __html: pageContext.acf.description }}
            />
          )}
          <GreenButton
            whats
            onClick={e => {
              e.preventDefault();
              this.toggleModalEncomendasState();
            }}
          >
            Fazer pedido
          </GreenButton>
        </HeroSection>
        <TableSection>
          {pageContext.acf.products.categories &&
            pageContext.acf.products.categories.map(category => (
              <StyledTable key={category.name}>
                <tbody>
                  <tr>
                    <th>{category.name}</th>
                    <th />
                  </tr>
                  {category.products.map(product => (
                    <tr key={product.name}>
                      <td style={{ fontWeight: '600' }}>
                        {product.name}
                        <TableDivider />
                        {product.description}
                      </td>
                      <td
                        style={{ color: '#624244', width: '20%', textAlign: 'center' }}
                      >{`R$${product.value.replace(/\./g, ',')}`}</td>
                    </tr>
                  ))}
                </tbody>
              </StyledTable>
            ))}
        </TableSection>
        <SectionReturn>
          <Container>
            <Link title="Voltar" tabIndex={0} to={'/cardapio'}>
              Voltar
            </Link>
          </Container>
        </SectionReturn>
        {isModalEncomendasOpened && (
          <ModalEncomendas toggleModalEncomendas={this.toggleModalEncomendasState} />
        )}
      </Layout>
    );
  }
}
