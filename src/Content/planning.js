/* Handy dandy constants */
const second = 1;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const colors = {
  pink: [14, 0, 10],
  lightBlue: [188, 226, 248],
  green: [99, 218, 56],
  orange: [255, 149, 0],
  hackDelftGreen: [20, 97, 46],
  yellow: [249, 229, 0],
  purple: [160, 0, 255],
  red: [255, 0, 0],
  black: [0, 0, 0]
};

const planning = [
  {
    datetime: '2018-04-28T12:00:00+02:00',
    title: 'Doors open for teams',
    duration: hour,
    color: colors.black
  },
  {
    datetime: '2018-04-28T13:00:00+02:00',
    title: 'Opening ceremony',
    duration: hour,
    color: colors.lightBlue
  },
  {
    datetime: '2018-04-28T14:00:00+02:00',
    title: 'Workshops and group forming',
    duration: 2 * hour,
    color: colors.purple
  },
  {
    datetime: '2018-04-28T16:00:00+02:00',
    title: 'Hackathon',
    duration: day,
    color: colors.green
  },
  {
    datetime: '2018-04-28T17:00:00+02:00',
    title: 'Capture the Flag',
    duration: hour,
    color: colors.red,
    mini: true
  },
  {
    datetime: '2018-04-28T18:00:00+02:00',
    title: 'Dinner served',
    duration: hour + 30 * minute,
    color: colors.orange,
    mini: true
  },
  {
    datetime: '2018-04-28T20:30:00+02:00',
    title: 'Cup-Stacking',
    duration: hour,
    color: colors.red,
    mini: true
  },
  {
    datetime: '2018-04-29T07:30:00+02:00',
    title: 'Breakfast served',
    duration: hour,
    color: colors.orange,
    mini: true
  },
  {
    datetime: '2018-04-29T12:00:00+02:00',
    title: 'Lunch served',
    duration: hour + 30 * minute,
    color: colors.orange,
    mini: true
  },
  {
    datetime: '2018-04-29T16:00:00+02:00',
    title: 'Pitches for the judges',
    duration: hour,
    color: colors.yellow
  },
  {
    datetime: '2018-04-29T17:30:00+02:00',
    title: 'Finalists, winner announcement and prizes!',
    duration: hour + 30 * minute,
    color: colors.lightBlue
  }
];
export default planning;
