import React, { Component } from 'react';
import styled from 'styled-components';

import Article from './Components/Article';
import Collection from './Components/Collection';
import Promo from './Components/Promo';
import Title from './Components/Title';
import content from '../Content';

const Wrapper = styled.div``;

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Wrapper>
        {content.map(item => {
          switch (item.type.toUpperCase()) {
            case 'COLLECTION':
              return <Collection title={item.title} items={item.items} />;
            case 'ARTICLE':
              return (
                <article>
                  <Title title={item.title} />
                  <Article content={item.body} />
                </article>
              );
            case 'PROMO':
              return <Promo title={item.title} items={item.items} />;
            default:
              return;
          }
        })}
      </Wrapper>
    );
  }
}

export default Content;
