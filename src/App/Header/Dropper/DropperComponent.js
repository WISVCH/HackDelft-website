import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const drop = keyframes`
  0% {
    top: -100%;
  }
  100% {
    top: 200%;
  }
`;

const Droppable = styled.div`
  text-align: center;
  position: absolute;
  animation: ${drop};
`;

class DropperComponent extends Component {
  constructor(props) {
    super(props);

    var zoom;
    if (props.text === 'bug') {
      zoom = 0.1;
    } else {
      zoom = Math.random();
    }
    var maxTime = 60;
    var timeOffset = 45;
    var localSpeed = maxTime - zoom * timeOffset;

    this.state = {
      alpha: zoom * 0.6 + 0.1,
      speed: localSpeed,
      horizontal: Math.random() * 100,
      vertical: Math.random() * timeOffset * 3,
      position: Math.random() > 0.5 ? 'left' : 'right',
      size: Math.ceil(zoom * 12) + 8
    };

    if (this.props.calendar) {
      this.state.size = Math.ceil(zoom * 8) + 6;
    }
  }

  generateText = text => {
    var self = this;
    if (text) {
      switch (text) {
        case 'bug':
          return text.toUpperCase();
        default:
          if (this.props.calendar) {
            return text
              .toUpperCase()
              .split('')
              .map((t, i) => (i === 0 ? t : '<br />' + t))
              .join('');
          }
          var items = text
            .toUpperCase()
            .split('')
            .map((t, i) => (i === 0 ? t : '<br />' + t));

          items[items.length - 2] =
            '<span style="color: rgba(156, 215, 142, ' +
            self.state.alpha +
            ');">' +
            items[items.length - 2] +
            '</span>';
          items[items.length - 1] =
            '<span style="color: rgba(222, 242, 217, ' +
            self.state.alpha +
            ');">' +
            items[items.length - 1] +
            '</span>';
          return items.join('');
      }
    }
    return false;
  };

  render() {
    var droppableStyle = {
      color: 'rgba(93, 190, 69, ' + this.state.alpha + ')',
      animationDuration: this.state.speed + 's',
      animationTimingFunction: 'linear',
      animationIterationCount: 'infinite',
      animationDelay: '-' + this.state.vertical + 's',
      fontSize: this.state.size + 'px',
      lineHeight: this.state.size * 1.1 + 'px'
    };
    if (this.props.calendar) {
      droppableStyle.color = 'rgba(255, 255, 255, ' + this.state.alpha + ')';
    }
    droppableStyle[this.state.position] = this.state.horizontal + '%';
    return (
      <Droppable
        style={droppableStyle}
        styleMin={50}
        dangerouslySetInnerHTML={{ __html: this.generateText(this.props.text) }}
      />
    );
  }
}

export default DropperComponent;
