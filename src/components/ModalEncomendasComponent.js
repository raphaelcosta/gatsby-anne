import * as React from "react"
import onClickOutside from "react-onclickoutside";

const ModalEncomendasStyledComponent = styled.div`
  border-radius: 5px;
  box-shadow: 0 2px 6px 0 #210305;
  background: #fff;
  width: 380px;
`
const ModalEncomendasComponent = () => <ModalEncomendasStyledComponent />

export default onClickOutside(ModalEncomendasComponent) 