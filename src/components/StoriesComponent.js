import * as React from 'react';
import styled from 'styled-components';
import Stories from 'react-insta-stories';
import { Portal } from 'react-portal';

const StoriesContainer = styled.div`
  position: fixed;
  top: 0px;
  z-index: 30;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgb(17, 17, 17);
`;

const CloseAnchor = styled.a`
  background: none;
  border: 0;
  cursor: pointer;
  font: 12px Muli;
  position: fixed;
  right: 5px;
  top: 5px;
  z-index: 25;

  img {
    width: 30px;
    height: 30px;
  }

  &:focus {
    outline: 0;
  }
`;

class StoriesComponent extends React.Component {
  render() {
    const stories = [
      {
        url:
          'http://anneschuartz2.hospedagemdesites.ws/wp-content/uploads/2019/04/y2mate.com-anne_schuartz_l_encomendas_de_bolos_tortas_e_doces_l_pascoa_2019_1s_ElLKv5-Q_1080p.mp4',
        type: 'video',
        width: 330,
        height: 650,
      },
    ];
    const { toggleMediaStories } = this.props;

    return (
      <Portal>
        <StoriesContainer>
          <CloseAnchor
            href="#"
            onClick={e => {
              e.preventDefault();
              toggleMediaStories();
            }}
          >
            <img
              alt="fechar"
              title="fechar"
              src="https://s3-sa-east-1.amazonaws.com/anneschuartz/site/close.svg"
            />
          </CloseAnchor>
          <Stories stories={stories} defaultInterval={1500} width={330} height={650} />
        </StoriesContainer>
      </Portal>
    );
  }
}

export default StoriesComponent;
