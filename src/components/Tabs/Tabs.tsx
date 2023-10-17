import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import HomePage from '../../screens/homePage/homePage';
import Notification from '../../screens/notification/notification';
import About from '../../screens/about/about';
import Doctorlist from '../../screens/doctorList/doctorlist';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SvgXml } from 'react-native-svg';
import HomeIcon from '../../assets/icons/HomeIcon';
import DoctorIcons from '../../assets/icons/DoctorsIcon';
import NotificationIcon from '../../assets/icons/NotificationIcon';
import MoreIcon from '../../assets/icons/MoreIcon';
import UserHomePage from '../../screens/userHomePage/userhomepage';
// import AndroidIcon from '../../assets/images/doctor2.png'
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#12CC89',
        tabBarInactiveTintColor: '#A3A6AB',
        tabBarStyle: {
        //   paddingHorizontal: 16,
          height: 73,
        //   paddingVertical: 16,
          display:'flex',
          alignItems:'center',
          justifyContent:"center",
        },
        headerStyle: {
          backgroundColor: 'white',
        },
        tabBarItemStyle:{
            display:'flex',
            alignItems:'center',
            justifyContent:"center",
        },
        tabBarIconStyle:{
            width:28,height:28,maxHeight:28,marginBottom:5
        },
        headerTitleStyle: {
          fontWeight: '500',
          fontSize: 11,
          color: '#12CC89',
      
        },
      }}
    >
      <Tab.Screen
        component={HomePage}
        name={'Ana Səhifə'}
        options={{
          tabBarIcon: ({ focused, color, }) => (
            <TouchableOpacity>
              <HomeIcon fill={color}/>
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name={'Həkimlər'}
        component={Doctorlist}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <TouchableOpacity>
                <DoctorIcons fill={color}/>
             </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name={'Bildirişlər'}
        component={Notification}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <TouchableOpacity>
                <NotificationIcon fill={color}/>
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name={'Daha çox'}
        component={UserHomePage}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <TouchableOpacity>
                <MoreIcon fill={color}/>
            </TouchableOpacity>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default Tabs;
