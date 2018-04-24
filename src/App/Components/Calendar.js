import React from 'react';
import Article from './Article';
import styled from 'styled-components';

import { withStyles } from 'material-ui/styles';
import Dropper from '../Header/Dropper';
import Switch from 'material-ui/Switch';

import {
  rgbToHsl,
  hslToRgb /*,rgbToHsv, hsvToRgb*/
} from '../../helpers/color';

const styles = {
  switchBase: {
    color: 'rgb(20, 97, 46)',
    '&$checked': {
      color: 'rgb(20, 97, 46)',
      '& + $bar': {
        backgroundColor: 'rgb(20, 97, 46)'
      }
    }
  },
  bar: {},
  checked: {}
};

const dropperContent = [
  'hackdelft',
  'delft',
  'university',
  'technology',
  'eemcs',
  'maker',
  'hackathon',
  'MLH',
  'bug'
];

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

const DayContainer = styled.div`
  width: 100%;
  float: left;
`;

const DayHeight = 850;

const Day = styled.div`
  font-size: 12px;
  width: calc(50% - 20px);
  margin: 5px;
  padding: 60px 5px 5px 5px;
  background-color: rgb(250, 250, 250);
  border: 0px solid white;
  border-radius: 4px;
  overflow: hidden;
  float: left;
  height: ${DayHeight}px;
  box-shadow: 0 1.5px 5px -1px rgba(0, 0, 0, 0.6);
  position: relative;
  @media (max-width: 750px) {
    width: calc(100% - 20px);
    height: ${props => props.dayMinMax.duration * DayHeight}px;
  }
`;
const CalendarContainer = styled.div`
  height: ${DayHeight}px;
  position: absolute;
  float: left;
  top: 60px;
  left: 0;
  width: 100%;
  @media (max-width: 750px) {
    top: ${props => -props.dayMinMax.offset * DayHeight + 60}px;
  }
`;
const HoursContainer = styled.div`
  width: calc(100% - 10px);
  height: 100%;
  position: absolute;
  top: 0;
  left: 5px;
`;
const EventContainer = styled.div`
  position: absolute;
  top: 0px;
  left: calc(3em + 5px);
  width: calc(100% - 3em - 10px);
  height: 100%;
`;
const HourContainer = styled.div`
  width: 100%;
  height: ${100 / 24}%;
  left: 0px;
  position: absolute;
`;
const Hour = styled.div`
  float: left;
  width: calc(100% - 3em);
  margin-left: 3em;
  height: calc(100% - 1px);
  border-top: 1px solid #bbb;
`;
const HourTime = styled.div`
  position: absolute;
  top: -0.5em;
  left: -10px;
  width: calc(3em + 6px);
  text-align: right;
`;
const HalfHour = styled.div`
  height: calc(50% - 1px);
  float: left;
  width: 100%;
  border-bottom: 1px solid rgb(230, 230, 230);
`;

const MiniContainer = styled.div`
  position: absolute;
  width: calc(50% - 2px);
  padding-left: 2px;
  left: 50%;
  background-image: url('assets/cal.png');
  background-size: 1px 37px;
  background-position: 0 2px;
`;

const Event = styled.a`
  font-size: 14px;
  left: ${props => (props.mini ? '2px' : '0')};
  font-weight: 500;
  background-color: ${props => props.colors.background};
  border-left: 2px solid ${props => props.colors.line};
  color: ${props => props.colors.text};
  padding-left: 5px;
  position: absolute;
  width: calc(100% - ${props => (props.mini ? '9' : '7')}px);
  text-align: left;
  display: block;
  text-decoration: none;
  :hover {
    background-color: ${props => props.colors.hover};
  }
`;

const TopDate = styled.div`
  position: absolute;
  top: 5px;
  left: 0;
  width: 100%;
  height: 40px;
  font-weight: 200;
  text-align: center;
  font-size: 40px;
  background-color: rgb(250, 250, 250);
`;

const Options = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
const Option = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
const OptionLabel = styled.div`
  width: auto;
  font-size: 14px;
`;

class Calendar extends Article {
  constructor(props) {
    super(props);
    this.state.calendar = this.calendarFromProps();
    this.state.dayMinMax = this.generateDayMinMax(this.state.calendar);
    this.state.h24 = false;
    console.log(this.state);
  }

  calendarFromProps = () => {
    var calendar = this.createCalendar(this.props.items);

    // Order Calendar
    const orderedCalendar = {};
    Object.keys(calendar)
      .sort()
      .forEach(y => {
        orderedCalendar[y] = {};
        Object.keys(calendar[y])
          .sort()
          .forEach(m => {
            orderedCalendar[y][m] = {};
            Object.keys(calendar[y][m])
              .sort()
              .forEach(d => {
                orderedCalendar[y][m][d] = calendar[y][m][d];
              });
          });
      });
    return orderedCalendar;
  };

  generateDayMinMax = c => {
    var minmax = {};
    for (var y in c) {
      minmax[y] = {};
      for (var m in c[y]) {
        minmax[y][m] = {};
        for (var d in c[y][m]) {
          minmax[y][m][d] = {
            offset: 1,
            duration: 0
          };

          // Find lowest offset
          c[y][m][d].forEach(item => {
            if (item.offset < minmax[y][m][d].offset) {
              minmax[y][m][d].offset = item.offset;
            }
          });

          // Find complete duration for a day
          c[y][m][d].forEach(item => {
            var duration = item.duration + item.offset - minmax[y][m][d].offset;
            if (duration > minmax[y][m][d].duration) {
              minmax[y][m][d].duration = duration;
            }
          });
        }
      }
    }
    return minmax;
  };

  switchH24 = () => {
    this.setState({ h24: !this.state.h24 });
  };

  generateDate = date => {
    var d = new Date(date.getTime() + 7200000);
    return {
      second: d.getUTCSeconds(),
      minute: d.getUTCMinutes(),
      hour: d.getUTCHours(),
      day: d.getUTCDate(),
      month: d.getMonth() + 1,
      year: d.getUTCFullYear()
    };
  };

  ensureDate = (calendar, date) => {
    if (!calendar[date.year]) {
      calendar[date.year] = {};
    }
    if (!calendar[date.year][date.month]) {
      calendar[date.year][date.month] = {};
    }
    if (!calendar[date.year][date.month][date.day]) {
      calendar[date.year][date.month][date.day] = [];
    }
  };

  datePush = (c, d, p) => {
    this.ensureDate(c, d);
    c[d.year][d.month][d.day].push(p);
  };

  dateLessThanEquals = (d1, d2) => {
    const conv = d => d.day + d.month * 32 + d.year * 420;
    return conv(d1) <= conv(d2);
  };

  dateEquals = (d1, d2) => {
    const conv = d => d.day + d.month * 32 + d.year * 420;
    return conv(d1) === conv(d2);
  };

  generateEndStart = (date, end) => {
    var ret = '';
    ret = ret + date.year + '-';
    ret = ret + (date.month < 10 ? '0' + date.month : date.month) + '-';
    ret = ret + (date.day < 10 ? '0' + date.day : date.day) + 'T';
    ret = ret + (end ? '23:59:59' : '00:00:00') + '+02:00';
    return ret;
  };

  createCalendar = items => {
    var calendar = {};
    items.forEach(item => {
      var pushable = {
        title: item.title,
        color: item.color,
        mini: item.mini
      };
      pushable.start = new Date(item.datetime);
      pushable.startDate = this.generateDate(pushable.start);

      var renderStart = new Date(pushable.start.getTime());
      var renderStartDate = this.generateDate(renderStart);

      if (item.duration) {
        pushable.end = new Date(
          pushable.start.getTime() + item.duration * 1000
        );
        pushable.endDate = this.generateDate(pushable.end);

        var renderEnd = new Date(pushable.end.getTime() - 1000);
        var renderEndDate = this.generateDate(renderEnd);

        var indexSource = new Date(item.datetime);
        var index = this.generateDate(indexSource);
        while (this.dateLessThanEquals(index, renderEndDate)) {
          var localRenderStart;
          if (this.dateEquals(index, renderStartDate)) {
            localRenderStart = new Date(pushable.start.getTime());
          } else {
            localRenderStart = new Date(this.generateEndStart(index));
          }

          var localRenderEnd;
          if (this.dateEquals(index, renderEndDate)) {
            localRenderEnd = new Date(pushable.end.getTime() - 1000);
          } else {
            localRenderEnd = new Date(this.generateEndStart(index, true));
          }

          var offset =
            localRenderStart.getTime() -
            new Date(this.generateEndStart(index)).getTime();
          var duration =
            localRenderEnd.getTime() - (localRenderStart.getTime() + 1000);

          var localPushable = {
            title: pushable.title,
            start: pushable.start,
            startDate: pushable.startDate,
            renderStart: localRenderStart,
            renderStartDate: this.generateDate(localRenderStart),
            end: pushable.end,
            endDate: pushable.endDate,
            renderEnd: localRenderEnd,
            renderEndDate: this.generateDate(localRenderEnd),
            duration: duration / 86400000,
            offset: offset / 86400000,
            color: pushable.color,
            mini: item.mini
          };

          this.datePush(calendar, index, localPushable);

          indexSource = new Date(indexSource.getTime() + 86400000);
          index = this.generateDate(indexSource);
        }
      } else {
        pushable.offset =
          (renderStart.getTime() -
            new Date(this.generateEndStart(renderStartDate)).getTime()) /
          86400000;

        this.datePush(calendar, pushable.startDate, pushable);
      }
    });
    return calendar;
  };

  renderCalendarDays = calendar => {
    var renderables = [];
    for (var y in calendar) {
      for (var m in calendar[y]) {
        for (var d in calendar[y][m]) {
          renderables.push({
            date: {
              d: d,
              m: m,
              y: y
            },
            items: calendar[y][m][d]
          });
        }
      }
    }

    return renderables.map(this.renderCalendarDay);
  };

  generateOccupationTable = () => {};

  hour = hour => {
    var displayTime;
    if (this.state.h24) {
      displayTime = '' + (hour < 10 ? '0' + hour : hour) + ':00';
    } else {
      displayTime =
        '' +
        (hour === 12
          ? 'Noon'
          : hour > 12
            ? hour - 12 + ' PM'
            : hour > 0
              ? hour + ' AM'
              : '12 AM');
    }
    return (
      <HourContainer key={hour} style={{ top: hour * (100 / 24) + '%' }}>
        <HourTime>{displayTime}</HourTime>
        <Hour>
          <HalfHour />
        </Hour>
      </HourContainer>
    );
  };

  generateReadableMonth = month => {
    parseInt;
    switch (parseInt(month)) {
      case 1:
        return 'January';
      case 2:
        return 'February';
      case 3:
        return 'March';
      case 4:
        return 'April';
      case 5:
        return 'May';
      case 6:
        return 'June';
      case 7:
        return 'July';
      case 8:
        return 'August';
      case 9:
        return 'September';
      case 10:
        return 'October';
      case 11:
        return 'November';
      case 12:
        return 'December';
      default:
        return '';
    }
  };

  generateReadableDay = day => {
    switch (parseInt(day)) {
      case 1:
      case 21:
      case 31:
        return day + 'st';
      case 2:
      case 22:
        return day + 'nd';
      case 3:
      case 23:
        return day + 'rd';
      default:
        return day + 'th';
    }
  };

  generateReadableDate = (date, year) => {
    // 14th March 2016
    return (
      this.generateReadableDay(date.d) +
      ' ' +
      this.generateReadableMonth(date.m) +
      (year ? ' ' + date.y : '')
    );
  };

  renderCalendarDay = (day, index) => {
    var occupied = this.generateOccupationTable();
    var hours = [];
    for (var i = 0; i < 24; i++) hours.push(i);
    var d = day.date;
    var dayMinMax = this.state.dayMinMax[d.y][d.m][d.d];
    return (
      <Day key={index} dayMinMax={dayMinMax}>
        <CalendarContainer dayMinMax={dayMinMax}>
          <HoursContainer>{hours.map(this.hour)}</HoursContainer>
          <EventContainer>
            {day.items.map(this.renderCalendarItem(occupied))}
          </EventContainer>
        </CalendarContainer>
        <TopDate>{this.generateReadableDate(day.date, true)}</TopDate>
      </Day>
    );
  };

  colors = color => {
    var r, g, b;
    if (color) {
      r = color[0];
      g = color[1];
      b = color[2];
    } else {
      r = 0;
      g = 0;
      b = 0;
    }
    var hsl = rgbToHsl(r, g, b);
    var bg = hslToRgb(hsl[0], hsl[1], 0.6).map(i => Math.round(i));
    var txt = hslToRgb(hsl[0], hsl[1], 0.225).map(i => Math.round(i));
    var ln = hslToRgb(hsl[0], hsl[1], 0.3).map(i => Math.round(i));
    var hl = hslToRgb(hsl[0], hsl[1], 0.65).map(i => Math.round(i));

    var colors = {
      background: 'rgba(' + bg[0] + ', ' + bg[1] + ', ' + bg[2] + ',0.6)',
      text: 'rgba(' + txt[0] + ', ' + txt[1] + ', ' + txt[2] + ',1)',
      line: 'rgba(' + ln[0] + ', ' + ln[1] + ', ' + ln[2] + ',0.6)',
      hover: 'rgba(' + hl[0] + ', ' + hl[1] + ', ' + hl[2] + ',0.55)',
      debug: 'rgb(' + r + ', ' + g + ', ' + b + ')'
    };

    return colors;
  };

  renderCalendarItem = occupied => (item, index) => {
    var height = '3%';
    var contHeight = '3%';
    if (item.duration) {
      if (item.mini) {
        contHeight = 'calc(' + item.duration * 100 + '% + 2px)';
        height = 'calc(100% - 4px)';
      } else {
        height = 'calc(' + item.duration * 100 + '% - 2px)';
      }
    }

    var top = '0%';
    var contTop = '0%';
    if (item.offset) {
      if (item.mini) {
        contTop = 'calc(' + item.offset * 100 + '% - 2px)';
        top = '2px';
      } else {
        top = item.offset * 100 + '%';
      }
    }

    var color = this.colors(item.color);
    if (item.mini) {
      return (
        <MiniContainer style={{ height: contHeight, top: contTop }} key={index}>
          <Event
            href="javascript:void(0)"
            colors={color}
            style={{ height: height, top: top }}
            mini
          >
            {item.title}
          </Event>
        </MiniContainer>
      );
    }
    if (item.title === 'Hackathon') {
      return (
        <Event
          href="javascript:void(0)"
          colors={color}
          key={index}
          style={{ height: height, top: top, overflow: 'hidden' }}
        >
          <Dropper
            content={dropperContent}
            min={Math.round(item.duration * 20)}
            calendar
          />
          <div style={{ width: '100%', position: 'absolute' }}>
            {item.title}
          </div>
        </Event>
      );
    }
    return (
      <Event
        href="javascript:void(0)"
        colors={color}
        key={index}
        style={{ height: height, top: top }}
      >
        {item.title}
      </Event>
    );
  };

  content = () => {
    const { classes } = this.props;
    console.log(this.props);

    return (
      <Wrapper>
        <Title>{this.props.title ? this.props.title : 'PROP: TITLE'}</Title>
        <Options>
          <Option>
            <OptionLabel>12 hour</OptionLabel>
            <Switch
              checked={this.state.h24}
              onChange={this.switchH24}
              value="ampm24"
              classes={{
                switchBase: classes.switchBase,
                checked: classes.checked,
                bar: classes.bar
              }}
            />
            <OptionLabel>24 hour</OptionLabel>
          </Option>
        </Options>
        <DayContainer>
          {this.renderCalendarDays(this.state.calendar)}
        </DayContainer>
      </Wrapper>
    );
  };
}

export default withStyles(styles)(Calendar);
