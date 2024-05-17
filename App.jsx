import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {LoginScreenStack} from './src/navigation/StackNavigator';

const App = gestureHandlerRootHOC(() => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <BottomTabNavigator />
        {/* <LoginScreenStack /> */}
      </SafeAreaProvider>
    </NavigationContainer>
  );
});

export default App;
