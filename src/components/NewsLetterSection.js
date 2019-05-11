import * as React from 'react';
import styled from 'styled-components';

const NewsLetterSectionWapper = styled.section`
  background: #eedad5;
  padding: 80px 20px 110px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    align-items: flex-start;
  }

  p {
    color: #c94f46;
    font: 600 14px Muli;
    margin-bottom: 15px;
    letter-spacing: 0.2px;

    @media only screen and (max-width: 600px) {
      max-width: 240px;
    }
  }

  .ann-form-wrapper {
    .an-arrow {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      right: 0;

      &:before {
        content: '';
        width: 10px;
        height: 10px;
        background: url('https://s3-sa-east-1.amazonaws.com/anneschuartz/site/arrow-down-brown.svg')
          no-repeat center center;
        position: relative;
        transform: rotate(270deg);
      }
    }

    form {
      display: flex;
      margin: 0;

      input {
        border: 0;
        background: transparent;
        outline: 0;
        border-bottom: 2px solid #907171;
        font: 400 14px Muli;
        padding-bottom: 5px;
        color: #c94f46;
      }

      input[type='email'] {
        width: 240px;
      }

      input[type='submit'] {
        padding: 0;
        width: 30px;
        height: 30px;
        position: absolute;
        border: 0;
      }
    }

    div {
      display: flex;
    }
  }
`;

class NewsLetterSection extends React.Component {
  state = {
    value: '',
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { value } = this.state;

    return (
      <NewsLetterSectionWapper>
        <p>Assine nossa news letter para receber nossas novidades!</p>
        <div className="ann-form-wrapper" id="mc_embed_signup">
          <form
            action="https://anneschuartz.us12.list-manage.com/subscribe/post?u=39bb729f90ceca896c0bc1aa5&amp;id=19d844d418"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
            noValidate
          >
            <div id="mc_embed_signup_scroll">
              <div className="mc-field-group">
                <input
                  placeholder="seuemail@email.com"
                  type="email"
                  name="EMAIL"
                  className="required email"
                  id="mce-EMAIL"
                  onChange={e => this.handleChange(e)}
                />
              </div>
              <div id="mce-responses" className="clear">
                <div className="response" id="mce-error-response" style={{ display: 'none' }} />
                <div className="response" id="mce-success-response" style={{ display: 'none' }} />
              </div>
              <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                <input
                  type="text"
                  name="b_39bb729f90ceca896c0bc1aa5_19d844d418"
                  tabIndex="-1"
                  value=""
                  style={{ display: 'none' }}
                />
              </div>
              <div className="an-arrow clear">
                <input
                  type="submit"
                  value=""
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button"
                />
              </div>
            </div>
          </form>
        </div>
      </NewsLetterSectionWapper>
    );
  }
}

export default NewsLetterSection;
