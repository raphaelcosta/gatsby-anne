import * as React from "react"
import { Portal } from "react-portal"
import enhanceWithClickOutside from "react-click-outside"
import styled from "styled-components"

import { GreenButton } from "./Button"

const Overlay = styled.div`
  align-items: center;
  background: rgba(33, 3, 5, .7);
  bottom: 0;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%
  z-index: 5;
`
const ModalContainer = styled.div`
  align-items: center;
  bottom: 0;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 5;
`

const ModalEncomendasComponent = styled.div`
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 6px 0 #210305;
  padding: 26px 26px 30px;
  position: relative;
  width: 380px;
  max-height: 600px;
  z-index: 10;
`
const P = styled.p`
  font: 16px Muli;
  font-weight: bold;
  color: #293e52;
  margin-bottom: 18px;
  span {
    color: #dc8c86;
  }
`

const CloseButton = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  font: 12px Muli;
  position: absolute;
  right: 12px;
  top: 12px;

  &:focus {
    outline: 0;
  }
`

const SelectWrapper = styled.div`
  border: 1px solid #dfa19b;
  border-radius: 5px;
  padding: 20px 26px;
  max-height: 400px;
  overflow: auto;
`
const OrderDetails = styled.div`
  border-top: 1px dashed #895858;
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: #ecd7c8;
  font: 14px Muli;
  padding: 10px 0;
  p {
    margin: 0;
  }
`

const AddMore = styled.a`
  align-items: center;
  background: rgba(223, 161, 155, 0.3);
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin-top: 14px;
  opacity: 0.3;
  padding: 38px 0;
  transition: all 0.5s ease;
  width: 100%;

  p {
    margin: 0;
  }
  &:hover,
  &:focus {
    opacity: 0.5;
  }
`

const CustomSelect = styled.div`
  position: relative;

  &:before {
    content: "";
    width: 10px;
    height: 10px;
    z-index: 10;
    display: flex;
    right: 0;
    position: absolute;
    top: 15px;
    background: url("https://s3-sa-east-1.amazonaws.com/anneschuartz/site/arrow-down.svg")
      no-repeat center center;
  }

  select {
    appearance: none;
    background: #fff;
    border: 0;
    color: #dc8c86;
    cursor: pointer;
    display: flex;
    font: 14px Muli;
    height: 40px;
    padding: 0;
    width: 100%;

    &:focus {
      outline: 0;
      color: #dc8c86;
    }
  }
`

class ModalEncomendas extends React.Component {
  state = {
    products: [{ name: "", value: "" }],
    pedido: "",
  }

  handleClickOutside() {
    const { toggleModalEncomendas } = this.props
    toggleModalEncomendas()
  }

  addNewProduct = e => {
    e.preventDefault()
    this.setState(prevState => ({
      products: [...prevState.products, { name: "", value: "" }],
    }))
  }

  handleSelect = e => {
    const value = e.target.value
    this.setState(prevState => ({ pedido: `${prevState.pedido} ${value},` }))
  }

  render() {
    const { toggleModalEncomendas } = this.props
    const { products } = this.state
    return (
      <Portal closeOnOutsideClick closeOnEsc>
        <Overlay onClick={toggleModalEncomendas} />
        <ModalContainer>
          <ModalEncomendasComponent>
            <P>
              Fazer pedido <span>- Escolha um produto</span>
            </P>
            <CloseButton
              onClick={e => {
                e.preventDefault()
                toggleModalEncomendas()
              }}
            >
              <img src="https://s3-sa-east-1.amazonaws.com/anneschuartz/site/close.svg" />
            </CloseButton>
            <SelectWrapper>
              {products.map((product, index) => (
                <CustomSelect>
                  <select onChange={e => this.handleSelect(e)}>
                    <option defaultValue>Escolha um produto</option>
                    {/* <optgroup label="Bolos cardápio normal">
                      <option value="Bolo Frutas R$ 110,00">
                        Bolo Frutas R$ 110,00
                      </option>
                      <option value="Bolo Brigadeiro Tradicional R$ 100,00">
                        Bolo Brigadeiro Tradicional R$ 100,00
                      </option>
                      <option value="Bolo Brigadeiro Especiais R$ 115,00">
                        Bolo Brigadeiro Especiais R$ 115,00
                      </option>
                      <option value="Bolo Butter Cream R$ 130,00">
                        Bolo Butter Cream R$ 130,00
                      </option>
                      <option value="Bolo Abacaxi com coco R$ 100,00">
                        Bolo Abacaxi com coco R$ 100,00
                      </option>
                      <option value="Bolo Caramelo com Flor de Sal R$ 125,00">
                        Bolo Caramelo com Flor de Sal R$ 125,00
                      </option>
                      <option value="Bolo Churros R$ 110,00">
                        Bolo Churros R$ 110,00
                      </option>
                      <option value="Bolo Ninho com Uva R$ 110,00">
                        Bolo Ninho com Uva R$ 110,00
                      </option>
                      <option value="Bolo Ninho com Nutella R$ 120,00">
                        Bolo Ninho com Nutella R$ 120,00
                      </option>
                      <option value="Bolo Frutas R$ 110,00">
                        Bolo Damasco c/ doce de leite R$ 120,00
                      </option>
                      <option value="Bolo Red Velvet R$ 120,00">
                        Bolo Red Velvet R$ 120,00
                      </option>
                      <option value="Bolo Cenoura c/ brigadeiro P R$ 75,00">
                        Bolo Cenoura c/ brigadeiro P R$ 75,00
                      </option>
                      <option value="Bolo Cenoura c/ brigadeiro M R$ 95,00">
                        Bolo Cenoura c/ brigadeiro P R$ 95,00
                      </option>
                      <option value="Bolo Cenoura c/ brigadeiro G R$ 115,00">
                        Bolo Cenoura c/ brigadeiro G R$ 115,00
                      </option>
                      <option value="Bolo Fubá c/ Goiabada P R$ 65,00">
                        Bolo Fubá c/ Goiabada P R$ 65,00
                      </option>
                      <option value="Bolo Fubá c/ Goiabada M R$ 80,00">
                        Bolo Fubá c/ Goiabada M R$ 80,00
                      </option>
                      <option value="Bolo Frutas R$ 110,00">
                        Bolo Fubá c/ Goiabada G R$ 95,00
                      </option>
                      <option value="Bolo Limão Siciliano c/ Blue Berry P R$ 80,00">
                        Bolo Limão Siciliano c/ Blue Berry P R$ 80,00
                      </option>
                      <option value="Bolo Limão Siciliano c/ Blue Berry M R$ 95,00">
                        Bolo Limão Siciliano c/ Blue Berry M R$ 95,00
                      </option>
                      <option value="Bolo Limão Siciliano c/ Blue Berry G R$ 110,00">
                        Bolo Limão Siciliano c/ Blue Berry G R$ 110,00
                      </option>
                      <option value="Bolo Indiano P R$ 65,00">
                        Bolo Indiano P R$ 65,00
                      </option>
                      <option value="Bolo Milho c/ coco P R$ 64,00">
                        Bolo Milho c/ coco P R$ 64,00
                      </option>
                      <option value="Torta Palha italiana kg R$ 100,00">
                        Torta Palha italiana kg R$ 100,00
                      </option>
                      <option value="Torta Palha italiana kg c/ frutas vermelhas R$ 115,00">
                        Torta Palha italiana kg c/ frutas vermelhas R$ 115,00
                      </option>
                      <option value="Torta brownie kg c/ brigadeiro R$ 120,00">
                        Torta brownie kg c/ brigadeiro R$ 120,00
                      </option>
                      <option value="Torta brownie kg c/ frutas vermelhas R$ 135,00">
                        Torta brownie kg c/ frutas vermelhas R$ 135,00
                      </option>
                      <option value="Brigadeiros Cento Tradicional R$ 250,00">
                        Brigadeiros Cento Tradicional R$ 250,00
                      </option>
                      <option value="Brigadeiros Cento Especiais R$ 270,00">
                        Brigadeiros Cento Especiais R$ 270,00
                      </option>
                      <option value="Brigadeiros Cento Finos R$ 300,00">
                        Brigadeiros Cento Finos R$ 300,00
                      </option>
                      <option value="Brigadeiros Marmitinha	3 unds.	R$ 10,00">
                        Brigadeiros Marmitinha 3 unds. R$ 10,00
                      </option>
                      <option value="Brigadeiros Marmitinha	6 unds.	R$ 14,00">
                        Brigadeiros Marmitinha 6 unds. R$ 14,00
                      </option>
                      <option value="Brigadeiros Marmitinha 12 unds. R$ 75,00">
                        Brigadeiros Marmitinha 12 unds. R$ 75,00
                      </option>
                      <option value="Brigadeiros Caixinha kraft 4 unds. R$ 75,00">
                        Brigadeiros Caixinha kraft 4 unds. R$ 75,00
                      </option>
                      <option value="Brigadeiros Caixinha kraft 20 unds. R$ 75,00">
                        Brigadeiros Caixinha kraft 20 unds. R$ 75,00
                      </option>
                      <option value="Brigadeiros Caixinha kraft 30 unds. R$ 75,00">
                        Brigadeiros Caixinha kraft 30 unds. R$ 75,00
                      </option>
                      <option value="Brigadeiros Caixinha presente 4 unds. R$ 24,00">
                        Brigadeiros Caixinha presente 4 unds. R$ 24,00
                      </option>
                      <option value="Brigadeiros Caixinha presente 6 unds. R$ 32,00">
                        Brigadeiros Caixinha presente 6 unds. R$ 32,00
                      </option>
                      <option value="Brigadeiros Caixinha presente 9 unds. R$ 42,00">
                        Brigadeiros Caixinha presente 9 unds. R$ 42,00
                      </option>
                      <option value="Brigadeiros Caixinha presente 12 unds. R$ 58,00">
                        Brigadeiros Caixinha presente 12 unds. R$ 58,00
                      </option>
                      <option value="Brigadeiros Caixinha presente 15 unds. R$ 68,00">
                        Brigadeiros Caixinha presente 15 unds. R$ 68,00
                      </option>
                      <option value="Brigadeiros Caixinha presente 25 unds. R$ 96,00">
                        Brigadeiros Caixinha presente 25 unds. R$ 96,00
                      </option>
                      <option value="Lembrancinhas Palha italiana	kg R$ 89,00">
                        Lembrancinhas Palha italiana kg R$ 89,00
                      </option>
                      <option value="Lembrancinhas Palha italiana potinho	P	R$ 16,00">
                        Lembrancinhas Palha italiana potinho P R$ 16,00
                      </option>
                      <option value="Lembrancinhas Palha italiana potinho	G	R$ 35,00">
                        Lembrancinhas Palha italiana potinho G R$ 35,00
                      </option>
                      <option value="Lembrancinhas Sandubinha de Brownie R$ 13,00">
                        Lembrancinhas Sandubinha de Brownie R$ 13,00
                      </option>
                      <option value="Lembrancinhas Sandubinha Especial P R$ 9,90">
                        Lembrancinhas Sandubinha Especial P R$ 9,90
                      </option>
                      <option value="Lembrancinhas Sandubinha Especial G R$ 15,50">
                        Lembrancinhas Sandubinha Especial G R$ 15,50
                      </option>
                      <option value="Lembrancinhas Cookie Brigadeiro R$ 7,50">
                        Lembrancinhas Cookie Brigadeiro R$ 7,50
                      </option>
                      <option value="Lembrancinhas Cookie Caramelo e Flor de Sal R$ 8,50">
                        Lembrancinhas Cookie Caramelo e Flor de Sal R$ 8,50
                      </option>
                      <option value="Lembrancinhas Saquinho mini cookies 3 unds. R$ 15,00">
                        Lembrancinhas Saquinho mini cookies 3 unds. R$ 15,00
                      </option>
                    </optgroup> */}
                    <optgroup label="Cardápio Páscoa Normal">
                      <option value="Páscoa - Ovo Caramelo flor de Sal R$ 98,00">
                        Páscoa - Ovo Caramelo flor de Sal R$ 98,00
                      </option>
                      <option value="Páscoa - Ovo Ninho com nutella R$ 95,00">
                        Páscoa - Ovo Ninho com nutella R$ 95,00
                      </option>
                      <option value="Páscoa - Ovo Brownie R$ 89,00">
                        Páscoa - Ovo Brownie R$ 89,00
                      </option>
                      <option value="Páscoa - Ovo Clássico R$ 82,00">
                        Páscoa - Ovo Clássico R$ 82,00
                      </option>
                      <option value="Páscoa - Ovo Laranjinha R$ 95,00">
                        Páscoa - Ovo Laranjinha R$ 95,00
                      </option>
                      <option value="Páscoa - Nuts R$ 89,00">
                        Páscoa - Nuts R$ 89,00
                      </option>
                      <option value="Páscoa Ovo - Nuts R$ 89,00">
                        Páscoa - Ovo Nuts R$ 89,00
                      </option>
                      <option value="Páscoa Ovo - Cookies and Cream R$ 89,00">
                        Páscoa - Ovo Cookies and Cream R$ 89,00
                      </option>
                      <option value="Páscoa Ovo - “Viva” por Anne Schuartz R$ 110,00">
                        Páscoa - Ovo “Viva” por Anne Schuartz R$ 110,00
                      </option>
                      <option value="Páscoa - Trio de mini ovos R$ 44,00">
                        Páscoa - Trio de mini ovos R$ 44,00
                      </option>
                      <option value="Páscoa - Para presentear Caixinha brigadeiros 2 unds. R$ 12,00">
                        Páscoa - Para presentear Caixinha brigadeiros 2 unds. R$
                        12,00
                      </option>
                      <option value="Páscoa - Para presentear Caixinha brigadeiros 4 unds. R$ 23,00">
                        Páscoa - Para presentear Caixinha brigadeiros 4 unds. R$
                        23,00
                      </option>
                      <option value="Páscoa - Para presentear Potinho de bolo de cenoura R$ 24,00">
                        Páscoa - Para presentear Potinho de colo de cenoura R$
                        24,00
                      </option>
                      <option value="Páscoa - Para presentear Sandubinha de brownie	R$ 15,90">
                        Páscoa - Para presentear Sandubinha de brownie R$ 15,90
                      </option>
                      <option value="Páscoa - Para presentear Latinha de palha italiana	200gr R$ 45,00">
                        Páscoa - Para presentear Latinha de palha italiana 200gr
                        R$ 45,00
                      </option>
                      <option value="Páscoa - Para reunir a família Bolo de cenoura páscoa P R$ 89,00">
                        Páscoa - Para reunir a família Bolo de cenoura páscoa P
                        R$ 89,00
                      </option>
                      <option value="Páscoa - Para reunir a família Bolo de cenoura páscoa M R$ 109,00">
                        Páscoa - Para reunir a família Bolo de cenoura páscoa M
                        R$ 109,00
                      </option>
                      <option value="Páscoa - Para reunir a família Bolo de cenoura páscoa G 129,00">
                        Páscoa - Para reunir a família Bolo de cenoura páscoa G
                        129,00
                      </option>
                    </optgroup>
                    <optgroup label="Cardápio Páscoa Corporativo">
                      <option value="Páscoa Corporativo - Trio de mini ovos	R$ 45,00">
                        Páscoa Corporativo - Trio de mini ovos R$ 45,00
                      </option>
                      <option value="Páscoa Corporativo - Caixinha brigadeiros 2 unds. R$ 14,00">
                        Páscoa Corporativo - Caixinha brigadeiros 2 unds. R$
                        14,00
                      </option>
                      <option value="Páscoa Corporativo - Caixinha brigadeiros 4 unds. R$ 25,00">
                        Páscoa Corporativo - Caixinha brigadeiros 4 unds. R$
                        25,00
                      </option>
                      <option value="Páscoa Corporativo - Potinho de bolo de cenoura R$ 24,00">
                        Páscoa Corporativo - Potinho de bolo de cenoura R$ 24,00
                      </option>
                      <option value="Páscoa Corporativo - Sandubinha de brownie R$ 15,90">
                        Páscoa Corporativo - Sandubinha de brownie R$ 15,90
                      </option>
                      <option value="Páscoa Corporativo - Latinha de palha italiana 150gr R$ 45,00">
                        Páscoa Corporativo - Latinha de palha italiana 150gr R$
                        45,00
                      </option>
                    </optgroup>
                  </select>
                </CustomSelect>
              ))}
              <OrderDetails>
                <p>Detalhamento do pedido</p>
                <p>R$0.00</p>
              </OrderDetails>
            </SelectWrapper>
            <AddMore onClick={this.addNewProduct}>
              <img src="https://s3-sa-east-1.amazonaws.com/anneschuartz/site/plus.svg" />
              <p>Adicionar mais</p>
            </AddMore>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                marginTop: 30,
              }}
            >
              <GreenButton
                onClick={() => {
                  window.fbq("track", "Contact")
                  window.gtag_report_conversion()
                  window.location.href = `https://wa.me/5541995958787?text=Oi,%20Anne!%20Gostaria%20de%20fazer%20um%20pedido:%20${
                    this.state.pedido
                  }`
                }}
              >
                Fazer pedido
              </GreenButton>
            </div>
          </ModalEncomendasComponent>
        </ModalContainer>
      </Portal>
    )
  }
}

export default enhanceWithClickOutside(ModalEncomendas)
