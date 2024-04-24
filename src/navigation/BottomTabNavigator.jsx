import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as Routes from './routes';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
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
          backgroundColor: '#fb9f9f',
          borderTopColor: '#fb9f9f',
        },
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#fff',
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
        name={Routes.TIMER_TAB}
        component={TimerScreenStack}
        options={{
          tabBarLabel: 'Timer',
          tabBarIcon: ({color, size}) => (
            <Icon1 name="timer-outline" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name={Routes.INSIGHTS_TAB}
        component={InsightsScreenStack}
        options={{
          tabBarLabel: 'Insights',
          tabBarIcon: ({color, size}) => (
            <Icon2 name="lightbulb-on-outline" color={color} size={size} />
          ),
        }}
      />

      <BottomTab.Screen
        name={Routes.PROFILE_TAB}
        component={ProfileScreenStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
