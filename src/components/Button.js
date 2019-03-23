import styled from "styled-components"

export const Button = styled.button`
  background: #c94f46;
  border: 0;
  font-family: Muli;
  font: 14px Muli;
  border-radius: 50px;
  color: #fff;
  padding: 18px 90px;
  font-weight: bold;
  box-shadow: 0 3px 14px 0 rgba(157, 157, 157, 0.4);
  cursor: pointer;
  transition: all 0.5s ease;

  ${props =>
    props.cta &&
    `
      text-decoration: underlined;
    `}

  &:hover,
  &:focus {
    background: rgba(201, 79, 70, 0.8);
  }
`

export const GreenButton = styled(Button)`
  background: #4d8755;

  &:hover,
  &:focus {
    background: rgba(7, 135, 85, 0.8);
  }
`
