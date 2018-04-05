import React from 'react';
import Article from './Article';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  float: left;
`;

const Title = styled.div`
  color: rgb(20, 97, 46);
  font-size: 40px;
  font-weight: 400;
  text-align: center;
  float: left;
  width: 100%;
`;

const ItemContainer = styled.div`
  float: left;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
`;

const Item = styled.a`
  border: 8px solid rgba(255, 255, 255, 0);
  border-radius: 30px;
  overflow: hidden;
  :hover {
    box-shadow: 0px 4px 15px -5px rgba(0, 0, 0, 0.75);
  }
`;
const ItemLogo = styled.div`
  width: 160px;
  height: 160px;
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
`;
const ItemTitle = styled.div`
  font-size: 0px;
  text-align: center;
  float: left;
  width: 100%;
  color: rgba(0, 0, 0, 0);
`;

class Promo extends Article {
  // constructor(props) {
  //   super(props)
  //   //
  // }
  content = () => {
    return (
      <Wrapper>
        <Title>{this.props.title ? this.props.title : 'PROP: TITLE'}</Title>
        <ItemContainer>
          {this.props.items
            ? this.props.items.map((item, index) => {
                return (
                  <Item
                    href={item.href ? item.href : '#'}
                    target="_blank"
                    title={item.title}
                    key={index}
                  >
                    <ItemLogo
                      style={{
                        backgroundImage: 'url("assets/' + item.asset + '")'
                      }}
                    />
                    <ItemTitle>{item.title}</ItemTitle>
                  </Item>
                );
              })
            : null}
        </ItemContainer>
      </Wrapper>
    );
  };
}

export default Promo;
