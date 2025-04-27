import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const sections = [
  {
    id: 1,
    title: 'Top Rated Movies',
  },
  {
    id: 2,
    title: 'Popular Movies',
  },
  {
    id: 3,
    title: 'Upcoming Movies',
  },
  {
    id: 4,
    title: 'Now Playing Movies',
  },
  {
    id: 5,
    title: 'My List',
  },
  {
    id: 6,
    title: 'New Releases',
  },
  {
    id: 7,
    title: 'Ensemble TV Shows',
  },
  {
    id: 8,
    title: 'Chilly Thrillers',
  },
  {
    id: 9,
    title: 'Only on Netflix',
  },
];

export {width, height, sections};
