import React from 'react';
import Article from './Article';
import styled from 'styled-components';

import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const Wrapper = styled.div`
  width: 100%;
  float: left;
`;

const TitleComp = styled.div`
  color: rgb(20, 97, 46);
  font-size: 40px;
  font-weight: 400;
  text-align: center;
  float: left;
  width: 100%;
`;

const Items = styled.div`
  width: 100%;
  float: left;
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
`;
const Item = styled.div`
  width: 45%;
  margin-top: 30px;
  @media only screen and (max-width: 900px) {
    width: 90%;
  }
`;
const ItemTitle = styled.div`
  color: rgb(20, 97, 46);
  font-size: 30px;
  font-weight: 400;
  text-align: left;
  float: left;
  width: 100%;
`;
const ItemBody = styled.div`
  padding-top: 15px;
  float: left;
  text-align: left;
  font-size: 18px;
  width: 100%;
`;
const ItemButton = styled.div`
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  float: left;
`;
const ItemButtonContainer = styled.div`
  float: right;
`;

const styles = {
  buttonColor: {
    backgroundColor: 'rgb(12, 126, 62)',
    color: 'white'
  }
};

class Collection extends Article {
  // constructor(props) {
  //   super(props)
  //   //
  // }
  content = () => {
    return (
      <Wrapper>
        <TitleComp>
          {this.props.title ? this.props.title : 'PROP: TITLE'}
        </TitleComp>
        <Items>
          {this.props.items
            ? this.props.items.map((item, index) => {
                const itemButton = (href, text) => {
                  if (href) {
                    return (
                      <ItemButton>
                        <ItemButtonContainer>
                          <Button
                            variant="raised"
                            className={this.props.classes.buttonColor}
                            href={href}
                            target="_blank"
                          >
                            {text ? text : 'Read more'}
                          </Button>
                        </ItemButtonContainer>
                      </ItemButton>
                    );
                  }
                  return null;
                };

                return (
                  <Item key={index}>
                    <ItemTitle>{item.title}</ItemTitle>
                    <ItemBody>{item.body}</ItemBody>
                    {itemButton(item.href, item.hrefText)}
                  </Item>
                );
              })
            : null}
        </Items>
      </Wrapper>
    );
  };
}

export default withStyles(styles)(Collection);
