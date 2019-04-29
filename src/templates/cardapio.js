import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import Container from '../components/Container';
import { GreenButton } from '../components/Button';
import ModalEncomendas from '../components/ModalEncomendas';

const CardapioBoxContainer = styled.div`
  background: #210305;
  margin-top: 70px;
`;

const CardapioBox = styled.div`
  height: 450px;
  width: 100%;
  display: flex;
  background: url('https://s3-sa-east-1.amazonaws.com/anneschuartz/site/CAPA_BRIGADEIROS.jpg')
    no-repeat;
  ${props => props.backgroundUrl && `background: url(${props.backgroundUrl}) no-repeat;`}
  background-size: cover;
  background-position: center;
  position: relative;
  max-width: 700px;
  margin: 0 auto;
  transition: background-size 2s ease-in;
  cursor: pointer;
  overflow: hidden;

  &:hover,
  &:focus {
    transition: background-size 2s ease-in;
    background-size: 1000px;

    div {
      display: none;
    }

    p {
      transition: all 0.5s ease;
    }
  }

  p {
    margin: 0;
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: #fff;
    font: 600 35px Muli;
    z-index: 10;
  }
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

const P = styled.p`
  font-weight: 400;
  font: 14px Muli;
  color: #624244;
  margin: 0 auto;
  max-width: 600px;
  padding: 0 24px;
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
        <CardapioBoxContainer>
          <CardapioBox backgroundUrl={pageContext.featured_media.source_url}>
            <StyledOverlay />
          </CardapioBox>
        </CardapioBoxContainer>

        <HeroSection>
          <H1>{pageContext.title}</H1>
          {pageContext.acf.description && (
            <P dangerouslySetInnerHTML={{ __html: pageContext.acf.description }} />
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
