import React, { Component } from 'react';
import styled from 'styled-components';

import Content from './App/Content';
import Header from './App/Header';

const Wrapper = styled.div`
  width: 100%;
  height: auto;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Content />
      </Wrapper>
    );
  }
}

export default App;
