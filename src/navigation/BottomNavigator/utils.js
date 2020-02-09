import { HOME_MSG, DISCOVER_MSG, TIPS_MSG } from '../../config/messages';
import { HOME_SCREEN, DISCOVER_SCREEN, TIPS_SCREEN } from '../screens';
import { getCurrentRouteName } from '../utils';
import testID from '../../utils/testID';

import ids from './identifiers';

const LOCKED_SCREENS = [];

const ROUTES = [
  {
    ...testID(ids.BUTTON_HOME),
    key: HOME_SCREEN,
    title: HOME_MSG,
    icon: 'home-outline',
    activeIcon: 'home'
  },
  {
    ...testID(ids.BUTTON_LOCAL_USERS),
    key: DISCOVER_SCREEN,
    title: DISCOVER_MSG,
    icon: 'camera-outline',
    activeIcon: 'camera'
  },
  {
    ...testID(ids.BUTTON_RANDOM_USERS),
    key: TIPS_SCREEN,
    title: TIPS_MSG,
    icon: 'star-outline',
    activeIcon: 'star'
  }
];

const getState = nav => {
  const routeName = getCurrentRouteName(nav);
  const nextIndex = ROUTES.findIndex(r => r.key === routeName);
  const nextRoutes = ROUTES.map((r, i) => ({
    ...r,
    icon: i === nextIndex ? r.activeIcon : r.icon
  }));

  return {
    index: nextIndex,
    routes: nextRoutes
  };
};

const isLocked = nav => LOCKED_SCREENS.includes(getCurrentRouteName(nav));

export { getState, isLocked };