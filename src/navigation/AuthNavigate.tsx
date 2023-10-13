import React from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import LoginScreen from '../screens/register/LoginScreen';
import About from '../screens/about/about';
import AddToCard from '../screens/addToCard/addToCard';

type RootStackParamList = {
  LoginScreen: undefined;
  AboutPage: undefined;
  AddToCard: undefined;
};

const AuthNavigator = createStackNavigator<RootStackParamList>();

const screenOptions: StackNavigationOptions = {
  headerShown: false,
};

export function AuthNavigate() {
  return (
    <AuthNavigator.Navigator screenOptions={screenOptions}>
      {/* <AuthNavigator.Screen name="LoginScreen" component={LoginScreen} /> */}
      {/* <AuthNavigator.Screen name="AboutPage" component={About} /> */}
      <AuthNavigator.Screen name="AddToCard" component={AddToCard} />
    </AuthNavigator.Navigator>
  );
}
