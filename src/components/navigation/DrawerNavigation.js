import React from 'react';
import { Dimensions } from 'react-native';
import { createAppContainer, createDrawerNavigator } from 'react-navigation';
import MenuDrawer from '../common/MenuDrawer';
//screens
import Advantage from '../containers/Advantage';
import Assistants from '../containers/Assistants';
import Benefits from '../containers/Benefits';
import CloudImages from '../containers/CloudImages';
import Contributions from '../containers/Contributions';
import Definition from '../containers/Definition';
import Disadvantage from '../containers/Disadvantage';
import Form from '../containers/Form';
import Members from '../containers/Members';

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
  drawerWidth: WIDTH * 0.8,
  contentComponent: ({ navigation }) => {
    return (<MenuDrawer navigation={navigation} />)
  }
}

const DrawerNavigator = createDrawerNavigator({
  Members: { screen: Members },
  Form: { screen: Form },
  Definition: { screen: Definition },
  Benefits: { screen: Benefits },
  Advantage: { screen: Advantage },
  Disadvantage: { screen: Disadvantage },
  CloudImages: { screen: CloudImages },
  Contributions: { screen: Contributions },
  Assistants: { screen: Assistants }
},
  DrawerConfig
);

export default createAppContainer(DrawerNavigator);