import React from 'react';
import Article from './Article';
import styled from 'styled-components';

const TitleComp = styled.div`
  color: rgb(20, 97, 46);
  font-size: 40px;
  font-weight: 400;
  text-align: center;
  float: left;
  width: 100%;
`;

class Title extends Article {
  // constructor(props) {
  //   super(props)
  //   //
  // }
  content = () => {
    return (
      <TitleComp>
        {this.props.title ? this.props.title : 'PROP: TITLE'}
      </TitleComp>
    );
  };
}

export default Title;
