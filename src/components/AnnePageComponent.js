import * as React from 'react';
import styled from 'styled-components';

import Hero from './hero';
import Layout from './layout';
import MuitoAmor from './MuitoAmor';
import NossoCardapio from './NossoCardapio';
import SEO from './seo';
import VejaMais from './VejaMais';
import MediaStories from './MediaStories';
import NewsLetterSection from './NewsLetterSection';
import { DimWave } from './Wave';
import ModalEncomendas from './ModalEncomendas';
import { GreenButton } from './Button';

const HeroSection = styled.section`
  background: url('https://s3-sa-east-1.amazonaws.com/anneschuartz/pattern.png') repeat center;

  p {
    color: #624244;
    font: 14px Muli;
    font-weight: bold;
    max-width: 400px;
    text-align: center;
  }
`;

const H1 = styled.h1`
  font-weight: 400;
  font: 40px Abril;
  margin: 30px 50px;
  max-width: 450px;
  text-align: center;
`;

const IntroSection = styled.section`
  padding: 60px 0 70px;
  background: url('https://s3-sa-east-1.amazonaws.com/anneschuartz/site/pink_bg.png') repeat center
    center;

  p {
    max-width: 600px;
    margin: 0 auto;
    font: 14px Muli;
    line-height: 1.7;
  }

  @media screen and (max-width: 600px) {
    p {
      max-width: calc(100% - 60px);
    }
  }
`;

const ImagineSection = styled.section`
  padding: 80px 0;
  background: url('https://s3-sa-east-1.amazonaws.com/anneschuartz/pattern.png') repeat center;

  .ann-wrapper {
    max-width: 600px;
    margin: 0 auto;

    button {
      margin: 0 auto;
    }

    @media screen and (max-width: 600px) {
      max-width: calc(100% - 60px);
    }

    span {
      margin: 40px auto;
    }

    h2 {
      margin-bottom: 20px;
    }

    p {
      font: 14px Muli;
      line-height: 1.7;
    }
  }
`;

const NaMidia = styled.section`
  padding: 80px 0;

  h2 {
    text-align: center;
    margin-bottom: 20px;
  }

  .ann-wrapper {
    max-width: 600px;
    margin: 0 auto;

    @media screen and (max-width: 600px) {
      max-width: calc(100% - 60px);
    }

    .ann-media {
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        margin-bottom: 20px;
        @media screen and (max-width: 600px) {
          max-width: 180px;
        }
      }
    }
  }
`;

const SectionCover = styled.section`
  height: 440px;
  ${props => props.background && `background: url('${props.background}') no-repeat center top;`}
  background-size: cover;
`;

const SectionAnne = styled.section`
  padding: 60px 0 160px;
  background: url('http://anneschuartz2.hospedagemdesites.ws/wp-content/uploads/2019/06/pink-watery-texture-1-1.png')
    repeat center bottom;

  h2 {
    margin-bottom: 30px;
  }

  p {
    color: #624244;
    font: 14px Muli;
    line-height: 1.7;
  }

  .ann-wrapper {
    max-width: 600px;
    margin: 0 auto;

    @media screen and (max-width: 600px) {
      max-width: calc(100% - 60px);
    }
  }
`;

const SectionDuvida = styled.section`
  text-align: center;
  padding: 100px 0 50px;

  h2 {
    color: #210305;
  }

  a {
    padding: 15px 60px;
    color: #fff;
    font: 16px Muli;
    background: #c94f46;
    border-radius: 45px;
    text-decoration: none;
    transition: all 0.5s ease;
    font-weight: bold;

    &:hover,
    &:focus {
      opacity: 0.8;
      transition: all 0.5s ease;
    }
  }
`;

class AnnePageComponent extends React.Component {
  state = {
    isModalEncomendasOpened: false,
  };

  toggleModalEncomendasState = () => {
    this.setState(prevState => ({
      isModalEncomendasOpened: !prevState.isModalEncomendasOpened,
    }));
  };

  render() {
    const { wordpressData } = this.props;
    const { isModalEncomendasOpened } = this.state;

    return (
      <Layout>
        <SEO title="Sobre a Anne | Anne Schuartz" keywords={[`doces`, `tortas`, `bolos`]} />
        <HeroSection>
          <div className="as-hero" style={{ padding: '176px 0', margin: '0 auto', maxWidth: 960 }}>
            <H1>{wordpressData.title}</H1>
            <p dangerouslySetInnerHTML={{ __html: wordpressData.description }} />
          </div>
        </HeroSection>
        <MediaStories
          backgroundUrl={wordpressData.gallery_place.cover.source_url}
          title="Ver galeria"
          galleryData={wordpressData.gallery_place}
        />
        <IntroSection>
          <p dangerouslySetInnerHTML={{ __html: wordpressData.intro }} />
        </IntroSection>
        <ImagineSection>
          <div className="ann-wrapper">
            <h2>{wordpressData.imagine_section.title}</h2>
            <p
              dangerouslySetInnerHTML={{
                __html: wordpressData.imagine_section.description,
              }}
            />
            <DimWave />
            <GreenButton
              cta
              whats
              title="Pedir sua encomemda"
              tabIndex={0}
              onClick={this.toggleModalEncomendasState}
            >
              Pedir sua encomemda
            </GreenButton>
          </div>
        </ImagineSection>
        <NaMidia>
          <div className="ann-wrapper">
            <h2>{wordpressData.media_section.title}</h2>
            <div className="ann-media">
              <a href={wordpressData.media_section.url_1}>
                <img src={wordpressData.media_section.image_1.source_url} />
              </a>
              <a href={wordpressData.media_section.url_2}>
                <img src={wordpressData.media_section.image_2.source_url} />
              </a>
              <a href={wordpressData.media_section.url_3}>
                <img src={wordpressData.media_section.image_3.source_url} />
              </a>
            </div>
          </div>
        </NaMidia>
        <SectionCover background={wordpressData.section_image.source_url} />
        <SectionAnne>
          <div className="ann-wrapper">
            <h2>{wordpressData.section_anne.title}</h2>
            <p
              dangerouslySetInnerHTML={{
                __html: wordpressData.section_anne.description,
              }}
            />
          </div>
          <SectionDuvida>
            <h2>Ficou com alguma dúvida?</h2>
            <a
              tabIndex={0}
              target="_blank"
              rel="noopener noreferrer"
              href={`https://api.whatsapp.com/send?phone=5541995958787`}
            >
              Fale com a Anne
            </a>
          </SectionDuvida>
        </SectionAnne>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14412.900873752958!2d-49.2879055!3d-25.4307329!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe536e4e405d324da!2sAnne+Schuartz+Sweet+Maker!5e0!3m2!1spt-BR!2sbr!4v1559182473338!5m2!1spt-BR!2sbr"
          width="100%"
          height="662"
          frameborder="0"
          style={{ border: 0, margin: 0 }}
          allowfullscreen
        />
        {isModalEncomendasOpened && (
          <ModalEncomendas toggleModalEncomendas={this.toggleModalEncomendasState} />
        )}
      </Layout>
    );
  }
}

export default AnnePageComponent;
