import * as React from 'react';
import styled from 'styled-components';
import parse from 'html-react-parser';
import Helmet from 'react-helmet';

import Layout from './layout';
import SEO from './seo';
import MediaStories from './MediaStories';
import ModalEncomendas from './ModalEncomendas';
import ImagineSection from './ImagineSection';

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
        opacity: 0.4;

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
  background: #f1eae5;
  position: relative;

  .ann-overlay {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: url('http://anneschuartz2.hospedagemdesites.ws/wp-content/uploads/2019/06/pink-watery-texture-1-1.png')
      repeat center bottom;
  }

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
    position: relative;
    z-index: 5;

    @media screen and (max-width: 600px) {
      max-width: calc(100% - 60px);
    }
  }
`;

const SectionDuvida = styled.section`
  text-align: center;
  padding: 100px 0 50px;
  position: relative;
  z-index: 5;

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
    const introText = wordpressData.intro;

    return (
      <Layout>
        <Helmet>
          <script>
            {`
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '374116829696592');
    fbq('track', 'PageView');`}
          </script>
          <noscript>
            {`<img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=374116829696592&ev=PageView&noscript=1"
  />`}
          </noscript>
          <script async src="https://www.googletagmanager.com/gtag/js?id=AW-814054608" />
          <script>
            {`window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'AW-814054608');`}
          </script>
          <script>
            {`function gtag_report_conversion(url) {
        var callback = function () {
          if (typeof(url) != 'undefined') {
            window.location = url;
          }
        };
        gtag('event', 'conversion', {
            'send_to': 'AW-814054608/Xm6_CI_K5H4Q0PmVhAM',
            'event_callback': callback
        });
        return false;
      }`}
          </script>
        </Helmet>
        <SEO title="Sobre a Anne | Anne Schuartz" keywords={[`doces`, `tortas`, `bolos`]} />
        <HeroSection>
          <div className="as-hero" style={{ padding: '176px 0', margin: '0 auto', maxWidth: 960 }}>
            <H1>{wordpressData.title}</H1>
            <p>{parse(wordpressData.description)}</p>
          </div>
        </HeroSection>
        <MediaStories
          backgroundUrl={wordpressData.gallery_place.cover.source_url}
          title="Ver galeria"
          galleryData={wordpressData.gallery_place}
        />
        <IntroSection>
          <p>{parse(introText)}</p>
        </IntroSection>
        <ImagineSection
          toggleModalEncomendas={this.toggleModalEncomendasState}
          title={wordpressData.imagine_section.title}
          description={wordpressData.imagine_section.description}
        />
        <NaMidia>
          <div className="ann-wrapper">
            <h2>{wordpressData.media_section.title}</h2>
            <div className="ann-media">
              <a target="_blank" rel="noopener noreferrer" href={wordpressData.media_section.url_1}>
                <img src={wordpressData.media_section.image_1.source_url} />
              </a>
              <a target="_blank" rel="noopener noreferrer" href={wordpressData.media_section.url_2}>
                <img src={wordpressData.media_section.image_2.source_url} />
              </a>
              <a target="_blank" rel="noopener noreferrer" href={wordpressData.media_section.url_3}>
                <img src={wordpressData.media_section.image_3.source_url} />
              </a>
            </div>
          </div>
        </NaMidia>
        <SectionCover background={wordpressData.section_image.source_url} />
        <SectionAnne>
          <div className="ann-overlay" />
          <div className="ann-wrapper">
            <h2>{wordpressData.section_anne.title}</h2>
            <p>{parse(wordpressData.section_anne.description)}</p>
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
