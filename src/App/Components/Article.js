import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  float: left;
  width: 100%;
`;

const PageClamp = styled.div`
  text-align: justify;
  margin: 40px 20px 0 20px;
  width: calc(100% - 40px);
  float: left;
  font-size: 22px;
  font-weight: 300;
  @media only screen and (min-width: 940px) {
    text-align: center;
    width: 900px;
    margin-left: calc(50% - 450px);
    margin-right: calc(50% - 450px);
  }
  @media only screen and (max-width: 800px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 18px;
  }
`;

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  content = () => (this.props.content ? this.props.content : 'PROP: CONTENT');

  render() {
    return (
      <Wrapper>
        <PageClamp>{this.content()}</PageClamp>
      </Wrapper>
    );
  }
}

export default Article;
