import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from 'types';
import {LoginScreen, OTpScreen, OnboardingScreen} from '@screens';

const Stack = createStackNavigator<RootStackParamList>();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{
          title: '',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: '',
          //   headerShown: false,
        }}
      />
      <Stack.Screen
        name="Otp"
        component={OTpScreen}
        options={{
          title: '',
          //   headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
