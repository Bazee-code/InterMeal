import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Routes from './routes';
import DashboardScreen from '../screens/dashboard';
import InsightsScreen from '../screens/insights';
import ProfileScreen from '../screens/profile';
import TimerScreen from '../screens/timer';

const DashboardStack = createNativeStackNavigator();
const InsightsStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const TimerStack = createNativeStackNavigator();

export const DashboardScreenStack = () => {
  return (
    <DashboardStack.Navigator initialRouteName={Routes.DASHBOARD_SCREEN}>
      <DashboardStack.Screen
        name={Routes.DASHBOARD_SCREEN}
        component={DashboardScreen}
        options={{
          headerShown: false,
        }}
      />
    </DashboardStack.Navigator>
  );
};

export const InsightsScreenStack = () => {
  return (
    <InsightsStack.Navigator>
      <InsightsStack.Screen
        name={Routes.INSIGHTS_SCREEN}
        component={InsightsScreen}
        options={{
          headerShown: false,
        }}
      />
    </InsightsStack.Navigator>
  );
};

export const ProfileScreenStack = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name={Routes.PROFILE_SCREEN}
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </ProfileStack.Navigator>
  );
};

export const TimerScreenStack = () => {
  return (
    <TimerStack.Navigator>
      <TimerStack.Screen
        name={Routes.TIMER_SCREEN}
        component={TimerScreen}
        options={{
          headerShown: false,
        }}
      />
    </TimerStack.Navigator>
  );
};
