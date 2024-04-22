import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialBottomTabNavigator} from 'react-native-paper/react-navigation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as Routes from './routes';
import Icon from 'react-native-vector-icons/AntDesign';
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
        },
        tabBarActiveTintColor: '#F97C00',
        tabBarInactiveTintColor: '#707070',
        headerShown: false,
      }}>
      <BottomTab.Screen
        name={Routes.DASHBOARD_TAB}
        component={DashboardScreenStack}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({color, size}) => (
            <Icon name="calendar" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name={Routes.INSIGHTS_TAB}
        component={InsightsScreenStack}
        options={{
          tabBarLabel: 'Timer',
          tabBarIcon: ({color, size}) => (
            <Icon name="calendar" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name={Routes.TIMER_TAB}
        component={TimerScreenStack}
        options={{
          tabBarLabel: 'Timer',
          tabBarIcon: ({color, size}) => (
            <Icon name="calendar" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name={Routes.PROFILE_TAB}
        component={ProfileScreenStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <Icon name="calendar" color={color} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
