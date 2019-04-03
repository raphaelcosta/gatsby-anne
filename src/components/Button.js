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
  display: flex;
  align-items: center;
  justify-content: center;

  ${props => props.cta && `text-decoration: underlined;`}

  ${props =>
    props.whats &&
    `&::before {
      font-family: 'Anne';
      font-style: normal;
      font-variant: normal;
      text-rendering: auto;
      -webkit-font-smoothing: antialiased;
      content: '\\e904';
      font-weight: 400;
      margin-right: 5px;
      font-size: 24px;
    }`}

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
