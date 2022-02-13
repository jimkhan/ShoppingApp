import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {CheckoutScreen, ShoppingCartScreen} from '@screens';
import {RootStackParamList} from 'types';
import RootStackNavigator from '../stackNavigator/';
import HeaderRight from '../CustomHeader';

const Drawer = createDrawerNavigator<RootStackParamList>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerRight: props => <HeaderRight {...props} />,
      }}>
      <Drawer.Screen name="Home" component={RootStackNavigator} />
      <Drawer.Screen name="Checkout" component={CheckoutScreen} />
      <Drawer.Screen name="Cart" component={ShoppingCartScreen} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
