import * as React from 'react';
import { Portal } from 'react-portal';
import styled from 'styled-components';

import { GreenButton } from './Button';

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
  z-index: 15;
`;

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
`;

const ModalEncomendasComponent = styled.div`
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 6px 0 #210305;
  padding: 26px 26px 30px;
  position: relative;
  width: 380px;
  max-height: 600px;
  z-index: 10;
`;
const P = styled.p`
  font: 16px Muli;
  font-weight: bold;
  color: #293e52;
  margin-bottom: 18px;
  span {
    color: #dc8c86;
  }
`;

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
`;

const SelectWrapper = styled.div`
  border: 1px solid #dfa19b;
  border-radius: 5px;
  padding: 20px 26px;
  max-height: 400px;
  overflow: auto;
`;
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
`;

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
`;

const CustomSelect = styled.div`
  position: relative;

  &:before {
    content: '';
    width: 10px;
    height: 10px;
    z-index: 10;
    display: flex;
    right: 0;
    position: absolute;
    top: 15px;
    background: url('https://s3-sa-east-1.amazonaws.com/anneschuartz/site/arrow-down.svg') no-repeat
      center center;
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
`;

class Encomendas extends React.Component {
  state = {
    products: [{ name: '', value: '' }],
    pedido: '',
    totalValue: 0.0,
    cardapioProducts: [],
  };

  componentDidMount() {
    const { cardapioProducts } = this.props;
    this.setState({ cardapioProducts });
  }

  handleClickOutside() {
    const { toggleModalEncomendas } = this.props;
    toggleModalEncomendas();
  }

  addNewProduct = e => {
    e.preventDefault();
    this.setState(prevState => ({
      products: [...prevState.products, { name: '', value: '' }],
    }));
  };

  handleSelect = (e, index) => {
    const selectedProduct = e.target.value.replace(/\s+/g, '');
    const { cardapioProducts } = this.state;

    const allCategories = cardapioProducts.reduce((accumulator, currentValue) => {
      return accumulator.concat(currentValue.node.acf.products.categories);
    }, []);

    const allProducts = allCategories.reduce((accumulator, currentValue) => {
      return accumulator.concat(currentValue.products);
    }, []);

    const productInfo = allProducts.filter(product => {
      const fullDescription = product.name.concat(product.description).replace(/\s+/g, '');
      return fullDescription === selectedProduct;
    });

    const productName = productInfo['0'].name ? productInfo['0'].name : '';
    const productValue = productInfo['0'].value ? parseFloat(productInfo['0'].value) : 0;
    const productDescription = productInfo['0'].description ? productInfo['0'].description : '';

    const products = this.state.products;
    products[index] = { name: productName, description: productDescription, value: productValue };

    const finalPrice = products.reduce((acc, currentValue) => {
      return acc + currentValue.value;
    }, 0);

    const pedidoString = products.map(product => {
      const finalProductValue = product.value.toString().replace(/\./g, ',');
      return `${product.name} ${product.description} R$${finalProductValue}`;
    });

    const finalValue = finalPrice
      .toFixed(2)
      .toString()
      .replace(/\./g, ',');

    const pedido = pedidoString.join(', ').concat(` Valor total do pedido: ${finalValue}`);

    this.setState(prevState => ({
      products,
      totalValue: finalPrice,
      pedido,
    }));
  };

  render() {
    const { toggleModalEncomendas, cardapioProducts } = this.props;
    const { products, totalValue } = this.state;
    const finalValue = totalValue
      .toFixed(2)
      .toString()
      .replace(/\./g, ',');

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
                e.preventDefault();
                toggleModalEncomendas();
              }}
            >
              <img
                alt="fechar"
                title="fechar"
                src="https://s3-sa-east-1.amazonaws.com/anneschuartz/site/close.svg"
              />
            </CloseButton>
            <SelectWrapper>
              {products.map((product, index) => (
                <CustomSelect>
                  <select onChange={e => this.handleSelect(e, index)}>
                    <option value="" defaultValue>
                      Escolha um produto
                    </option>
                    {cardapioProducts.map(category => {
                      return category.node.acf.item_cardapio_ativado === true ? (
                        <optgroup key={category.node.id} label={category.node.title}>
                          {category.node.acf.products.categories.map(subCategory => {
                            return subCategory.products.map((product, index) => (
                              <option key={index} value={`${product.name}${product.description}`}>
                                {`${product.name} ${product.description} R$${product.value.replace(
                                  /\./g,
                                  ','
                                )}`}
                              </option>
                            ));
                          })}
                        </optgroup>
                      ) : null;
                    })}
                  </select>
                </CustomSelect>
              ))}
              <OrderDetails>
                <p>Detalhamento do pedido</p>
                <p>{`R$ ${finalValue}`}</p>
              </OrderDetails>
            </SelectWrapper>
            <AddMore onClick={this.addNewProduct}>
              <img
                alt="adicionar"
                title="adicionar"
                src="https://s3-sa-east-1.amazonaws.com/anneschuartz/site/plus.svg"
              />
              <p>Adicionar mais</p>
            </AddMore>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                marginTop: 30,
              }}
            >
              <GreenButton
                whats
                onClick={() => {
                  window.open(
                    `https://wa.me/5541995958787?text=Oi,%20Anne!%20Gostaria%20de%20fazer%20um%20pedido:%20${
                      this.state.pedido
                    }`,
                    '_blank'
                  );
                }}
              >
                Fazer pedido
              </GreenButton>
            </div>
          </ModalEncomendasComponent>
        </ModalContainer>
      </Portal>
    );
  }
}

export default Encomendas;
