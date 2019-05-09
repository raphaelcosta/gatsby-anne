import styled from 'styled-components';
import { Link } from 'gatsby';

const CardapioBox = styled(Link)`
  height: 450px;
  width: 100%;
  display: flex;
  background: url('https://s3-sa-east-1.amazonaws.com/anneschuartz/site/CAPA_BRIGADEIROS.jpg') no-repeat;
  ${props => props.backgroundUrl && `background: url(${props.backgroundUrl}) no-repeat;`}
  background-size: cover;
  background-position: center;
  position: relative;
  margin: 0 auto;
  // transition: background-size 2s ease-in;
  cursor: pointer;
  overflow: hidden;

  &:hover,
  &:focus {
    // transition: background-size 2s ease-in;
    // background-size: 1000px;

    div {
      display: none;
    }

    p {
      transition: all 0.5s ease;
    }
  }

  p {
    margin: 0;
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: #FFF;
    font: 600 35px Muli;
    z-index: 10;
  }
`

export default CardapioBox;