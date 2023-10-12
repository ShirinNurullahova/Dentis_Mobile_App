import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import LoginScreen from '../screens/register/LoginScreen';
import SignUpScreen from '../screens/register/SignUpScreen';

type RootStackParamList = {
  LoginScreen: undefined;
  SignUpScreen: undefined
};

const AuthNavigator = createStackNavigator<RootStackParamList>();

const screenOptions: StackNavigationOptions = {
  headerShown: false,
};

export function AuthNavigate() {
  return (
    <AuthNavigator.Navigator screenOptions={screenOptions}>
      <AuthNavigator.Screen name="LoginScreen" component={LoginScreen} />
      {/* <AuthNavigator.Screen name="SignUpScreen" component={SignUpScreen} /> */}

    </AuthNavigator.Navigator>
  );
}
