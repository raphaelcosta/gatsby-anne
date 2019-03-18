import * as React from "react"
import styled from "styled-components"
import Container from "./Container"
import { GreenButton } from "./Button"
import ModalEncomendas from "./ModalEncomendas"
const MuitoAmorComponent = styled.section`
  background: url("https://s3-sa-east-1.amazonaws.com/anneschuartz/pattern.png")
    repeat center center;
  padding: 90px 0;
  > div {
    justify-content: center;
    flex-direction: column;
    h2 {
      margin-bottom: 40px;
    }
  }
`

const P = styled.p`
  font: 14px Muli;
  max-width: 520px;
`

class MuitoAmor extends React.Component {
  state = {
    isModalEncomendasOpened: false,
  }

  toggleModalEncomendasState = () => {
    this.setState(prevState => ({
      isModalEncomendasOpened: !prevState.isModalEncomendasOpened,
    }))
  }
  render() {
    const { isModalEncomendasOpened } = this.state
    return (
      <React.Fragment>
        <MuitoAmorComponent>
          <Container>
            <h2>Dedicação e muito amor</h2>
            <P>
              "Anne, obrigada pela atenção e dedicação do seu serviço. Como
              sempre, você nos surpreendeu com os seus lindos e maravilhosos
              bolos, estavam perfeitos!” Gustavo Rodrigues, Curitiba.
            </P>
            <GreenButton
              title="Fazer pedido"
              tabIndex={0}
              onClick={this.toggleModalEncomendasState}
            >
              Fazer pedido
            </GreenButton>
          </Container>
        </MuitoAmorComponent>
        {isModalEncomendasOpened && (
          <ModalEncomendas
            toggleModalEncomendas={this.toggleModalEncomendasState}
          />
        )}
      </React.Fragment>
    )
  }
}

export default MuitoAmor
