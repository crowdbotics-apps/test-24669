import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps208497Navigator from '../features/Maps208497/navigator';
import Additem208496Navigator from '../features/Additem208496/navigator';
import Maps208492Navigator from '../features/Maps208492/navigator';
import UserProfile208488Navigator from '../features/UserProfile208488/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps208497: { screen: Maps208497Navigator },
Additem208496: { screen: Additem208496Navigator },
Maps208492: { screen: Maps208492Navigator },
UserProfile208488: { screen: UserProfile208488Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
