import * as React from "react"
import styled from "styled-components"

export const Wave = styled.span`
  width: 240px;
  height: 14px;
  margin: 40px 0;
  background: url("https://s3-sa-east-1.amazonaws.com/anneschuartz/site/wave.svg")
    no-repeat center center;
  display: flex;
`

export const DimWave = styled(Wave)`
  background: url("https://s3-sa-east-1.amazonaws.com/anneschuartz/site/wave2.svg")
    no-repeat center center;
`
