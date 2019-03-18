import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Container from "./Container"

const HeaderComponent = styled.header`
  alignitems: center;
  background: #210305;
  display: flex;
  height: 76px;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
`
const HeaderImage = styled.img`
  transition: 0.5s ease;
  width: 36px;

  &:hover,
  &:focus {
    width: 45px;
  }
`

const Header = () => (
  <HeaderComponent>
    <Container>
      <Link title="Nossa homepage" to="/">
        <HeaderImage
          alt="Anne Schuartz"
          src="https://s3-sa-east-1.amazonaws.com/anneschuartz/site/logo.svg"
        />
      </Link>
    </Container>
    >
  </HeaderComponent>
)

export default Header
