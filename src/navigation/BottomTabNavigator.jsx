import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as Routes from './routes';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  DashboardScreenStack,
  InsightsScreenStack,
  LoginScreenStack,
  ProfileScreenStack,
  TimerScreenStack,
} from './StackNavigator';
import * as Keychain from 'react-native-keychain';
import {useDispatch, useSelector} from 'react-redux';
import {setAuthStatus} from '../redux/services/auth/authSlice';

const BottomTab = createBottomTabNavigator();

const RenderBottomTabNavigator = () => {
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

const BottomTabNavigator = () => {
  const {authStatus} = useSelector(state => state.auth);
  console.log('authStatus', authStatus);
  const dispatch = useDispatch();

  const handleAuthStatus = async () => {
    try {
      const credentials = await Keychain.getGenericPassword();
      console.log('credentials nav', credentials);
      if (credentials) {
        dispatch(setAuthStatus(true));
      } else {
        dispatch(setAuthStatus(false));
      }
    } catch (e) {
      dispatch(setAuthStatus(false));
    }
  };

  useEffect(() => {
    handleAuthStatus();
  }, [authStatus]);

  return authStatus ? <RenderBottomTabNavigator /> : <LoginScreenStack />;
};

export default BottomTabNavigator;
