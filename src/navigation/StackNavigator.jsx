import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Routes from './routes';
import DashboardScreen from '../screens/dashboard';
import InsightsScreen from '../screens/insights';
import ProfileScreen from '../screens/profile';
import TimerScreen from '../screens/timer';
import CompleteSection from '../screens/timer/CompleteSection';
import LoginScreen from '../screens/auth/login';
import RegisterScreen from '../screens/auth/register';

const LoginStack = createNativeStackNavigator();
const DashboardStack = createNativeStackNavigator();
const InsightsStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const TimerStack = createNativeStackNavigator();

export const LoginScreenStack = () => {
  return (
    <LoginStack.Navigator initialRouteName={Routes.LOGIN_SCREEN}>
      <LoginStack.Screen
        name={Routes.REGISTER_SCREEN}
        component={RegisterScreen}
        options={{
          headerShown: false,
        }}
      />
      <LoginStack.Screen
        name={Routes.LOGIN_SCREEN}
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
    </LoginStack.Navigator>
  );
};

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
      <TimerStack.Screen
        name={Routes.SUCCESS_SCREEN}
        component={CompleteSection}
        options={{
          headerShown: false,
        }}
      />
    </TimerStack.Navigator>
  );
};
