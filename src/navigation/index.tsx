import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStackNavigator from './drawerNavigator';
import AuthStackNavigator from './AuthNavigator';
import {useSelector} from 'react-redux';

const Navigation = () => {
  const auth = useSelector(state => state.auth);

  return (
    <NavigationContainer>
      {auth.userToken ? <RootStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
