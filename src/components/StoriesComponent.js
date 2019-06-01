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

  div {
    max-width: 90vw !important;
  }
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
    const { toggleMediaStories, galleryData } = this.props;
    
    const galleryFormattedData = galleryData.images
      ? galleryData.images.map(media => ({
          url: media.source_url,
          header: {
            heading: media.title,
            profileImage:
              'http://anneschuartz2.hospedagemdesites.ws/wp-content/uploads/2019/05/30077579_196638531065548_5990005547007475712_n.jpg',
          },
        }))
      : galleryData.map(media => ({
          ...media,
          url: media.url.source_url,
          header: {
            heading: media.title,
            profileImage:
              'http://anneschuartz2.hospedagemdesites.ws/wp-content/uploads/2019/05/30077579_196638531065548_5990005547007475712_n.jpg',
          },
        }));

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
          <Stories
            stories={galleryFormattedData}
            defaultInterval={2500}
            width={1200}
            height={650}
          />
        </StoriesContainer>
      </Portal>
    );
  }
}

export default StoriesComponent;
