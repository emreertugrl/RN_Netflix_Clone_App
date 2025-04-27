import {DOWNLOADS, HOME, NEWHOT, SEARCH} from '../../utils/routes';
import {
  ArrowCircleDown2,
  Home,
  MessageQuestion,
  SearchNormal1,
  VideoPlay,
} from 'iconsax-react-nativejs';

const TabBarIcon = ({focused, color, size, route}) => {
  switch (route.name) {
    case HOME:
      return <Home color={color} size={size} variant={focused ? 'Bold' : ''} />;
    case NEWHOT:
      return (
        <VideoPlay color={color} size={size} variant={focused ? 'Bold' : ''} />
      );
    case SEARCH:
      return (
        <SearchNormal1
          color={color}
          size={size}
          variant={focused ? 'Bold' : ''}
        />
      );
    case DOWNLOADS:
      return (
        <ArrowCircleDown2
          color={color}
          size={size}
          variant={focused ? 'Bold' : ''}
        />
      );

    default:
      return <MessageQuestion color={color} size={size} />;
  }
};

export default TabBarIcon;
