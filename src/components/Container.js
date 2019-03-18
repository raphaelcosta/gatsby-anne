import styled from "styled-components"

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  @media (max-width: 960px) {
    max-width: calc(100% - 80px);
  }
`
export default Container
