import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialBottomTabNavigator} from 'react-native-paper/react-navigation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as Routes from './routes';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  DashboardScreenStack,
  InsightsScreenStack,
  ProfileScreenStack,
  TimerScreenStack,
} from './StackNavigator';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      backBehavior="history"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#FFF',
          borderTopColor: '#080416',
          borderWidth: 0,
        },
        tabBarActiveTintColor: '#F97C00',
        tabBarInactiveTintColor: '#707070',
        headerShown: false,
      }}>
      <BottomTab.Screen
        name={Routes.DASHBOARD_SCREEN}
        component={DashboardScreenStack}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <BottomTab.Screen
        name={Routes.INSIGHTS_SCREEN}
        component={InsightsScreenStack}
        options={{
          tabBarLabel: 'Timer',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <BottomTab.Screen
        name={Routes.TIMER_SCREEN}
        component={TimerScreenStack}
        options={{
          tabBarLabel: 'Timer',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <BottomTab.Screen
        name={Routes.PROFILE_SCREEN}
        component={ProfileScreenStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
