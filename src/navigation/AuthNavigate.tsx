import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import LoginScreen from '../screens/register/LoginScreen';

type RootStackParamList = {
  LoginScreen: undefined;
};

const AuthNavigator = createStackNavigator<RootStackParamList>();

const screenOptions: StackNavigationOptions = {
  headerShown: false,
};

export function AuthNavigate() {
  return (
    <AuthNavigator.Navigator screenOptions={screenOptions}>
      <AuthNavigator.Screen name="LoginScreen" component={LoginScreen} />
    </AuthNavigator.Navigator>
  );
}
