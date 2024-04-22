import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialBottomTabNavigator} from 'react-native-paper/react-navigation';
import DashboardScreen from '../screens/dashboard';
import * as Routes from './routes';
import InsightsScreen from '../screens/insights';
import ProfileScreen from '../screens/profile';
import TimerScreen from '../screens/timer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const BottomTab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName={Routes.DASHBOARD_SCREEN}
      activeColor="#e91e63"
      barStyle={{backgroundColor: 'tomato'}}>
      <BottomTab.Screen
        name={Routes.DASHBOARD_SCREEN}
        component={DashboardScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <BottomTab.Screen
        name={Routes.INSIGHTS_SCREEN}
        component={InsightsScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <BottomTab.Screen
        name={Routes.PROFILE_SCREEN}
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <BottomTab.Screen
        name={Routes.TIMER_SCREEN}
        component={TimerScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
