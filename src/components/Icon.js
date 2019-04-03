import styled from "styled-components"

const Icon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &::before {
    -webkit-font-smoothing: antialiased;
    font-family: 'Anne';
    font-size: 22px;
    font-style: normal;
    font-variant: normal;
    font-weight: 400;
    margin-right: 5px;
    text-rendering: auto;
  }

  ${props => props.face && `&::before { content: '\\e900'; }`}
  ${props => props.insta && `&::before { content: '\\e902'; }`}
  ${props => props.mail && `&::before { content: '\\e901'; }`}
  ${props => props.phone && `&::before { content: '\\e903'; }`}
  ${props => props.whats && `&::before { content: '\\e904'; }`}
  ${props => props.spotify && `&::before { content: '\\e905'; }`}
`
export default Icon
