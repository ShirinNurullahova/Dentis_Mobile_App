import React from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import LoginScreen from '../screens/register/LoginScreen';
import SignUpScreen from '../screens/register/SignUpScreen';
import About from '../screens/about/about';
import AddToCard from '../screens/addToCard/addToCard';
import Notification from '../screens/notification/notification';
import Doctorlist from '../screens/doctorList/doctorlist';
import UserHomePage from '../screens/userHomePage/userhomepage';
import OTPScreen from '../screens/register/OTPScreen'
type RootStackParamList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
  AboutPage: undefined;
  AddToCard: undefined;
  Notification: undefined;
  Doctorlist: undefined;

  OTPScreen:undefined
};

const AuthNavigator = createStackNavigator<RootStackParamList>();

const screenOptions: StackNavigationOptions = {
  headerShown: false,
};

export function AuthNavigate() {
  return (
    <AuthNavigator.Navigator screenOptions={screenOptions}>
      {/* <AuthNavigator.Screen name="LoginScreen" component={LoginScreen} /> */}
      {/* <AuthNavigator.Screen name="SignUpScreen" component={SignUpScreen} /> */}
      <AuthNavigator.Screen name="OTPScreen" component={OTPScreen} />
      {/* <AuthNavigator.Screen name="AboutPage" component={About} /> */}
      {/* <AuthNavigator.Screen name="AddToCard" component={AddToCard} /> */}
      {/* <AuthNavigator.Screen name="Notification" component={Notification} /> */}
      <AuthNavigator.Screen name="UserHomePage" component={UserHomePage} />
      {/* <AuthNavigator.Screen name="AboutPage" component={About} /> */}
      {/* <AuthNavigator.Screen name="AddToCard" component={AddToCard} /> */}
      {/* <AuthNavigator.Screen name="Notification" component={Notification} /> */}
      {/* <AuthNavigator.Screen name="Doctorlist" component={Doctorlist} /> */}
    </AuthNavigator.Navigator>
  );
}
