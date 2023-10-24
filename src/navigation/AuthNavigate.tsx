import React from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import LoginScreen from '../screens/register/LoginScreen';
import SignUpScreen from '../screens/register/SignUpScreen';
import About from '../screens/about/about';
import AddToCard from '../screens/addToCard/addToCard';
import Notification from '../screens/notification/notification';
import Doctorlist from '../screens/doctorList/doctorlist';
import OTPScreen from '../screens/register/OTPScreen';
import ResetPasswordScreen from '../screens/register/ResetPasswordScreen';
import UserHomePage from '../screens/userHomePage/userhomepage';
import HomePage from '../screens/homePage/homePage';
import DoctorPersonalPage from '../screens/doctorPersonalPage/doctorPersonalPage';
import Tabs from '../components/Tabs/Tabs';
import DoctorDetail from '../screens/doctorDetail/doctordetail';
import AddPatient from '../screens/addPatient/addPatient';
import Settings from '../screens/settings/settings';
import CardDetail from '../screens/cardDetail/cardDetail';
import CardDetailTwo from '../screens/cardDetail2/cardDetailTwo';
import Payment from '../screens/payment/payment';
import AddCard from '../screens/addCard/addCard';
import AddClient from '../screens/addClient/addClient'
import PatientAccount from '../screens/patientAccount/PatientAccount';
import PaymentList from '../screens/paymentList/paymentList';
type RootStackParamList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
  AboutPage: undefined;
  AddToCard: undefined;
  Notification: undefined;
  Doctorlist: undefined;
  ResetPasswordScreen: undefined;
  UserHomePage: undefined;
  HomePage: undefined;
  OTPScreen: undefined;
  DoctorPersonalPage: undefined;
  Tabs: undefined;
  DoctorDetail: undefined;
  AddPatient: undefined;
  Settings: undefined;
  CardDetail: undefined;
  CardDetailTwo: undefined;
  Payment: undefined;
  AddCard: undefined;
  AddClient: undefined;
  PatientAccount: undefined;
  PaymentList: undefined
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
      {/* <AuthNavigator.Screen name="Doctorlist" component={Doctorlist} /> */}
      {/* <AuthNavigator.Screen name="DoctorDetail" component={DoctorDetail} /> */}
      {/* <AuthNavigator.Screen name="AddPatient" component={AddPatient} /> */}
      {/* <AuthNavigator.Screen name="Payment" component={Payment} /> */}
            <AuthNavigator.Screen name="PaymentList" component={PaymentList} />

      {/* <AuthNavigator.Screen name="AddCard" component={AddCard} /> */}
      {/* <AuthNavigator.Screen name="AddClient" component={AddClient} /> */}
      {/* <AuthNavigator.Screen name="PatientAccount" component={PatientAccount} /> */}
      {/* <AuthNavigator.Screen name="DoctorPersonalPage" component={DoctorPersonalPage} /> */}
      {/* <AuthNavigator.Screen name="OTPScreen" component={OTPScreen} /> */}
      {/* <AuthNavigator.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} /> */}
      {/* <AuthNavigator.Screen name="AboutPage" component={About} /> */}
      {/* <AuthNavigator.Screen name="AddToCard" component={AddToCard} /> */}
      {/* <AuthNavigator.Screen name="Notification" component={Notification} /> */}
      {/* <AuthNavigator.Screen name="UserHomePage" component={UserHomePage} /> */}
      {/* <AuthNavigator.Screen name="Tabs" component={Tabs} /> */}
      {/* <AuthNavigator.Screen name="Settings" component={Settings} /> */}
      {/* <AuthNavigator.Screen name="CardDetail" component={CardDetail} /> */}
      {/* <AuthNavigator.Screen name="CardDetailTwo" component={CardDetailTwo} /> */}
      {/* <AuthNavigator.Screen name="HomePage" component={HomePage} /> */}
       {/* <AuthNavigator.Screen name="HomePage" component={HomePage} /> */}
      {/* <AuthNavigator.Screen name="AboutPage" component={About} /> */}
      {/* <AuthNavigator.Screen name="AddToCard" component={AddToCard} /> */}
      {/* <AuthNavigator.Screen name="Notification" component={Notification} /> */}
    </AuthNavigator.Navigator>
  );
}
