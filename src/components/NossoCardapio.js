import * as React from 'react';
import styled from 'styled-components';

import Container from './Container';
import { Wave } from './Wave';
import { GreenButton } from './Button';
import ModalEncomendas from './ModalEncomendas';

const NossoCardapioComponent = styled.section`
  background: url('https://s3-sa-east-1.amazonaws.com/anneschuartz/site/pink_bg.png') repeat center
    center;
  padding: 90px 0;
  > div {
    flex-direction: column;
  }
`;
const P = styled.p`
  font: 14px Muli;
  text-align: center;
  max-width: 420px;
  margin-bottom: 20px;
`;

class NossoCardapio extends React.Component {
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
    const { title, description } = this.props;

    return (
      <React.Fragment>
        <NossoCardapioComponent>
          <Container>
            <h2>{title}</h2>
            <Wave />
            <P dangerouslySetInnerHTML={{ __html: description }} />
            <GreenButton
              cta
              whats
              title="Fazer pedido"
              tabIndex={0}
              onClick={this.toggleModalEncomendasState}
            >
              Fazer pedido
            </GreenButton>
            {/* <Link style={{ textDecoration: "none", color: "#210305" }} to="/">
        Saiba mais sobre a Anne
      </Link> */}
          </Container>
        </NossoCardapioComponent>
        {isModalEncomendasOpened && (
          <ModalEncomendas toggleModalEncomendas={this.toggleModalEncomendasState} />
        )}
      </React.Fragment>
    );
  }
}

export default NossoCardapio;
