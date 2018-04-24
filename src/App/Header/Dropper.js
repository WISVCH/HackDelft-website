import React, { Component } from 'react';
import styled from 'styled-components';

import DropperComponent from './Dropper/DropperComponent';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  float: left;
  color: #5dbe45;
`;

class Dropper extends Component {
  render() {
    var dropperContent = this.props.content || [];
    var min = this.props.min || 20;

    while (dropperContent.length < min && this.props.content) {
      dropperContent = dropperContent.concat(this.props.content);
      if (dropperContent.length > min) {
        dropperContent = dropperContent.slice(0, min);
      }
    }

    return (
      <Wrapper>
        {dropperContent.map((content, index) => (
          <DropperComponent
            calendar={this.props.calendar}
            key={index}
            text={content}
          />
        ))}
      </Wrapper>
    );
  }
}

export default Dropper;
