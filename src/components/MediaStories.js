import * as React from 'react';
import styled from 'styled-components';
import StoriesComponent from './StoriesComponent';

const MediaStoriesContainer = styled.div`
  background: #210305;
`;

const CardapioBox = styled.button`
  border: 0;
  height: 450px;
  width: 100%;
  display: flex;
  background: url('http://anneschuartz2.hospedagemdesites.ws/wp-content/uploads/2019/04/CAPA_BOLOS.jpg')
    no-repeat;
  ${props => props.backgroundUrl && `background: url(${props.backgroundUrl}) no-repeat;`}
  background-size: cover;
  background-position: center;
  position: relative;
  max-width: 700px;
  margin: 0 auto;
  transition: background-size 2s ease-in;
  cursor: pointer;
  overflow: hidden;

  &:hover,
  &:focus {
    transition: background-size 2s ease-in;
    background-size: 1000px;

    div {
      display: none;
    }

    p {
      transition: all 0.5s ease;
    }
  }

  img {
    margin-right: 5px;
  }

  p {
    margin: 0;
    position: absolute;
    bottom: 30px;
    right: 25px;
    color: #fff;
    font: 600 18px Muli;
    z-index: 10;
    border-bottom: 1px dotted #fff;
  }
`;

const StyledOverlay = styled.div`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), #000000);
  bottom: 0;
  height: 150px;
  left: 0;
  opacity: 0.5;
  position: absolute;
  width: 100%;
  z-idex: 5;
`;

class MediaStories extends React.Component {
  state = {
    isVideoOpened: false,
  };

  toggleMediaStories = () => {
    this.setState(prevState => ({
      isVideoOpened: !prevState.isVideoOpened,
    }));
  };

  render() {
    const { isVideoOpened } = this.state;

    return (
      <MediaStoriesContainer>
        <CardapioBox
          onClick={e => {
            e.preventDefault();
            this.toggleMediaStories();
          }}
        >
          <StyledOverlay />
          <p>
            <img src="https://s3-sa-east-1.amazonaws.com/anneschuartz/site/lupa.svg" />
            Nossa Galeria
          </p>
        </CardapioBox>
        {isVideoOpened && <StoriesComponent toggleMediaStories={this.toggleMediaStories} />}
      </MediaStoriesContainer>
    );
  }
}

export default MediaStories;
