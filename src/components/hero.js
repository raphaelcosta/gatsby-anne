import * as React from "react"

import { Button } from "./Button"
import styled from "styled-components"

const P = styled.p`
  color: #c94f46;
  font: 16px Muli;
  font-weight: bold;
  margin: 0;
`
const HeroSection = styled.section`
  background: url("https://s3-sa-east-1.amazonaws.com/anneschuartz/pattern.png")
    repeat center;
`
const H1 = styled.h1`
  font-weight: 400;
  font: 40px Abril;
  margin: 30px 50px;
  max-width: 500px;
  text-align: center;
`

class Hero extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HeroSection>
          <div
            className="as-hero"
            style={{ padding: "176px 0", margin: "0 auto", maxWidth: 960 }}
          >
            <P>BEM-VINDO</P>
            <H1>Um dia com doçura, é um dia com mais amor</H1>
            <Button
              onClick={e => {
                e.preventDefault()
              }}
            >
              Ver cardápio
            </Button>
          </div>
        </HeroSection>
      </React.Fragment>
    )
  }
}

export default Hero
